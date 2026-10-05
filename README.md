# Navigator Documentation

User guide for [Navigator](https://sites.rightview.ai) (Rightview Document Intelligence), hosted as a static Docusaurus site on GitHub Pages.

**Live site:** [rightview-ai.github.io/navigator-docs](https://rightview-ai.github.io/navigator-docs/)

GitHub Pages serves this as a project site, so `baseUrl` is set to `/navigator-docs/` in `docusaurus.config.ts`. If you later move to a custom domain at the root (e.g. `docs.navigator.rightview.ai`), change `url` to that domain and set `baseUrl` to `/`, then restore `static/CNAME`.

## Local development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run serve
```

## Deployment

Pushes to `main` deploy automatically via GitHub Actions (`.github/workflows/deploy.yml`).

### GitHub Pages setup (one time)

1. In the **navigator-docs** repo, go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. After the first successful deploy, enable the custom domain **docs.navigator.rightview.ai**.
4. Add a DNS **CNAME** record pointing `docs.navigator.rightview.ai` to `rightview-ai.github.io` (or follow GitHub's DNS instructions shown in Pages settings).

The `static/CNAME` file is committed for the custom domain.

## Changelog

Each release is its own page, and `/changelog` lists the releases as short previews. The releases live in `changelog/`, one file for each, and Docusaurus builds them as a blog.

To add a release, create `changelog/YYYY-MM-DD-vX-Y-Z.md`. Use the release tag date. For a hotfix, name it `vX-Y-Z-hotfix` and set `tags: [hotfix]`.

```markdown
---
slug: v1-1-8
title: v1.1.8
date: 2026-10-20T12:00:00Z
tags: [release]
description: "One sentence that says what the release is about"
---

**One sentence that says what the release is about**

{/* truncate */}

### First section

- **A change** - what it does for the user.
```

- Everything above `{/* truncate */}` is the preview on the `/changelog` list. Use the bold sentence for a release with sections. For a release that is only a bullet list, show the sentence and the first two bullets.
- Use `{/* truncate */}`, not `<!-- truncate -->`. This site turns off HTML comments in MDX.
- A short hotfix of three bullets or fewer needs no marker. It shows in full.
- Two releases on one day need different times in `date`, so they keep their order.
- `slug` replaces the dots with hyphens, so the page address stays `/changelog/v1-1-8`.
- Keep the What's new page and the Roadmap in step with the release.

## Adding screenshots

Place images in `static/img/docs/` and reference them in markdown:

```markdown
![Description](/img/docs/your-screenshot.png)
```

Several pages include `:::info Screenshots` callouts for images still to capture from the live app.

## Structure

```
docs/
├── intro.md                    # Welcome page
├── getting-started/            # Sign in, navigation
├── chat/                       # Questions, citations, sources
├── collections/                # Upload & manage study PDFs
├── artifacts/                  # Save & share answers
├── inbox/                      # Send to PI
├── contacts/                   # PI contacts
├── settings/                   # Account
└── reference/                  # Roles & permissions
```

## License

Copyright © Rightview Research.
