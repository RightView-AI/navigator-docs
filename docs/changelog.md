---
sidebar_position: 9
title: Changelog
---

# Changelog

A history of Navigator releases. This page covers user-facing changes only - for day-to-day how-tos, see the [User Guide](/) or [What's new](/getting-started/whats-new) for a rolling summary of the latest improvements.

## v1.1.1 - August 2026

**Source Quality Control, reliability, and sponsor experience**

- **Source Quality Control** - a new Visits desk for reviewing scanned or photographed source documents. Upload a source document and Navigator checks it against ALCOA data-quality dimensions (attributable, legible, contemporaneous, original, accurate), flags missing signatures or required fields, and lets a coordinator record comments and resolution status on each finding.
- **Sign-in attempt visibility** - the sign-in and authenticator-code screens now show a countdown ("Try again in...") if you're temporarily locked out after repeated failed attempts, instead of a generic error with no sense of when to retry.
- **More forgiving authenticator codes** - a wider acceptance window for two-factor codes means an authenticator app with a slightly drifted clock (a known issue with some Microsoft Authenticator setups) is no longer incorrectly rejected.
- **Faster, more reliable uploads** - a failure partway through a multi-file upload no longer aborts the whole batch; remaining files continue, and a document that fails to upload now tells you plainly that it didn't go through and to retry, instead of a generic error.
- **Documents and Schedules show up immediately** - newly uploaded documents and generated Schedules of Assessments now appear right away in chat and Visits, without needing a manual page refresh.
- **Revamped sponsor experience** - the sponsor dashboard now loads instantly on repeat visits, uses the same status indicators as the rest of the app, and adds search, filter, and sort to subject and protocol tables.
- **Clearer chat citations** - a rare formatting glitch that could leave stray commas in a chat answer's Sources footer is fixed.
- Continued reliability work on cold-start behavior after periods of inactivity, and on keeping documents and data properly scoped to the correct study and site.

## v1.1.0 - August 2026

**Site capacity, Visits, and account security**

- **Two-factor authentication** for administrator and medical monitor accounts - an authenticator app code (with backup codes and 30-day trusted devices) is now required at sign-in. See [Two-factor authentication (MFA)](/settings/multi-factor-authentication).
- **Site capacity visibility** - site administrators can see usage against their site's user, document, and collection limits, with clear in-app notices before a limit is hit.
- **Self-service teammate invites** - site administrators can invite new teammates directly by magic link, without waiting on a platform administrator.
- **Smarter re-uploads and document download** - re-uploading a byte-for-byte identical file is now recognized as unchanged and skipped instead of creating a redundant version, and any document in Manage Collection can be downloaded directly.
- **PI escalation status in the sidebar** - see the age and status of questions you've sent to a PI at a glance.
- **Visits access by module, not just system connection** - sites without a connected CTMS/EMR can still be enabled for Visits by an administrator.
- **navigator-help** - ask Navigator questions about how to use the product itself (uploading documents, session behavior, capabilities) and get an answer without a protocol citation.
- **Stop generating** - a button to end a chat response early instead of waiting for it to finish.
- **Readability pass on chat** - long answers are now easier to scan, with capped line length and clearer structure.
- **Manage Collection upload feedback** - adding a document now shows a persistent "Processing" indicator, even if you close the dialog while it's still running.
- Citations, thread titles, and message timestamps are more reliable across a number of edge cases (new chat mid-stream, switching study collections, timezone display).
- Continued speed and reliability work across chat, ingestion, and administrator boot time, including health checks that fail fast and clearly when a dependency (database, AI service, file storage) is temporarily unavailable instead of hanging.
- Schedule of Assessments history and administrative data now live in per-site storage for stronger tenant isolation.

## v1.0.9 - July 2026

**Conversational memory & reliability**

- Multi-turn conversations are more reliable - follow-up questions are answered on their own, without Navigator re-answering everything asked earlier in the thread.
- A live reasoning view now streams while an answer is generating, with visible step-by-step progress instead of a plain spinner.
- New **Visits** section: every site can view a protocol's Schedule of Assessments; sites with a connected clinical trial or EMR system also get patient progress against it.
- Redesigned study collection picker that consistently scopes Contacts, Visits, and Artifacts to whichever protocol is active.
- Collections now prevent uploading two different documents under the same document type by mistake - use **Amend** to update an existing one instead.
- Emails sent through **Send to PI** now show your name as the sender.
- Self-service password reset directly on the login page when a password has expired or a reset is required.
- Numerous fixes to citation rendering, chat reliability, and document upload edge cases.

## v1.0.8 - June 2026

**Security & compliance hardening**

- Strengthened data security and access controls throughout the platform, including tighter document-level permissions.
- Improved audit logging for sensitive data access.
- New Sponsor Trial Management view for cross-site trial operations.
- Chat-based approval workflow for updates to connected trial/EMR systems.
- Various reliability fixes across document search and administrator views.

## v1.0.7 - June 2026

**Admin experience & governance citations**

- Unified, consistent experience across platform, site, and sponsor administrator views.
- Per-document access control - site administrators can restrict individual documents, not just whole collections.
- Flexible artifact sharing: keep an answer private, share with specific people, or share with everyone at your site.
- Regulatory and governance citations now appear alongside protocol citations in chat answers.
- Broader file type support for uploads.
- Chat history reliability and analytics accuracy improvements.

## v1.0.6 - May 2026

**Speed & quality-of-life**

- Significantly faster response times.
- Drag-and-drop file uploads.
- Improved password reset flow.
- Clearer labels for sign-in options.

## v1.0.5 - May 2026

**Skills-based answers & EHR lookups**

- Purpose-built handling for common question types - eligibility, adverse event reporting, and protocol deviations get more targeted answers.
- EHR lookups directly from chat, reducing the need to switch between systems.
- Support for querying specific protocol amendment versions.
- Data export for site administrators.
- Redesigned sidebar and a smoother overall chat experience.

## v1.0.4 - April 2026

**Analytics dashboard & real-time progress**

- New analytics dashboard with usage drill-downs by site and protocol.
- Real-time, step-by-step progress shown while an answer is generating.
- Document versioning - upload an amendment and it becomes the current version automatically.
- Password sign-in added alongside magic-link sign-in.
- Performance improvements that eliminate cold-start delays on the first question of the day.

## v1.0.3 - April 2026

**Governance citations & sponsor analytics**

- Regulatory and governance citations introduced, shown inline with amber badges.
- Expanded sponsor and administrator analytics views, including training-gap and recommendation summaries.
- Magic-link email sign-in introduced, with a welcome email for first-time users.
- "Protocol Collections" renamed to "Study Collections" throughout the app.
- Performance and reliability improvements to chat.

## v1.0.2 - March 2026

**Compliance, audit & artifacts**

- Password expiry, complexity requirements, and forced-reset enforcement.
- Electronic signature support for medical monitors.
- Account suspension capability for administrators.
- Terms-of-use acceptance flow.
- Tamper-evident audit log with CSV export.
- Artifact sharing with attribution - see who shared an answer and when.

## v1.0.1 - February 2026

- PI-verified responses can automatically answer similar future questions, reducing repeat escalations.
- Distinct citation styling for PI-verified answers.
- Visual and branding refresh.
- Improved document ingestion.
- PDF previews with the relevant passage highlighted.

## v1.0.0 - February 2026

**Initial release**

- Ask questions about your protocol and study documents; answers stream in with inline citations linking back to source documents.
- Conversation history saved in the sidebar.
- Send a question and answer to a PI contact by email, with delivery and response status tracked in your inbox.
- Manage PI contacts per protocol.
- Automatic detection of medical terms to improve answer relevance.
- Secure, multi-tenant sign-in scoped to your organization.

## What's coming

**Last updated: August 2026**

A look at the ideas and themes the team is currently working on for a future release. This isn't a commitment or a release date - priorities can shift, and this section is rewritten as plans evolve.

- **Optional two-factor authentication for regular users** - two-factor sign-in is currently required only for administrator and medical monitor accounts; regular users will be able to opt in for extra account security.
- **Tamper-evident audit trail, externally anchored** - the audit log's tamper-evident hash chain will be periodically anchored outside the platform, so its integrity can be verified independently rather than relying solely on internal checks.
- **More consistent search results** - a fix for a rare case where a chat question without a clear study context could pull in reference material from a different study.
- **Sponsor insights accuracy** - keeping sponsor analytics summaries in sync when the underlying questions they're based on change.
