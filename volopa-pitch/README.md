# Volopa Pitch — Artificial Ignorance

Static HTML presentation deck proposing a bespoke CRM + AI automation platform for Volopa.

12 slides, fixed 1600×900 canvas that auto-scales to viewport. No build step.

## Structure

```
volopa-pitch/
├── index.html        Slide markup
├── styles.css        All styling
├── script.js         Stage scaling + slide navigation
├── assets/           Brand assets (logos)
│   ├── ai-logo.png
│   └── volopa-logo.png
├── vercel.json       Vercel routing, caching, security headers
├── package.json      Project metadata + local-preview script
├── .gitignore
└── README.md
```

## Deploy to Vercel

**One-shot via CLI:**

```
npx vercel
```

Follow the prompts. Subsequent deploys: `npx vercel --prod`.

**Via dashboard:** push to a Git remote, then import the repo at vercel.com — Vercel auto-detects it as a static site, no build configuration needed.

## Local preview

```
npm run dev
```

Opens at http://localhost:3000. Navigate with ← → arrow keys. `F` for fullscreen. `Home` / `End` to jump to first/last slide.

## Updating the deck

- **Content / structure:** edit `index.html`
- **Styling / type / colour:** edit `styles.css`
- **Navigation / scaling behaviour:** edit `script.js`
- **Brand assets:** drop replacements into `assets/`
