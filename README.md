# Kristoffer Flygare — CV

A static React and TypeScript CV, adapted from the local `KibbaFlyer-webpage/personal-webpage-software-dev` application. It retains the original design, animations, English/German/Swedish content, projects, contact links, and cookie consent.

## Run locally

Use Node.js 22 or newer:

```sh
npm ci
npm run dev
```

Open the printed URL at `/CV/`.

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. No backend or environment variables are required.

## Publish on GitHub Pages

1. Push this repository to `KibbaFlyer/CV` on the `main` branch.
2. In GitHub, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source.
3. Run **Deploy CV to GitHub Pages** from the Actions tab, or push a change to `main`.

After a successful deployment, the site will be available at <https://kibbaflyer.github.io/CV/>. Pull requests run the build without deploying.

The Vite `base` is `/CV/`. Change this in `vite.config.ts` if the repository is renamed or a custom domain is used. Image paths use the same base, so they work under the repository URL. See the [Vite GitHub Pages guide](https://vite.dev/guide/static-deploy.html#github-pages).

## Update the CV

- `src/locales/{en,de,sv}.json`: translated headings and introductory text.
- `src/data/`: education, work history, skills, and projects in all three languages.
- `src/components/`: page sections and their styles.
- `public/assets/`: images used by the CV.
- `src/css/vars.css`: shared colors.

Content is copied from the reference as supplied, including its dates and external project links. The Personal Site project now points to this repository and GitHub Pages site.

The original Google Analytics property (`G-KY8SZVYSLN`) is retained in `src/components/App/App.tsx` and only loaded after accepting analytics cookies. The language choice is remembered in browser storage.

## Included demos

The same build also produces `dist/cat-facts/index.html` and `dist/lyrics-finder/index.html`. The CV's Demo buttons open these local pages:

- `/CV/cat-facts/#/cats` — source copied from `ITHS-YH01384-LABB-1/labb1` into `demos/cat-facts/`.
- `/CV/lyrics-finder/#/lyrics` — source copied from `ITHS-YH01384-LABB-2/Labb2` into `demos/lyrics-finder/`.

Both retain their own styling and navigation, with a Back to CV link. Hash routing allows direct links and refreshes on GitHub Pages without server rewrites. One `npm ci` and `npm run build` builds all three apps; the existing Pages workflow deploys them together. No separate repositories or hosting accounts are needed.

Cat facts and lyrics still depend on the public `catfact.ninja` and `api.lyrics.ovh` services. Loading failures show a retry message. Other original demo tabs retain their original external API dependencies. The original repositories remain unchanged.
