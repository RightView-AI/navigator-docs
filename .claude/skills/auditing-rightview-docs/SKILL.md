---
name: auditing-rightview-docs
description: >-
  Audit and update the navigator-docs Docusaurus site against the live
  rightview-site product (main/prod). Use when asked to update, audit, review,
  or fact-check the Navigator docs, or to bring docs in sync with what's on
  main/prod. Verifies every user-facing claim against actual frontend/backend
  code rather than trusting existing doc prose, and enforces a terse,
  business-user tone with zero fluff.
---

# Auditing / updating the RightView (Navigator) docs

The docs in this repo (`navigator-docs`, a Docusaurus site) describe a live product
(`rightview-site`). Docs drift from the product constantly — features get gated
differently, pages get renamed, whole flows get restructured — and nobody goes back
to fix the docs. **Never trust existing doc prose as a source of truth.** Treat every
concrete UI claim (button labels, page names, gating rules, permission rules,
navigation structure) as a hypothesis to verify against the code, not a fact to
carry forward.

This produced real findings the first time it was run: a doc describing an entire
"Site settings" page (with an Access tab and data export) that didn't exist anywhere
in the app — the real access-control UI lived inside a per-collection "Manage" dialog.
A "Group by collection" toggle in Artifacts that didn't exist — Artifacts is actually
hard-scoped to the sidebar's active collection. A permissions matrix claiming regular
Users could manage PI contacts, when the backend route was site-admin-gated. Assume
findings like this exist until you've checked.

## Where the two repos live

- `rightview-site` — the product. `backend/` (FastAPI), `frontend/` (Next.js).
- `navigator-docs` — this repo. Docusaurus site, `docs/` tree, deployed to
  docs.rightview.ai.

They are usually sibling directories under the same parent (e.g.
`~/Desktop/Projects/rightview-site` and `~/Desktop/Projects/navigator-docs`). If you
can't find `navigator-docs` next to the product repo, ask before guessing a path.

## Step 1 — Establish the ground truth branch

Docs should describe **production** (`main`), not `predevelop`/`develop` in-flight
work, unless the user explicitly says otherwise. In `rightview-site`:

```bash
git fetch origin main -q
```

Then read code via `git show origin/main:<path>` / `git grep ... origin/main -- <path>`
— don't check out the branch, just read the tree. This also means: before documenting
any feature, check whether it has actually reached `main`. A feature merged only to
`predevelop` is not live — confirm with the user before documenting it as current
(see the RIG-281 example in project memory: site-admin user invites sat on
`predevelop` for a while before promotion, and got explicitly deferred out of a docs
update because it wasn't live yet).

## Step 2 — Read every doc file, then verify every concrete claim

Read the full `docs/` tree first (`find docs -type f`), not just the files the user
named — cross-file inconsistencies (two docs disagreeing about the same button label)
are common and only show up once you've read both.

For each claim that names a specific UI element, permission, or behavior, grep the
actual frontend/backend for it before trusting it:

- **Button/page/nav labels**: `git grep -n "<exact label text>" origin/main -- frontend`
  — if it doesn't show up verbatim, the doc is describing something that either never
  existed or was renamed.
- **Feature gating** ("only available if X", "requires Y role"): find the actual
  conditional in the component (`isAdmin || isSiteAdmin`, a `Depends(...)` on a
  FastAPI route) — don't infer permissions from what sounds plausible.
- **Permissions tables**: verify each row against the actual route dependency
  (`get_current_user` vs `get_current_site_admin_user` vs an explicit role check),
  not against what a sibling doc claims.
- **Workflow claims** ("nothing happens without your confirmation", "X is automatic"):
  read the actual service code path. These are exactly the claims most likely to be
  aspirationally wrong in a compliance-sensitive product — verify whether a write
  actually happens synchronously/automatically vs. requires a human gate, and fix the
  doc to match reality even if the truth is less reassuring.
- **Navigation structure** (sidebar sections, admin links): grep for the literal
  `navItem(...)` / `<Link href=...>` calls rather than trusting a doc's section
  headers — labels and grouping change often (e.g. "Admin Panel" section renamed to
  "Management" with links "Platform" / "Sponsor").

When you find a real behavior split (e.g. "the nav item always shows, but only one
sub-view inside it is gated"), document the split precisely — don't flatten it back
to an all-or-nothing gate for simplicity.

If a fictional page/feature is referenced from multiple docs (nav table, role
descriptions, related-guide links, intro), grep the whole `docs/` tree for every
reference before declaring it fixed — fixing the primary doc but leaving three
cross-links pointing at the dead concept is a common miss.

## Step 3 — Ask before documenting anything not yet live

If verification turns up a feature that exists only on a pre-production branch, don't
silently document it and don't silently skip it either — surface the tradeoff (`AskUserQuestion`
if genuinely ambiguous): document now as upcoming, wait for promotion, or document as
live because promotion is imminent. Let the user make that call.

## Step 4 — Tone and language pass (do this after facts are fixed, not before)

Business-user audience, not developers. Rules, in priority order:

1. **No fluff words**: cut "simply", "just", "easily", "in order to", "please note",
   "it is important that", "basically", "essentially", "very", "really". Grep for them
   across `docs/` (`grep -rniE "\b(simply|just click|easily|in order to|please note|it is important|note that|basically|essentially|very |really )\b" docs/`)
   as a first pass, but also read for structural fluff a keyword grep won't catch:
   restating the same fact twice in adjacent sentences, throat-clearing before getting
   to the instruction, hedging that adds no information.
2. **Say the exact UI label**, not a paraphrase — "Approve" not "the approve action",
   "Manage" not "Manage collection" if the button literally says "Manage".
3. **Numbered steps for sequences, bullets for options/facts** — don't narrate a
   procedure in prose.
4. **One idea per sentence.** Long compound sentences with three clauses should
   usually become two sentences or a bullet list.
5. Don't over-explain the obvious ("Click Save to save your changes") but do explain
   non-obvious consequences (a CTMS write that happens automatically before review,
   a rename that propagates to citations/artifacts).

Docs in this repo are generally already fairly disciplined — expect small trims, not
wholesale rewrites, once the facts are fixed.

## Step 5 — Rebuild before every commit

MDX (`.md` files, not just `.mdx`) parses `{curly braces}` as JSX expressions.
Anything like `"{amendment} changes"` in prose will build-fail with
`ReferenceError: <name> is not defined` — write it as prose without the braces
(`the amendment's "… changes" button`) instead of escaping.

`onBrokenLinks: 'throw'` is set in `docusaurus.config.ts`, so a clean build is a real
verification step, not a formality — it catches dead internal links from renamed
anchors/files:

```bash
npm run build
```

Run this after every batch of edits, not just once at the end — it's cheap and
catches mistakes before they compound.

## Step 6 — Rewrite "What's coming" from the active Linear milestone

`docs/changelog.md` ends with a **What's coming** section, right below the version
history. Rewrite it fully every time you run this audit — it is not a running log,
it has no history, and old bullets from a prior pass should not survive into the new
one. Update the **"Last updated: <Month DD, YYYY>"** line under the heading to the
current date every time, even if nothing else changed — it's the reader's signal
for how stale this section might be.

Source material: the Linear "Navigator" project's **currently active milestone**
(check project memory / the QA checklist parent for which milestone that is — at
last check it was v1.1.0, resolved the same way `predevelop-qa-checklist` resolves
its active parent, not hardcoded). Pull issues for that milestone:

```
list_issues(project: "Navigator", fields: ["title", "status", "statusType", "projectMilestone", "labels"], limit: 100)
```

paginate with `cursor` until `hasNextPage` is false, then filter to that milestone's
issues excluding `Done` / `Canceled` / `Duplicate` status and excluding the `Testing`
label (those are QA verify tickets, not features). Group what's left by theme —
several tickets are usually sub-tasks of one user-facing idea (e.g. seven separate
"Source Quality Control" tickets are one theme: automated checks on uploaded source
documents). Write one bullet per theme, not per ticket.

**Language rules specific to this section** (stricter than the rest of the site):

- **Zero technical detail.** No ticket IDs, no field/model/service names, no
  "gated on a module flag", no CTMS/API/schema language. If a ticket is about
  moving data to per-site Mongo collections, the reader-facing idea is nothing —
  skip pure-infrastructure tickets entirely (perf, dependency health, logging,
  internal migrations). Only include a theme if a business user would recognize
  it as something that changes their day.
- **Broad ideas, not feature specs.** "A clearer picture of how much of your
  site's capacity is in use" — not "a capacity meter component with three
  threshold states."
- Explicitly non-committal: keep the framing line ("not a commitment or a release
  date, rewritten as plans evolve") — priorities shift and this section must never
  read as a promise.

After rewriting, rebuild (`npm run build`) — this section is prose only, no links
usually, but check for stray curly braces from ticket titles copied in verbatim.

## Search

This site has no search by default. If asked to add search, prefer
`@easyops-cn/docusaurus-search-local` (local, offline, indexed at build time) over
Algolia DocSearch — no external service, no API key management, works immediately:

```bash
npm install @easyops-cn/docusaurus-search-local --save
```

```ts
// docusaurus.config.ts
themes: [
  [
    '@easyops-cn/docusaurus-search-local',
    { hashed: true, docsRouteBasePath: '/', indexBlog: false },
  ],
],
```

Verify `build/search-index.json` and `build/search` exist after `npm run build`.

## Committing

Stage only the `docs/` files you intended to touch plus any config/package changes
(`docusaurus.config.ts`, `package.json`, `package-lock.json`). Don't sweep in
unrelated untracked files (e.g. `.playwright-mcp/` scratch dirs some sessions leave
behind) with a broad `git add`.
