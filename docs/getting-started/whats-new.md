---
sidebar_position: 3
---

# What's new in Navigator

This page summarizes recent improvements that affect how you work in Navigator. For step-by-step instructions, follow the links in each section. For the full version history, see the [Changelog](/changelog).

## New this release

- **Two-factor authentication** - Administrator and medical monitor accounts now require an authenticator app code at sign-in, with backup codes and 30-day trusted devices. See [Two-factor authentication (MFA)](/settings/multi-factor-authentication).
- **Site capacity visibility** - Site administrators can see usage against their site's user, document, and collection limits, with in-app notices before a limit is hit. See [Users & site capacity](/admin/site-capacity-and-users).
- **Self-service teammate invites** - Site administrators can invite new teammates directly by magic link, without waiting on a platform administrator. See [Users & site capacity](/admin/site-capacity-and-users).
- **Smarter re-uploads and document download** - Re-uploading a byte-for-byte identical file is recognized as unchanged and skipped, and any document in Manage Collection can now be downloaded directly. See [Amend an existing document](/collections/upload-documents#amend-an-existing-document).
- **PI escalation status in the sidebar** - See the age and status of questions you've sent to a PI at a glance.
- **navigator-help** - Ask Navigator questions about how to use the product itself and get an answer without a protocol citation.
- **Stop generating** - End a chat response early with a new button instead of waiting for it to finish.
- **Clearer upload progress** - Adding a document in Manage Collection now shows a persistent "Processing" indicator, even if you close the dialog while it's still running. See [Upload documents](/collections/upload-documents).
- **Visits without a CTMS/EMR connection** - Sites without a connected clinical trial or EMR system can now be enabled for Visits by an administrator, not only sites with an active integration.

## Smarter chat

- **Follow-up questions** - Navigator keeps context from your recent messages in the same conversation, so short follow-ups (for example *"What about Visit 2?"*) work without repeating the full question.
- **Regulatory references** - Answers can cite governance and regulatory sources alongside your study documents. Look for regulatory badges in the text and in **View sources**.
- **View Flow** - On completed answers, open **View Flow** to see how Navigator approached your question (helpful for complex or multi-step responses).

## Documents and collections

- **More file types** - Upload PDFs, Microsoft Office files (Word, PowerPoint, Excel), CSV, HTML, Markdown, and common images - not only PDF. See [Upload documents](/collections/upload-documents).
- **Rename collections** - Site administrators can rename a study collection's Protocol ID and sponsor name from **Manage → Collection Settings**.
- **Access control** - Site administrators can limit who sees a whole collection or individual documents. See [Restrict collection and document access](/collections/restrict-access).

## Artifacts

- **Flexible sharing** - Share saved answers privately, with **specific people** at your site, or with **everyone at this site**.
- **Scoped to your collection** - Artifacts always shows the active study collection's saved answers, in sync with the sidebar collection picker.

## Administration

- **Collection access** - Site administrators manage who can use a study collection, or specific documents in it, from **Manage → Collection Settings** on each collection. See [Restrict collection and document access](/collections/restrict-access).
- **Insights** - Usage analytics and optional **LLM Subtopic Analysis** help site and sponsor administrators understand how teams use Navigator.
- **Site capacity** - Site administrators can track usage against user, document, and collection limits, and invite new teammates directly by magic link without a platform administrator. See [Users & site capacity](/admin/site-capacity-and-users).

## Sign-in and reliability

- **Session timeout** - After 60 minutes of inactivity you are signed out for security; sign in again from the login page.
- **Clearer session messages** - If your session ends, the login page explains why so you are not left on a blank screen.
- **Two-factor authentication** - Administrator and medical monitor accounts require an authenticator app code at sign-in. See [Two-factor authentication (MFA)](/settings/multi-factor-authentication).

## Related

- [Changelog](/changelog) - full version history
- [Roles & Permissions](/reference/roles-and-permissions)
- [Navigate the app](/getting-started/navigation)
