# CodeChronicle

A responsive React and Tailwind CSS website based on the supplied CodeChronicle Premium Services Brochure.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production

```sh
npm run build
npm run preview
```

The production files are generated in `dist/` and can be deployed to any static website host.

## Deploy to Vercel

The included `vercel.json` configures Vite, installs dependencies with `npm ci`, builds with `npm run build`, and publishes `dist/`. The PDF endpoint includes a download filename and revalidation headers so clients can receive updated brochures.

1. Push this project to a Git repository, including `public/brochure.pdf`, `package-lock.json`, and `vercel.json`.
2. In Vercel, select **Add New → Project** and import the repository.
3. Set **Root Directory** to the folder containing `package.json` (`./` if this project is at the repository root). The framework is **Vite**, build command is **npm run build**, and output directory is **dist**.
4. No environment variables are required. Select **Deploy**.

After deployment, check these URLs on your assigned Vercel domain:

- `/` — the website.
- `/?brochure` — the shareable six-page brochure preview.
- `/brochure.pdf` — the downloadable PDF.

The brochure Share button uses your deployed domain automatically. Its embedded company website links retain the existing CodeChronicle website address. The brochure uses a query parameter at the root, so it does not require an SPA rewrite rule. `.vercelignore` keeps local browser profiles, caches, and generated previews out of CLI uploads. Vercel builds the committed PDF into the site; regenerate and commit it whenever brochure content changes.

For a command-line deployment, run `npx vercel` from this directory to connect the project and create a preview, then `npx vercel --prod` to deploy to production.

## Content and interactions

- Website, e-commerce, and digital marketing tabs with all nine brochure packages.
- Expandable package comparisons, project FAQs, mobile navigation, and responsive layouts.
- Package enquiries open WhatsApp with the selected package prefilled. Visitors send messages themselves.
- Click-to-call links and the original downloadable brochure in `public/brochure.pdf`.
- Service content, prices, and add-ons live in `src/main.jsx`; styling lives in `src/styles.css`.
- The updated e-commerce plans and all 43 comparison features live in `src/data/ecommerce.js`. The comparison groups features into six categories, marks separately quoted add-ons, and explains future product entry limits. Mobile visitors can select a plan to read its complete feature list.
- Google Fonts are optional; the site falls back to system sans-serif and Georgia when unavailable.
- The supplied transparent logo appears in the header, footer, and favicon, with a matching blue, navy, and pale-blue palette.
- A dark navy hero includes an original browser/store illustration, blue orbital graphics, and pointer-driven 3D tilt.
- Illustrated service cards, a contrasting featured package, a visual project timeline, and a logo watermark carry the brand through the page.
- Staggered scroll reveals, floating illustration elements, animated gradients, and hover feedback respect reduced-motion preferences. The header pause/resume button controls decorative animation.
- The desktop header stays visible during scrolling, with a reading progress indicator, brochure download, and a separate fixed WhatsApp button.

No backend or environment variables are required.

## Digital brochure

Open `/?brochure` for the six-page digital brochure, its Share button, and a one-click PDF download. The website also includes a brochure preview and download section. `public/brochure.pdf` is the finished client-facing PDF; Vite copies it into production builds.

The brochure uses the same package and add-on data as the website, including the complete 43-feature e-commerce comparison. If prices or content change, regenerate the PDF before deploying:

1. Run `npm run build`, then `npm run preview -- --port 4173`.
2. Launch Chrome with remote debugging on port 9222 using a separate local profile.
3. Run `node scripts/build-brochure.mjs`. This checks page layout, package counts, mobile overflow, and PDF delivery, then writes `public/brochure.pdf`.
4. Run `npm run build` again to include the updated PDF in `dist/`.

Use `PREVIEW_URL` to override the preview origin. Share uses the device share sheet when available, or copies the current brochure URL. Host the website to share the web preview with clients; the downloaded PDF can be sent directly by email or WhatsApp.
