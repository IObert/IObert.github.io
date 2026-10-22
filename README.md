# Hello Friend

> "There are only two hard things in computer science: cache invalidation, naming things, and shipping your personal website."
>
> Claude Opus 4.6

The digital home of **Marius Obert** — a place where conference talks, blog posts, podcast episodes, and open source projects pretend to be organized.

Built with React, TypeScript, Tailwind, and... just kidding. Built with love and too many late-night commits.

## What's in here?

- **Writing** — Articles, blog posts, and one actual book (yes, on paper)
- **Speaking** — Conference talks from Amsterdam to Bucharest, plus a German podcast about money and tech
- **Coding** — Open source projects that may or may not still work

## The Stack

React · TypeScript · Vite · Tailwind CSS · shadcn/ui · Vitest · GitHub Pages

## Development

Use the Node version in `.nvmrc` (currently 26.12.1) and pnpm 11.1.3:

```sh
nvm use
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Before deploying, run `pnpm typecheck`, `pnpm lint`, `pnpm test`, and `pnpm build`.
The GitHub Pages workflow runs these checks on the latest stable Node release before deployment.
TypeScript 7 runs the type checks; the TypeScript 6 compatibility package provides the API required by ESLint.

## Adding Talk Slides (PDF)

- Put slide files in `public/slides/<year>/`, for example `public/slides/2026/WebDevCon.pdf`.
- In `src/data/talks.ts`, add `slidesPath` to the talk item using a public-relative path, e.g. `slides/2026/WebDevCon.pdf`.
- The Speaking page renders this as a `View Slides (PDF)` link automatically.

Example:

```ts
{
  title: "Your Talk",
  // ...other fields
  slidesPath: "slides/2026/your-talk.pdf",
}
```

## Philosophy

```
if (isPersonalWebsite && !isFinished) {
  ship(it);
}
```

## License

MIT — because sharing is caring.
