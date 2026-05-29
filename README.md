# Navigator Documentation

User guide for [Navigator](https://sites.rightview.ai) (Rightview Document Intelligence), hosted as a static Docusaurus site on GitHub Pages.

**Live site:** [docs.navigator.rightview.ai](https://docs.navigator.rightview.ai)

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
