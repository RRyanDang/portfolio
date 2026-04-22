# Portfolio — Vue 3 + Vite

A warm, personal portfolio site for software engineers. Built with Vue 3, Vite, and component-based architecture for easy maintenance.

---

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start dev server with hot reload
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

---

## Project structure

```
src/
├── data/
│   └── portfolio.js          ← ALL your content lives here
├── composables/
│   └── useReveal.js          ← shared scroll-reveal animation
├── components/
│   ├── NavBar.vue
│   ├── HeroSection.vue
│   ├── SkillsSection.vue
│   ├── ProjectsSection.vue
│   ├── ExperienceSection.vue
│   ├── ClubsSection.vue
│   ├── ContactSection.vue
│   └── SiteFooter.vue
├── assets/
│   └── main.css              ← global CSS variables & base styles
├── App.vue                   ← root, wires all sections
└── main.js
```

---

## Updating content

Everything lives in `src/data/portfolio.js` — edit that file and changes propagate everywhere automatically. No need to touch individual components for routine updates.

---

## Wiring up the contact form

The form uses a placeholder `setTimeout`. Replace it in `ContactSection.vue`:

### Formspree (free, easiest)
```js
async function handleSubmit() {
  sending.value = true
  await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form.value),
  })
  sending.value = false
  submitted.value = true
}
```

---

## Deploying

| Platform | Steps |
|----------|-------|
| **Vercel** | `npx vercel` in the project root |
| **Netlify** | `npm run build` → drag `dist/` to netlify.com |
| **GitHub Pages** | Set `base: '/repo-name/'` in `vite.config.js`, push `dist/` to `gh-pages` |

---

## Theming

All design tokens are CSS variables in `src/assets/main.css`:

```css
:root {
  --accent:  #c4622d;   /* terracotta */
  --accent2: #4a7c6b;   /* sage green */
  --bg:      #fdf8f2;   /* warm cream */
}
```
