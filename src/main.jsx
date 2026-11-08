import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, ArrowDown, Check, ChevronDown, CodeXml, Globe, ShoppingBag, Megaphone, Sparkles, MapPin, Phone, Menu, X, MessageCircle, Download, Monitor, Smartphone, MousePointer2, Layers, ShieldCheck, Zap, Plus, PenTool, Heart, Pause, Play, Server, Mail, Search, Wrench, Wallet, SlidersHorizontal } from 'lucide-react';
import './styles.css';
import './redesign.css';
import { ecommercePlans, ecommerceSections, ecommerceCapacityNote } from './data/ecommerce.js';
import Brochure from './Brochure.jsx';

const whatsapp = (text = 'Hi CodeChronicle! I would like to discuss a project.') => `https://wa.me/919518545028?text=${encodeURIComponent(text)}`;
function WhatsAppIcon({ size = 24, ...props }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M20.52 3.48A11.88 11.88 0 0 0 12.05 0C5.45 0 .08 5.37.08 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.96 11.96 0 0 0 5.84 1.49h.01C18.65 23.86 24 18.49 24 11.89c0-3.2-1.24-6.2-3.48-8.41ZM12.05 21.85a9.91 9.91 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.24-.37a9.89 9.89 0 0 1-1.52-5.3c0-5.49 4.46-9.96 9.97-9.96a9.9 9.9 0 0 1 7.04 2.92 9.9 9.9 0 0 1 2.91 7.05c0 5.5-4.47 9.87-10.05 9.87Z"/><path d="M17.5 14.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51H7.8c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.48.71.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.77-.73 2.02-1.44.25-.72.25-1.33.18-1.45-.08-.13-.28-.2-.58-.35Z"/></svg>;
}
const services = [
  { icon: Globe, title: 'Websites that mean business.', desc: 'A beautiful first impression. A faster experience. A website that works as hard as you do.', price: '4,999', label: 'Website development', tag: 'MAKE YOUR FIRST IMPRESSION COUNT', color: 'peach' },
  { icon: ShoppingBag, title: 'Your store. Always open.', desc: 'Turn your products into possibilities with an online store built for effortless shopping.', price: '14,999', label: 'E-commerce development', tag: 'FROM SCROLLING TO SHOPPING', color: 'sage' },
  { icon: Megaphone, title: 'Be seen. Stay remembered.', desc: 'Thoughtful content, scroll-stopping creatives, and a consistent voice for your brand.', price: '9,000', label: 'Digital marketing', tag: 'GIVE YOUR BRAND A BIGGER VOICE', color: 'lavender' },
];
const packages = [
  { label: 'Websites', icon: Globe, note: 'One-time project pricing. Built around your business.', plans: [
    { name: 'Starter', desc: 'Your first step into the digital world.', price: '4,999', meta: '3 pages · 3–5 days', features: ['Responsive, mobile-friendly design', 'WhatsApp & contact form', 'Google Maps & social links', 'Basic SEO setup', '15 days of content support'] },
    { name: 'Business', desc: 'More room for a growing business.', price: '9,999', meta: '7 pages · 7–10 days', features: ['Everything in Starter', 'Gallery & blog', 'Basic admin panel / CMS', 'Analytics integration', '30 days of content support'] },
    { name: 'Premium', desc: 'A complete digital home for your brand.', price: '19,999', meta: '15 pages · 12–20 days', features: ['Everything in Business', 'Advanced admin panel / CMS', 'Lead enquiry dashboard', 'Analytics integration', '60 days of content support'] },
  ], rows: [['Responsive website', 'Yes', 'Yes', 'Yes'], ['WhatsApp / contact form', 'Yes', 'Yes', 'Yes'], ['Google Maps / social links', 'Yes', 'Yes', 'Yes'], ['Basic SEO setup', 'Yes', 'Yes', 'Yes'], ['Gallery & blog', '—', 'Yes', 'Yes'], ['Admin panel / CMS', '—', 'Basic', 'Advanced'], ['Analytics integration', '—', 'Yes', 'Yes'], ['Lead enquiry dashboard', '—', '—', 'Yes'], ['Content support', '15 days', '30 days', '60 days']] },
  { label: 'E-commerce', icon: ShoppingBag, note: 'One-time project pricing. Product uploads by our team are not included and are charged separately. Add-ons are separately quoted.', plans: ecommercePlans, rows: [] },
  { label: 'Digital marketing', icon: Megaphone, note: 'Package totals for the selected duration. Advertising spend is extra.', plans: [
    { name: '1 Month', desc: 'Start showing up for your audience.', price: '9,000', meta: '8 posts · 3 reels', features: ['Instagram & Facebook support', 'Captions & hashtags', 'Monthly content planning', 'Basic brand visuals', '3 edited reels / short videos'] },
    { name: '3 Months', desc: 'Build a consistent brand presence.', price: '23,000', meta: '24 posts · 10 reels', features: ['Instagram & Facebook support', 'Captions & hashtags', '3-month content planning', 'Festival & offer campaigns', 'Monthly performance summaries'] },
    { name: '6 Months', desc: 'Make your brand part of the conversation.', price: '42,000', meta: '48 posts · 22 reels', features: ['Instagram & Facebook support', 'Captions & hashtags', '6-month content planning', 'Festival & offer campaigns', 'Monthly performance summaries'] },
  ], rows: [['Social media creatives', '8', '24', '48'], ['Edited reels / short videos', '3', '10', '22'], ['Instagram + Facebook support', 'Yes', 'Yes', 'Yes'], ['Captions & hashtags', 'Yes', 'Yes', 'Yes'], ['Content planning', 'Monthly', '3 months', '6 months'], ['Festival / offer campaigns', '—', 'Yes', 'Yes'], ['Performance summaries', '—', 'Monthly', 'Monthly'], ['Consistent brand visuals', 'Basic', 'Yes', 'Yes']] },
];
const addons = [
  { name: 'Domain registration', price: '₹800–₹1,500', period: '/ year', category: 'launch', icon: Globe, theme: 'blue', detail: 'Your own address on the web.' },
  { name: 'Basic hosting', price: '₹2,000–₹5,000', period: '/ year', category: 'launch', icon: Server, theme: 'violet', detail: 'A home for your business website.' },
  { name: 'Business email setup', price: '₹999', period: 'setup', category: 'launch', icon: Mail, theme: 'teal', detail: 'Give your conversations a professional touch.' },
  { name: 'Extra website page', price: '₹800', period: '/ page', category: 'grow', icon: Plus, theme: 'blue', detail: 'More room for your business story.' },
  { name: 'Product upload', price: '₹20–₹50', period: '/ product', category: 'grow', icon: ShoppingBag, theme: 'amber', detail: 'Product uploads by our team, quoted separately.' },
  { name: 'Logo design', price: '₹1,499', period: 'project', category: 'grow', icon: PenTool, theme: 'rose', detail: 'A distinct mark for your next chapter.' },
  { name: 'Basic SEO service', price: '₹2,999', period: '/ month', category: 'grow', icon: Search, theme: 'violet', detail: 'Help your business get discovered.' },
  { name: 'Google Business Profile setup', price: '₹1,499', period: 'setup', category: 'launch', icon: MapPin, theme: 'amber', detail: 'Put your local business on the map.' },
  { name: 'Website maintenance', price: '₹2,999', period: '/ year', category: 'maintain', icon: Wrench, theme: 'teal', detail: 'Keep your digital presence cared for.' },
  { name: 'E-commerce maintenance', price: '₹5,999', period: '/ year', category: 'maintain', icon: ShieldCheck, theme: 'blue', detail: 'Ongoing care for your online store.' },
];

function Brand() { return <a href="#" className="brand" aria-label="CodeChronicle home"><img className="brand-logo" src="/codechronicle__logo-transparent.png" alt="" width="35" height="44"/><span><span className="brand-code">Code</span><span className="brand-light">Chronicle</span><span className="brand-dot">.</span></span></a>; }
function HeroVisual() {
  const tilt = event => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches || document.documentElement.dataset.motionPaused === 'true') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--tilt-x', `${((event.clientY - bounds.top) / bounds.height - .5) * -7}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${((event.clientX - bounds.left) / bounds.width - .5) * 7}deg`);
  };
  const reset = event => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  };
  return <div className="hero-art hero-showcase" onPointerMove={tilt} onPointerLeave={reset} aria-label="Illustrative preview of a CodeChronicle website design">
    <div className="showcase-glow" aria-hidden="true"/><div className="showcase-orbit orbit-one" aria-hidden="true"/><div className="showcase-orbit orbit-two" aria-hidden="true"/>
    <div className="floating-label"><span className="tiny-icon"><Sparkles size={16}/></span> Your ambition. Our next creation.</div>
    <div className="studio-perspective"><div className="studio-browser"><div className="studio-chrome"><div className="browser-dots"><i/><i/><i/></div><span><ShieldCheck size={10}/> yourbrand.com</span><Plus size={13}/></div><div className="studio-page"><div className="studio-navigation"><span className="concept-brand"><span/> YOUR BRAND<span className="concept-dot">®</span></span><span>Our story <ArrowUpRight size={11}/></span></div><div className="studio-page-copy"><span className="concept-eyebrow">A NEW PERSPECTIVE STARTS HERE</span><h2>Built for<br/>what’s <em>next.</em></h2><p>A digital home for your biggest ideas.</p><span className="concept-cta">Meet your possibilities <ArrowUpRight size={12}/></span></div><div className="sculpture" aria-hidden="true"><div className="sculpture-ring ring-back"/><div className="sculpture-core"><img src="/codechronicle__logo-transparent.png" alt=""/></div><div className="sculpture-ring ring-front"/><span className="sculpture-dot"/></div><div className="studio-page-footer"><span>THOUGHTFUL DESIGN. LIMITLESS POSSIBILITIES.</span><ArrowDown size={14}/></div></div></div></div>
    <div className="build-card"><div className="build-icon"><CodeXml size={19}/></div><div><span>BUILT WITH PURPOSE</span><strong>Looks great. Works beautifully.</strong></div><span className="build-status"><Check size={12}/></span><div className="build-tags"><span>Responsive</span><span>Fast</span><span>Made for you</span></div></div>
    <div className="showcase-mobile"><div className="showcase-mobile-top"><span/><span>9:41</span></div><div className="showcase-mobile-brand"><span>your store.</span><ShoppingBag size={13}/></div><div className="mobile-product-art"><div/><span><Heart size={12}/></span></div><span className="mobile-product-label">THE EVERYDAY COLLECTION</span><strong>Something extraordinary.</strong><div className="mobile-product-buy"><span>Made to be yours.</span><ArrowUpRight size={12}/></div><div className="mobile-product-line"/></div>
    <div className="showcase-cursor" aria-hidden="true"><MousePointer2 size={25} fill="currentColor"/><span>Your next chapter</span></div>
    <div className="art-caption"><span/> A LITTLE PREVIEW OF WHAT’S POSSIBLE</div>
  </div>;
}
function ServicePreview({ index }) {
  return <div className={`service-preview preview-${index}`} aria-hidden="true">{index === 0 ? <><div className="preview-window"><div className="preview-toolbar"><span/><span/><span/></div><div className="preview-web"><span className="preview-web-kicker">A NEW KIND OF PRESENCE</span><strong>Stand out.<br/><em>Stay ahead.</em></strong><span className="preview-web-button">Discover more <ArrowUpRight size={9}/></span><div className="preview-web-shape"/></div></div><span className="preview-sticker"><Monitor size={12}/> Every screen. Every detail.</span></> : index === 1 ? <><div className="preview-shop-product"><div className="preview-product-object"/><span>THE NEW COLLECTION</span><strong>Made for your everyday.</strong></div><div className="preview-order"><ShoppingBag size={17}/><div><strong>From browsing to buying.</strong><span>A seamless shopping experience.</span></div><Check size={14}/></div></> : <><div className="preview-social social-one"><span>YOUR BRAND,</span><strong>in the<br/><em>spotlight.</em></strong><span className="social-asterisk">✳</span></div><div className="preview-social social-two"><span>MAKE SOME</span><strong>good<br/>noise.</strong><Megaphone size={26}/></div><span className="preview-sticker"><Sparkles size={12}/> Content with character.</span></>}</div>;
}
function FeatureComparison({ group }) {
  return <div className="comparison"><table><caption className="sr-only">{group.label} package comparison</caption><thead><tr><th scope="col">Features</th>{group.plans.map(plan => <th scope="col" key={plan.name}>{plan.name}</th>)}</tr></thead><tbody>{group.rows.map(([feature, ...values]) => <tr key={feature}><th scope="row">{feature}</th>{values.map((value, index) => <td key={index}>{value === 'Yes' ? <Check size={16} aria-label="Included"/> : value}</td>)}</tr>)}</tbody></table></div>;
}
function EcommerceComparison() {
  const [compact, setCompact] = useState(() => window.matchMedia('(max-width: 640px)').matches);
  const [selectedPlan, setSelectedPlan] = useState(0);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)');
    const update = () => setCompact(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  const planIndexes = compact ? [selectedPlan] : [0, 1, 2];
  const icons = [Monitor, ShoppingBag, Wallet, Heart, Layers, ShieldCheck];
  const renderValue = value => value === true ? <span className="ecommerce-included"><Check size={15} aria-hidden="true"/><span className="sr-only">Included</span></span> : value === false ? <span className="ecommerce-excluded" aria-label="Not included">—</span> : value === 'Add-on' ? <span className="ecommerce-addon" aria-label="Add-on, separately quoted">Add-on</span> : <span className="ecommerce-value">{value}</span>;
  return <section className="complete-comparison" id="ecommerce-comparison" aria-labelledby="ecommerce-comparison-title">
    <div className="complete-comparison-heading"><span className="complete-comparison-icon"><Layers size={23}/></span><div><span className="complete-comparison-eyebrow">E-COMMERCE · 43 FEATURES · 3 PLANS</span><h3 id="ecommerce-comparison-title">Complete feature comparison</h3></div></div>
    <div className="ecommerce-legend"><span><Check size={14}/> Included</span><span><span className="ecommerce-excluded">—</span> Not included</span><span><span className="ecommerce-addon">Add-on</span> = separately quoted</span></div>
    {compact && <div className="ecommerce-mobile-controls"><p>Choose a plan to view all its features.</p><div role="group" aria-label="Select e-commerce plan for comparison">{ecommercePlans.map((plan, index) => <button key={plan.name} onClick={() => setSelectedPlan(index)} aria-pressed={selectedPlan === index}><strong>{plan.name}</strong><span>₹{plan.price}</span></button>)}</div></div>}
    <div className="ecommerce-table-scroll" tabIndex={0} role="region" aria-label="E-commerce feature comparison. Scroll to explore all six categories."><table className={`ecommerce-table ${compact ? 'is-compact' : ''}`}><caption className="sr-only">{compact ? `${ecommercePlans[selectedPlan].name} e-commerce plan: all features` : 'Complete Starter, Business and Premium e-commerce feature comparison'}</caption><colgroup><col className="ecommerce-feature-col"/>{planIndexes.map(index => <col className="ecommerce-plan-col" key={index}/>)}</colgroup><thead><tr><th scope="col">Features</th>{planIndexes.map(index => <th scope="col" className={index === 1 ? 'ecommerce-business-col' : ''} key={index}><span>{ecommercePlans[index].name}</span><strong>₹{ecommercePlans[index].price}</strong></th>)}</tr></thead>{ecommerceSections.map((section, sectionIndex) => {
      const Icon = icons[sectionIndex];
      return <tbody key={section.title}><tr className="ecommerce-category-row"><th colSpan={planIndexes.length + 1} scope="rowgroup"><span><Icon size={16}/>{section.title}<span className="ecommerce-feature-count">{section.rows.length} features</span></span></th></tr>{section.rows.map(([feature, ...values]) => <tr className="ecommerce-feature-row" key={feature}><th scope="row">{feature}</th>{planIndexes.map(index => <td className={index === 1 ? 'ecommerce-business-col' : ''} key={index}>{renderValue(values[index])}</td>)}</tr>)}</tbody>;
    })}</table></div>
    <p className="ecommerce-scroll-hint"><ArrowDown size={13}/> Scroll inside the table to explore all categories.</p><div className="ecommerce-capacity-note" id="ecommerce-capacity-note"><ShieldCheck size={17}/><p><strong>* Product entry and paid upload services</strong>{ecommerceCapacityNote}</p></div>
  </section>;
}
function ProcessSection() {
  const steps = [
    { label: 'DISCOVER', title: 'Tell us your story', desc: 'Share your business, your audience, and what you want to achieve.', icon: MessageCircle, theme: 'discover', detail: 'Your vision, understood.' },
    { label: 'PLAN', title: 'Make it a plan', desc: 'Choose your package. We confirm the scope, timeline, and quotation.', icon: PenTool, theme: 'plan', detail: 'A clear way forward.' },
    { label: 'CREATE', title: 'Watch it come to life', desc: 'We design and develop. You share feedback. We refine the details.', icon: CodeXml, theme: 'create', detail: 'Ideas become experiences.' },
    { label: 'LAUNCH', title: 'Hello, world.', desc: 'We launch your project and support you as your next chapter begins.', icon: Globe, theme: 'launch', detail: 'Your next chapter begins.' },
  ];
  return <section id="process" className="section container process-section">
    <div className="section-heading"><div><div className="eyebrow accent">03 / HOW IT WORKS</div><h2>Good things start<br/>with a <span className="process-heading-accent">conversation.</span></h2></div><p>A simple, collaborative process.<br/>You bring the idea. We bring it to life.</p></div>
    <div className="process-journey">
      <div className="process-rail" aria-hidden="true"><div className="process-rail-points">{steps.map(step => <span key={step.label} className={`step-${step.theme}`}><i/></span>)}</div><span className="process-traveller"/></div>
      <ol className="process-grid">{steps.map((step, index) => <li className={`process-card step-${step.theme}`} key={step.label} style={{ '--step-index': index }}>
        <div className="process-top"><span className="process-number">0{index + 1}</span><span className="process-icon"><step.icon size={29} strokeWidth={1.7}/></span></div>
        <span className="process-step-label">{step.label}</span><h3>{step.title}</h3><p>{step.desc}</p>
        <div className="process-card-footer"><span className="process-mini-dot"/>{step.detail}<ArrowUpRight size={14}/></div>
      </li>)}</ol>
    </div>
    <div className="process-endnote"><span><Sparkles size={17}/> A little collaboration. A whole lot of possibility.</span><a href="#contact">Let’s take the first step <ArrowUpRight size={16}/></a></div>
  </section>;
}
function AddonsSection() {
  const [filter, setFilter] = useState('all');
  const filtered = addons.filter(service => filter === 'all' || service.category === filter);
  const categories = [{ id: 'all', label: 'All services' }, { id: 'launch', label: 'Launch' }, { id: 'grow', label: 'Grow' }, { id: 'maintain', label: 'Maintain' }];
  return <section id="addons" className="section container addons-grid addons-section">
    <div className="addons-intro"><div className="eyebrow accent">THE FINISHING TOUCHES</div><h2>A little extra.<br/><span className="addons-heading-accent">A lot of possibility.</span></h2><p>Build on your package with the services your business needs next. Pick the finishing touches that make it yours.</p>
      <div className="addons-visual" aria-hidden="true"><div className="addons-visual-grid"/><div className="addons-orbit"/><div className="addons-logo-core"><img src="/codechronicle__logo-transparent.png" alt=""/></div><span className="addons-node node-domain"><Globe size={23}/></span><span className="addons-node node-design"><PenTool size={22}/></span><span className="addons-node node-growth"><Search size={23}/></span><span className="addons-node node-care"><ShieldCheck size={23}/></span><span className="addons-visual-caption"><Sparkles size={12}/> SMALL DETAILS. BIG POSSIBILITIES.</span></div>
      <a className="button addons-consult" href={whatsapp('Hi! I would like a quote for an add-on service.')} target="_blank" rel="noreferrer">Find your finishing touch <ArrowUpRight size={17}/></a><div className="addons-reassurance"><ShieldCheck size={16}/><span>Clear pricing. Scope confirmed together.</span></div>
    </div>
    <div className="addons-catalog"><div className="addons-catalog-heading"><span><Layers size={16}/> THE EXTRAS THAT MAKE A DIFFERENCE</span><span className="addons-count">10 services</span></div>
      <div className="addons-filters" role="group" aria-label="Filter add-on services">{categories.map(category => <button key={category.id} aria-pressed={filter === category.id} onClick={() => setFilter(category.id)} className={filter === category.id ? 'active' : ''}>{category.label}<span>{category.id === 'all' ? addons.length : addons.filter(service => service.category === category.id).length}</span></button>)}</div>
      <p className="sr-only" role="status">Showing {filtered.length} {filter === 'all' ? '' : filter + ' '}services.</p>
      <ul className="addons-services-grid">{filtered.map((service, index) => <li className={`addon-item addon-theme-${service.theme}`} key={service.name} style={{ '--addon-index': Math.min(index, 5) }}><a className="addon-card" href={whatsapp(`Hi CodeChronicle! I’m interested in ${service.name} (${service.price} ${service.period}). Can we discuss the scope?`)} target="_blank" rel="noreferrer" aria-label={`Enquire about ${service.name}, ${service.price} ${service.period}`}><div className="addon-card-top"><span className="addon-icon"><service.icon size={21}/></span><span className="addon-category">{categories.find(category => category.id === service.category).label}</span><ArrowUpRight className="addon-link-arrow" size={16}/></div><h3>{service.name}</h3><p>{service.detail}</p><div className="addon-price-row"><div><span className="addon-starting">STARTING AT</span><strong>{service.price}<span>{service.period}</span></strong></div><span className="addon-price-check"><Check size={13}/></span></div></a></li>)}</ul>
      <div className="addons-pricing-note"><ShieldCheck size={17}/><p>Transparent from the start.<span>Starting prices. Final scope and pricing are confirmed in your quotation.</span></p></div>
    </div>
  </section>;
}
function FaqSection() {
  const [open, setOpen] = useState(0);
  const questions = [
    { question: 'How do we get started?', topic: 'GETTING STARTED', icon: Zap, theme: 'blue', answer: 'Choose a package and contact us on WhatsApp or call +91 95185 45028. Work begins after package confirmation and advance payment. The suggested payment is 50% in advance, with the remaining amount as agreed in your quotation.' },
    { question: 'What do I need to provide?', topic: 'YOUR PART OF THE STORY', icon: Layers, theme: 'violet', answer: 'You supply your website content, product details, brand assets, and timely approvals. We’ll confirm what is needed when we agree on your project scope.' },
    { question: 'What costs are separate?', topic: 'CLEAR, UPFRONT PRICING', icon: Wallet, theme: 'amber', answer: 'Ad spend, domain, hosting, printing, shoots, and third-party fees are extra. You can explore our add-ons for domain, hosting, maintenance, and creative services.' },
    { question: 'Can I customise my package?', topic: 'MADE TO FIT YOUR BUSINESS', icon: SlidersHorizontal, theme: 'teal', answer: 'Yes. Contact us to discuss your requirements. Major revisions and features outside the agreed scope are quoted separately. All package prices and delivery timelines are estimates, subject to the final scope.' },
  ];
  return <section id="faq" className="faq-section container">
    <div className="faq-intro"><div className="eyebrow accent"><Sparkles size={13}/> GOOD TO KNOW</div><h2>Clear expectations.<br/><span>A better experience.</span></h2><p>A few helpful answers before we begin.<br/>{' '}Less guesswork. More confidence in your next step.</p>
      <div className="faq-illustration" aria-hidden="true"><div className="faq-illustration-orbit"/><span className="faq-question-bubble"><MessageCircle size={74} strokeWidth={1.1}/><span>?</span></span><span className="faq-check-bubble"><Check size={22}/></span><Sparkles className="faq-twinkle" size={18}/><span className="faq-illustration-caption">GOOD CONVERSATIONS. GREAT BEGINNINGS.</span></div>
      <a className="faq-support" href={whatsapp('Hi CodeChronicle! I have a question about starting a project.')} target="_blank" rel="noreferrer"><span className="faq-support-icon"><WhatsAppIcon size={22}/></span><span><strong>Still have a question?</strong><span>Let’s talk it through.</span></span><ArrowUpRight size={17}/></a>
    </div>
    <div className="faq-list">{questions.map((item, index) => <article className={`faq-item faq-theme-${item.theme}`} data-open={open === index} key={item.question}>
      <h3><button className="faq-toggle" id={`question-${index}`} aria-expanded={open === index} aria-controls={`answer-${index}`} onClick={() => setOpen(open === index ? null : index)}><span className="faq-question-icon"><item.icon size={21} strokeWidth={1.8}/></span><span className="faq-question-text"><span className="faq-topic">{item.topic}</span><span>{item.question}</span></span><span className="faq-toggle-mark" aria-hidden="true"><Plus size={17}/></span></button></h3>
      <div className="faq-answer" id={`answer-${index}`} role="region" aria-labelledby={`question-${index}`} aria-hidden={open !== index} inert={open !== index}><div className="faq-answer-inner"><div className="faq-answer-body"><p>{item.answer}</p>{index === 2 && <a href="#addons">Explore service add-ons <ArrowUpRight size={13}/></a>}</div></div></div>
    </article>)}<div className="faq-bottom-note"><ShieldCheck size={14}/><span>Clear scope. Honest timelines. No surprises.</span></div></div>
  </section>;
}
function App() {
  const [menu, setMenu] = useState(false);
  const [tab, setTab] = useState(0);
  const [compare, setCompare] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.motionPaused = String(motionPaused);
    return () => { delete document.documentElement.dataset.motionPaused; };
  }, [motionPaused]);
  useEffect(() => {
    let frame;
    const update = () => {
      frame = undefined;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--page-progress', `${total > 0 ? window.scrollY / total : 0}`);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll('.section-heading, .center-heading, .service-card, .creative-note, .plans-grid, .process-card, .about-grid > div, .addons-grid > div, .faq-section > div, .contact-inner');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    targets.forEach(target => { target.classList.add('reveal'); observer.observe(target); });
    const showAll = () => {
      if (preference.matches) {
        targets.forEach(target => target.classList.add('is-visible'));
        observer.disconnect();
      }
    };
    preference.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', showAll);
      targets.forEach(target => target.classList.remove('reveal', 'is-visible'));
    };
  }, []);
  const group = packages[tab];
  const chooseTab = (index) => { setTab(index); setCompare(index === 1); };
  return <>
    <header className="header"><div className="container flex items-center justify-between"><Brand/><nav className="desktop-nav" aria-label="Main navigation"><a href="#services">What we do</a><a href="#packages">Our packages</a><a href="#process">How it works</a><a href="#about">Why us</a></nav><div className="header-actions"><button className="motion-toggle" onClick={() => setMotionPaused(!motionPaused)} aria-pressed={motionPaused} aria-label={motionPaused ? 'Resume animations' : 'Pause animations'} title={motionPaused ? 'Resume animations' : 'Pause animations'}>{motionPaused ? <Play size={15}/> : <Pause size={15}/>}</button><a className="header-download" href="/brochure.pdf" download="CodeChronicle-Services-Brochure.pdf"><span className="download-icon"><Download size={20}/></span><span className="download-copy"><strong>Download brochure</strong><span>Services & pricing · PDF</span></span><ArrowUpRight className="download-arrow" size={16}/></a><a className="button button-dark header-cta" href="#contact">Let’s talk <ArrowUpRight size={16}/></a></div><button className="mobile-toggle" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div>{menu && <nav className="mobile-nav" aria-label="Mobile navigation">{[['What we do','services'],['Our packages','packages'],['How it works','process'],['Why us','about'],['Let’s talk','contact']].map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{label}<ArrowUpRight size={16}/></a>)}</nav>}</header>
    <main>
      <div className="hero-shell"><div className="hero-ambient ambient-one" aria-hidden="true"/><div className="hero-ambient ambient-two" aria-hidden="true"/><section className="hero container">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> YOUR NEXT CHAPTER STARTS HERE</div><h1>Build your brand.<br/>Grow <span className="accent italic-word">online<svg viewBox="0 0 300 18" aria-hidden="true"><path d="M4 13 Q130 -4 294 8"/></svg></span><span className="accent">.</span></h1><p>Big ideas deserve a great digital presence.<br className="desktop-break"/> We build websites, online stores, and marketing<br className="desktop-break"/> that move your business forward.</p><div className="hero-actions"><a className="button button-primary" href="#packages">Explore our packages <ArrowUpRight size={18}/></a><a className="text-link" href={whatsapp()} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> Let’s chat</a></div><div className="hero-assurance"><span><Check size={14}/> Clear pricing</span><span><Check size={14}/> Made for your business</span><span><Check size={14}/> Local support</span></div></div>
        <HeroVisual/>
      </section><div className="hero-footer container"><div><span>DESIGN.</span><span>DEVELOP.</span><span className="hero-footer-highlight">GROW.</span></div><a href="#services">Discover your possibilities <ArrowDown size={16}/></a><span className="hero-footer-location"><MapPin size={13}/> RAIPUR, INDIA</span></div></div>
      <div className="location-strip"><div className="container"><span><MapPin size={15}/> ROOTED IN RAIPUR. BUILT FOR EVERYWHERE.</span><div>Local understanding.<span className="strip-star">✳</span> Thoughtful design.<span className="strip-star">✳</span> Real possibilities.</div></div></div>
      <section id="services" className="section container"><div className="section-heading"><div><div className="eyebrow accent">01 / WHAT WE DO</div><h2>Everything your brand needs.<br/><span className="muted">All in one place.</span></h2></div><p>From your first website to your next big launch,<br/>we help you show up, stand out, and grow.</p></div><div className="services-grid">{services.map((s,i)=><article className={`service-card ${s.color}`} key={s.title}><div className="service-card-top"><span className="service-icon"><s.icon size={25}/></span><span className="service-number">0{i+1}</span></div><ServicePreview index={i}/><div className="service-tag">{s.tag}</div><h3>{s.title}</h3><p>{s.desc}</p><a href="#packages" className="service-link" onClick={()=>chooseTab(i)}><span>Starting at <strong>₹{s.price}</strong>{i===2 && ' / package'}</span><span className="round-arrow"><ArrowUpRight size={20}/></span></a></article>)}</div><div className="creative-note"><PenTool size={17}/><span>Need a little something extra? <strong>Logo design, brand identity, posters, brochures & video editing.</strong></span><a href="#addons">Explore add-ons <ArrowRight size={16}/></a></div></section>
      <section className="packages-section" id="packages"><div className="container"><div className="center-heading"><div className="eyebrow accent">02 / SIMPLE, TRANSPARENT PACKAGES</div><h2>The right fit for your <span className="italic-word">next chapter.</span></h2><p>No guesswork. Just clear deliverables and a package that fits your ambition.</p></div><div className="package-tabs" role="tablist" aria-label="Package category">{packages.map((p,i)=><button key={p.label} role="tab" aria-selected={tab===i} aria-controls="package-panel" id={`tab-${i}`} className={tab===i?'active':''} onClick={()=>chooseTab(i)}><p.icon size={17}/>{p.label}</button>)}</div><div id="package-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}><div className="plans-grid">{group.plans.map((p,i)=><article className={`plan ${i===1?'featured':''}`} key={`${tab}-${p.name}`}>{i===1&&<div className="popular"><Sparkles size={13}/> THE SWEET SPOT</div>}<div className="plan-icon">{i===0?<Zap size={21}/>:i===1?<Layers size={21}/>:<Sparkles size={21}/>}</div><h3>{p.name}</h3><p className="plan-desc">{p.desc}</p><div className="plan-price">₹{p.price}<span> / {tab===2?'package':'project'}</span></div><div className="plan-meta">{p.meta}</div><a className={`button ${i===1?'button-primary':'button-outline'}`} href={whatsapp(`Hi CodeChronicle! I’m interested in the ${p.name} ${group.label} package at ₹${p.price}. Let’s discuss my project.`)} target="_blank" rel="noreferrer">Let’s get started <ArrowUpRight size={16}/></a><div className="plan-divider"/><span className="included-label">WHAT’S INCLUDED</span><ul>{p.features.map(f=><li key={f}><Check size={15}/>{f}</li>)}</ul>{p.addonNote && <p className="plan-addon-note"><Plus size={13}/><span>{p.addonNote}</span></p>}</article>)}</div><p className="pricing-note">{group.note}</p><button className="compare-button" aria-expanded={compare} aria-controls="package-comparison" onClick={()=>setCompare(!compare)}><span className="comparison-cta-icon"><Layers size={24}/></span><span className="comparison-cta-copy"><strong>{tab === 1 ? 'Complete feature comparison' : 'Compare all features'}</strong><span>{tab === 1 ? '43 features · All 3 plans' : 'See what is included in every plan'} · {compare ? 'Click to hide details' : 'Click to view details'}</span></span><span className="comparison-cta-chevron"><ChevronDown size={19} className={compare?'rotated':''}/></span></button><div id="package-comparison" hidden={!compare}>{compare && (tab === 1 ? <EcommerceComparison/> : <FeatureComparison group={group}/>)}</div></div><div className="custom-package"><span><MessageCircle size={19}/> Not sure where to start? Let’s find the right fit together.</span><a href={whatsapp('Hi! Can you help me choose the right package for my business?')} target="_blank" rel="noreferrer">Get a free consultation <ArrowUpRight size={16}/></a></div></div></section>
      <section className="brochure-promo container" aria-labelledby="brochure-promo-title"><div className="brochure-promo-art" aria-hidden="true"><span>CodeChronicle.</span><strong>Big ideas.<br/>Beautiful<br/><em>possibilities.</em></strong><small>DIGITAL SERVICES / 2026</small></div><div><div className="eyebrow accent">MADE TO KEEP. READY TO SHARE.</div><h2 id="brochure-promo-title">Your next chapter,<br/>in one beautiful brochure.</h2><p>Explore our services, compare every package, and share the possibilities with your team. Six pages. All the details.</p><div className="brochure-promo-actions"><a className="button button-primary" href="/brochure.pdf" download="CodeChronicle-Digital-Services-Brochure.pdf"><Download size={17}/> Download PDF</a><a className="text-link" href="/?brochure">Preview & share <ArrowUpRight size={17}/></a></div></div></section>
      <ProcessSection/>
      <section id="about" className="about-section"><div className="container about-grid"><div><div className="eyebrow accent">A SMALL TEAM. A BIG BELIEF.</div><h2>Your business deserves<br/>to look as good as<br/><span className="italic-word">the work you do.</span></h2><p>We’re CodeChronicle, your digital growth partner in Raipur, Chhattisgarh. We help local businesses turn their ambition into a thoughtful online presence.</p><a href="#contact" className="text-link">Let’s build something together <ArrowUpRight size={18}/></a></div><div className="about-features">{[{icon:Monitor,title:'Thoughtfully designed',desc:'A distinct digital presence that feels like your brand.'},{icon:Smartphone,title:'Ready for every screen',desc:'Mobile-friendly experiences for the way people browse.'},{icon:ShieldCheck,title:'Clear from the start',desc:'Transparent pricing, defined scope, and honest timelines.'},{icon:MapPin,title:'Local people. Real support.',desc:'A digital partner in Raipur, with support after launch.'}].map(x=><div className="about-feature" key={x.title}><span><x.icon size={22}/></span><div><h3>{x.title}</h3><p>{x.desc}</p></div></div>)}</div></div></section>
      <AddonsSection/>
      <FaqSection/>
      <section id="contact" className="contact-section container"><div className="contact-inner"><div className="contact-spark">✳</div><div className="eyebrow">LET’S MAKE YOUR NEXT CHAPTER A GREAT ONE.</div><h2>Your big idea.<br/>Let’s make it <span className="italic-word">happen.</span></h2><p>A new website? Your first online store? A brand that gets noticed?<br/>We’re just a conversation away.</p><div className="contact-actions"><a className="button button-cream" href={whatsapp()} target="_blank" rel="noreferrer"><WhatsAppIcon size={20}/> Chat on WhatsApp <ArrowUpRight size={17}/></a><a className="contact-phone" href="tel:+919518545028"><Phone size={17}/> +91 95185 45028</a></div><div className="contact-bottom"><span><MapPin size={13}/> Raipur, Chhattisgarh · Working with businesses everywhere</span><a href="/brochure.pdf" download="CodeChronicle-Services-Brochure.pdf"><Download size={14}/> Download our brochure</a></div></div></section>
    </main><footer className="footer container"><div><Brand/><p>Good design. Smart development. Your next chapter.</p></div><div className="footer-right"><a href="https://codechronicle.niakylie.com" target="_blank" rel="noreferrer">codechronicle.niakylie.com <ArrowUpRight size={13}/></a><span>© {new Date().getFullYear()} CodeChronicle. All rights reserved.</span></div></footer>
    <a className="whatsapp-floating" href={whatsapp()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp (opens in a new tab)"><WhatsAppIcon size={27}/><span>Chat on WhatsApp</span><ArrowUpRight size={16}/></a>
  </>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode>{new URLSearchParams(window.location.search).has('brochure') ? <Brochure packages={packages} addons={addons}/> : <App/>}</React.StrictMode>);
