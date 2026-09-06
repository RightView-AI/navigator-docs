---
sidebar_position: 3
---

# What's new in Navigator

This page summarizes recent improvements that affect how you work in Navigator. For step-by-step instructions, follow the links in each section. For the full version history, see the [Changelog](/changelog).

## New this release

- **More reliable answers on hard questions** - when Navigator cannot answer cleanly, it stops and answers with what it found, or asks you to narrow the question, instead of running until it times out.
- **Answers remember more of your conversation** - Navigator keeps more of your recent messages in context, so follow-up questions work further into a conversation.
- **Medical terms stay accurate** - disease names such as Sjögren's and Parkinson's are no longer hidden by the step that removes patient identifiers, so eligibility answers keep the right condition.
- **Patient pre-screening in the extension** - where your site enables it, capture a patient record in the browser extension and get an eligibility verdict against the study's inclusion and exclusion criteria, with a per-criterion breakdown.
- **Answers stay scoped to your study** - Navigator keeps chat results to the selected study, and Visits plans and checklists follow the same document access limits as chat.

## Smarter chat

- **Follow-up questions** - Navigator keeps context from your recent messages in the same conversation, so short follow-ups (for example *"What about Visit 2?"*) work without repeating the full question.
- **Regulatory references** - Answers can cite governance and regulatory sources alongside your study documents. Look for regulatory badges in the text and in **View sources**.
- **View Flow** - On completed answers, open **View Flow** to see how Navigator approached your question (helpful for complex or multi-step responses).

## Documents and collections

- **More file types** - Upload PDFs, Microsoft Office files (Word, PowerPoint, Excel), CSV, HTML, Markdown, and common images - not only PDF. See [Upload documents](/collections/upload-documents).
- **Personal documents** - Upload documents inside a study that only you can see, and ask the assistant about them in chat.
- **Site-wide documents** - Site administrators can add documents that apply to every study at the site.
- **Rename collections** - Site administrators can rename a study collection's Protocol ID and sponsor name from **Manage → Collection Settings**.
- **Access control** - Site administrators can limit who sees a whole collection or individual documents. See [Restrict collection and document access](/collections/restrict-access).
- **Bookmark your protocols** - Star a protocol to pin it to the top of the study selector. The selector and the Collections grid group protocols into "Your protocols" and "Other protocols".
- **HIPAA-aligned data protection** - Navigator keeps only de-identified data in the audit trail and search index, and protects your site's data with HIPAA-aligned safeguards.

## Visits

- **Source Quality Control** - Upload scanned or photographed source documents for a study and Navigator reviews them against ALCOA data-quality dimensions (attributable, legible, contemporaneous, original, accurate), flagging missing signatures or required fields. Coordinators can record comments and resolution status on each finding.

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
- **Two-factor authentication** - Administrator and medical monitor accounts require an authenticator app code at sign-in, with a countdown shown if you're temporarily locked out after repeated failed attempts. See [Two-factor authentication (MFA)](/settings/multi-factor-authentication).

## Related

- [Changelog](/changelog) - full version history
- [Roadmap](/roadmap) - upcoming plans and themes
- [Roles & Permissions](/reference/roles-and-permissions)
- [Navigate the app](/getting-started/navigation)
