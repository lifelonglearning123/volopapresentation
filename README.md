# Volopa Pitch — Artificial Ignorance

Static HTML presentation deck proposing a bespoke CRM + AI automation platform for Volopa.

12 slides, fixed 1600×900 canvas that auto-scales to viewport. No build step.

## Structure

```
.
├── index.html        Slide markup
├── styles.css        All styling
├── script.js         Stage scaling + slide navigation
├── assets/           Brand assets (logos)
│   ├── ai-logo.png
│   └── volopa-logo.png
├── vercel.json       Caching + security headers
├── .vercelignore     Excludes local working files from deploy
├── package.json      Metadata + local-preview script
├── .gitignore
└── README.md
```

Local working files also live in this repo (excluded from deploys via `.vercelignore`): `brand/`, `Volopa_Deck_v5.pdf`, `Volopa_Deck_v5.txt`, `Untitled.png`.

## Deploy to Vercel — first-time setup

### Via the Vercel dashboard (recommended)

1. Push this repo to GitHub (already set up at `lifelonglearning123/volopapresentation`)
2. Go to **https://vercel.com/new**
3. Click **Import Git Repository** → select `volopapresentation`
4. **Framework Preset:** `Other` (Vercel auto-detects a static site)
5. **Root Directory:** leave as `./` (no subdirectory needed)
6. **Build & Output:** leave blank — no build step
7. Click **Deploy**

First deploy completes in ~20 seconds and returns a production URL.

### Via the Vercel CLI

```
npx vercel              # first run — links a new project
npx vercel --prod       # subsequent prod deploys
```

## Local preview

```
npm run dev
```

Opens at http://localhost:3000.

Keyboard: `←` `→` to navigate · `F` for fullscreen · `Home` / `End` to jump to first/last slide.

## Updating the deck

- **Content / structure:** edit `index.html`
- **Styling / type / colour:** edit `styles.css`
- **Navigation / scaling:** edit `script.js`
- **Brand assets:** drop replacements into `assets/`

Push to `main` → Vercel auto-deploys.
