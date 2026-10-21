---
sidebar_position: 10
title: Roadmap
---

# Roadmap

**Last updated: October 21, 2026**

## What's coming

These are the themes that the team plans for the rest of Navigator v1.1.9 and for v1.2.0. The plans are targets, not commitments. Priorities and timing can change. For what has already shipped, see the [Changelog](/changelog).

### Navigator v1.1.9

The v1.1.9 beta is out for testing. See the [v1.1.9-beta changelog](/changelog/v1-1-9-beta). These themes are still planned for v1.1.9:

- **Knowledge that Navigator learns** - after a chat turn, Navigator will be able to add an entry to the study knowledge base. Site administrators will see these entries in **Manage collection** and can retract or delete them. Chat will label them **AI-curated**. Navigator will not add an entry that conflicts with a study document or a verified answer.
- **Voice input in chat** - you will be able to speak a question instead of typing it.
- **Pre-screening questions in chat** - when you ask chat whether a patient fits a study, Navigator plans to run the same pre-screening check that the side panel runs.
- **Serious Source QC findings** - Source QC plans to mark some findings as high severity. Only an administrator will be able to resolve them.

### Navigator v1.2.0

- **Single sign-on (SSO)** - your organization will be able to connect its own identity provider, so your team signs in to Navigator with the same account they use for other work tools. Navigator plans to support both SAML and OpenID Connect.
- **Unofficial label for patient-facing artifacts** - Navigator plans to find artifacts that patients may see, such as a call script or recruitment text. It will label them as unofficial until a site administrator approves them.
- **Page suggestions per study** - the extension plans to suggest a flow only on the web pages that your site allows for each study.
- **Long answers in the background** - long chat answers and artifact builds will run as background jobs, so a long task does not hold up your chat.
- **Visit windows in your CTMS** - Navigator plans to show the protocol visit window on the scheduling screen of your CTMS.

## Related

- [Changelog](/changelog) - full version history
- [What's new](/getting-started/whats-new) - a rolling summary of the current release
