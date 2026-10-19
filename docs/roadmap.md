---
sidebar_position: 10
title: Roadmap
---

# Roadmap

**Last updated: October 2026**

## What's coming

These are the themes that the team plans for Navigator v1.1.9 and v1.2.0. The plans are targets, not commitments. Priorities and timing can change. For what has already shipped, see the [Changelog](/changelog).

### Navigator v1.1.9

- **Links to new artifacts in chat** - when chat creates an artifact, the answer will name it as a link. A click will open **Study Documents** on that artifact.
- **Audit Log tab for site administrators** - site administrators will get an **Audit Log** tab in the sidebar. It will show the audit actions of their own site only.
- **Unofficial label for patient-facing artifacts** - Navigator plans to find artifacts that patients may see, such as a call script or recruitment text. It will label them as unofficial until a site administrator approves them.
- **Better page suggestions in the extension** - the extension plans to use a small model on your computer to suggest Source QC, Invoice capture, or Pre-screening. No page text leaves your computer.
- **Knowledge that Navigator learns** - after a chat turn, Navigator will be able to add an entry to the study knowledge base. Site administrators will see these entries in **Manage collection** and can retract or delete them. Chat will label them **AI-curated**. Navigator will not add an entry that conflicts with a study document or a verified answer.
- **Removal of old search data** - Navigator will remove the old Qwen3 search data. Search already uses Voyage-4.
- **Excel support** - Navigator will be able to read Excel workbooks, so you can upload a spreadsheet to a study and ask chat about it.
- **Charts in chat** - chat will be able to draw a chart when a chart answers your question better than a table.

### Navigator v1.2.0

- **Single sign-on (SSO)** - your organization will be able to connect its own identity provider, so your team signs in to Navigator with the same account they use for other work tools. Navigator plans to support both SAML and OpenID Connect.

## Related

- [Changelog](/changelog) - full version history
- [What's new](/getting-started/whats-new) - a rolling summary of the current release
