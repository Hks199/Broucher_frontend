import { writeFileSync } from 'node:fs';

const origin = process.env.PREVIEW_URL || 'http://localhost:4173';
const tabs = await (await fetch('http://127.0.0.1:9222/json')).json();
const tab = tabs.find(t => t.type === 'page' && t.url.includes('brochure')) || tabs.find(t => t.type === 'page');
const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise(resolve => ws.addEventListener('open', resolve, { once: true }));
let nextId = 0;
const pending = new Map();
const errors = [];
ws.addEventListener('message', event => {
  const message = JSON.parse(event.data);
  if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.text);
  if (message.id) {
    const request = pending.get(message.id);
    pending.delete(message.id);
    message.error ? request.reject(new Error(`${request.method}: ${message.error.message}`)) : request.resolve(message.result);
  }
});
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++nextId;
  pending.set(id, { resolve, reject, method });
  ws.send(JSON.stringify({ id, method, params }));
});
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
}
function assert(value, label) { if (!value) throw new Error(label); console.log(`PASS ${label}`); }
try {
  await send('Runtime.enable');
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 1320, deviceScaleFactor: 1, mobile: false });
  const loaded = new Promise(resolve => {
    const listener = event => {
      if (JSON.parse(event.data).method === 'Page.loadEventFired') { ws.removeEventListener('message', listener); resolve(); }
    };
    ws.addEventListener('message', listener);
  });
  await send('Page.navigate', { url: `${origin}/?brochure` });
  await loaded;
  await evaluate(`new Promise((resolve,reject)=>{const start=Date.now();const timer=setInterval(()=>{if(document.querySelectorAll('.bk-page').length===6){clearInterval(timer);resolve()}else if(Date.now()-start>15000){clearInterval(timer);reject(Error('Brochure did not render'))}},100)})`);
  await evaluate('document.fonts.ready');
  await evaluate(`Promise.all([...document.images].map(img=>img.decode()))`);
  assert(await evaluate(`document.querySelectorAll('.bk-page').length===6`), 'All six brochure pages render');
  assert(await evaluate(`document.querySelectorAll('.bk-plan').length===9`), 'All nine packages render');
  assert(await evaluate(`document.querySelectorAll('.bk-full-table tbody tr:not(.bk-category)').length===43`), 'All 43 e-commerce features render');
  const layout = await evaluate(`([...document.querySelectorAll('.bk-page')].map(page=>{const foot=page.querySelector('.bk-page-foot').getBoundingClientRect();const content=[...page.children].filter(el=>!el.matches('header,footer'));return {page:page.getAttribute('aria-label'),overlap:content.some(el=>el.getBoundingClientRect().bottom>foot.top-5),overflow:page.scrollHeight>page.clientHeight}}))`);
  assert(layout.every(p => !p.overlap && !p.overflow), `Page content fits above footers: ${JSON.stringify(layout)}`);
  writeFileSync('.brochure-desktop-preview.png', Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).data, 'base64'));
  for (const width of [390, 320]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 844, deviceScaleFactor: 1, mobile: true });
    assert(await evaluate('document.documentElement.scrollWidth<=innerWidth'), `No horizontal overflow at ${width}px`);
  }
  writeFileSync('.brochure-mobile-preview.png', Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).data, 'base64'));
  await send('Emulation.setDeviceMetricsOverride', { width: 794, height: 1123, deviceScaleFactor: 1, mobile: false });
  await send('Emulation.setEmulatedMedia', { media: 'print' });
  const pdf = await send('Page.printToPDF', { printBackground: true, preferCSSPageSize: true, displayHeaderFooter: false });
  writeFileSync('public/brochure.pdf', Buffer.from(pdf.data, 'base64'));
  const response = await fetch(`${origin}/brochure.pdf`);
  assert(response.ok && response.headers.get('content-type').includes('pdf'), 'Download URL serves the PDF');
  assert(await evaluate(`document.querySelector('.bk-download').download.endsWith('.pdf')`), 'Download button requests a PDF file download');
  assert(errors.length === 0, `No browser errors: ${errors.join(', ')}`);
  console.log('Generated public/brochure.pdf');
} finally { ws.close(); }
