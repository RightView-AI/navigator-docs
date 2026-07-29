---
sidebar_position: 9
title: Changelog
---

# Changelog

A history of Navigator releases. This page covers user-facing changes only — for day-to-day how-tos, see the [User Guide](/) or [What's new](/getting-started/whats-new) for a rolling summary of the latest improvements.

## v1.0.9 — July 2026

**Conversational memory & reliability**

- Multi-turn conversations are more reliable — follow-up questions are answered on their own, without Navigator re-answering everything asked earlier in the thread.
- A live reasoning view now streams while an answer is generating, with visible step-by-step progress instead of a plain spinner.
- New **Visits** section: every site can view a protocol's Schedule of Assessments; sites with a connected clinical trial or EMR system also get patient progress against it.
- Redesigned study collection picker that consistently scopes Contacts, Visits, and Artifacts to whichever protocol is active.
- Collections now prevent uploading two different documents under the same document type by mistake — use **Amend** to update an existing one instead.
- Emails sent through **Send to PI** now show your name as the sender.
- Self-service password reset directly on the login page when a password has expired or a reset is required.
- Numerous fixes to citation rendering, chat reliability, and document upload edge cases.

## v1.0.8 — June 2026

**Security & compliance hardening**

- Strengthened data security and access controls throughout the platform, including tighter document-level permissions.
- Improved audit logging for sensitive data access.
- New Sponsor Trial Management view for cross-site trial operations.
- Chat-based approval workflow for updates to connected trial/EMR systems.
- Various reliability fixes across document search and administrator views.

## v1.0.7 — June 2026

**Admin experience & governance citations**

- Unified, consistent experience across platform, site, and sponsor administrator views.
- Per-document access control — site administrators can restrict individual documents, not just whole collections.
- Flexible artifact sharing: keep an answer private, share with specific people, or share with everyone at your site.
- Regulatory and governance citations now appear alongside protocol citations in chat answers.
- Broader file type support for uploads.
- Chat history reliability and analytics accuracy improvements.

## v1.0.6 — May 2026

**Speed & quality-of-life**

- Significantly faster response times.
- Drag-and-drop file uploads.
- Improved password reset flow.
- Clearer labels for sign-in options.

## v1.0.5 — May 2026

**Skills-based answers & EHR lookups**

- Purpose-built handling for common question types — eligibility, adverse event reporting, and protocol deviations get more targeted answers.
- EHR lookups directly from chat, reducing the need to switch between systems.
- Support for querying specific protocol amendment versions.
- Data export for site administrators.
- Redesigned sidebar and a smoother overall chat experience.

## v1.0.4 — April 2026

**Analytics dashboard & real-time progress**

- New analytics dashboard with usage drill-downs by site and protocol.
- Real-time, step-by-step progress shown while an answer is generating.
- Document versioning — upload an amendment and it becomes the current version automatically.
- Password sign-in added alongside magic-link sign-in.
- Performance improvements that eliminate cold-start delays on the first question of the day.

## v1.0.3 — April 2026

**Governance citations & sponsor analytics**

- Regulatory and governance citations introduced, shown inline with amber badges.
- Expanded sponsor and administrator analytics views, including training-gap and recommendation summaries.
- Magic-link email sign-in introduced, with a welcome email for first-time users.
- "Protocol Collections" renamed to "Study Collections" throughout the app.
- Performance and reliability improvements to chat.

## v1.0.2 — March 2026

**Compliance, audit & artifacts**

- Password expiry, complexity requirements, and forced-reset enforcement.
- Electronic signature support for medical monitors.
- Account suspension capability for administrators.
- Terms-of-use acceptance flow.
- Tamper-evident audit log with CSV export.
- Artifact sharing with attribution — see who shared an answer and when.

## v1.0.1 — February 2026

- PI-verified responses can automatically answer similar future questions, reducing repeat escalations.
- Distinct citation styling for PI-verified answers.
- Visual and branding refresh.
- Improved document ingestion.
- PDF previews with the relevant passage highlighted.

## v1.0.0 — February 2026

**Initial release**

- Ask questions about your protocol and study documents; answers stream in with inline citations linking back to source documents.
- Conversation history saved in the sidebar.
- Send a question and answer to a PI contact by email, with delivery and response status tracked in your inbox.
- Manage PI contacts per protocol.
- Automatic detection of medical terms to improve answer relevance.
- Secure, multi-tenant sign-in scoped to your organization.
