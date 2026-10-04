---
sidebar_position: 3
---

# What's new in Navigator

This page summarizes recent improvements that affect how you work in Navigator. For step-by-step instructions, follow the links in each section. For the full version history, see the [Changelog](/changelog).

## New this release

- **Link a study to its CTMS study** - a site administrator picks the CTMS study for a collection in **Manage**, on the **Collection Settings** tab. Patients, Finance, and chat then read that study. See [Link a collection to a CTMS study](/collections/manage-collections#link-a-collection-to-a-ctms-study-site-administrators).
- **A richer Patients page** - the patient page shows EDC visit progress, subject queries, appointments, and linked Source QC documents. See [Visits & Schedule of Assessments](/visits/overview#patient-roster-and-visit-windows).
- **Link Source QC documents to a subject** - Navigator suggests the subject and visit from the page header. You click **Confirm**.
- **Live answers** - chat shows the answer text while Navigator writes it.
- **Questions on CTMS data** - where your CTMS supports it, ask chat about subject queries, study documents, invoice status, and payment totals.
- **Safer Schedule of Assessments** - chat asks you to confirm before it replaces an approved schedule.
- **Sharing choices come first** - in **Upload**, **Who can see this?** shows right after you add files.
- **Reset MFA for site staff** - a site administrator can reset the authenticator app of a site editor from the **Site users** tab.

## Navigator in your browser

- **Chrome side panel** - use Navigator next to your EDC, a source document, or a screening record. See [Chrome side-panel extension](/extension/chrome-extension).
- **Cross-check with EDC** - compare a source document tab with an EDC form tab field by field. Navigator marks each field **Mismatch** or **Missing**, and saves the result on the Source QC record.
- **Welcome page** - the extension opens a Welcome page after the first install. See [Welcome to Navigator in your browser](/extension/welcome).

## Finance

- **Finance desk** - if your site has the Finance module, open **Finance** in the sidebar. Import invoices, click **Run reconciliation**, and see billable work that has no invoice. See [Finance desk](/finance/finance-desk).
- **Invoice headers, payables, and subject payments** - the desk groups invoice lines under their invoice and shows payables and subject payments when your CTMS provides them.

## Smarter chat

- **Follow-up questions** - Navigator keeps context from your recent messages in the same conversation, so short follow-ups (for example *"What about Visit 2?"*) work without repeating the full question.
- **Regulatory references** - Answers can cite governance and regulatory sources alongside your study documents. Look for regulatory badges in the text and in **View sources**.
- **View Flow** - On completed answers, open **View Flow** to see how Navigator approached your question (helpful for complex or multi-step responses).
- **Answers from a contact come back to chat** - a contact's answer shows in the same chat thread as a **Verified answer**.

## Documents and collections

- **More file types** - Upload PDFs, Microsoft Office files (Word, PowerPoint, Excel), CSV, HTML, Markdown, and common images - not only PDF. See [Upload documents](/collections/upload-documents).
- **Study Documents** - the **Study Documents** page shows every document, verified answer, and artifact in the study as searchable cards, with one **Upload** button. A site administrator clicks **New Collection** to create a study collection. A page refresh opens the view you were on.
- **Personal documents** - Upload documents inside a study that only you can see, and ask the assistant about them in chat.
- **Site-wide documents** - Site administrators can add documents that apply to every study at the site.
- **Rename collections** - Site administrators can rename a study collection's Protocol ID and sponsor name from **Manage → Collection Settings**.
- **Access control** - Site administrators can limit who sees a whole collection or individual documents. See [Restrict collection and document access](/collections/restrict-access).
- **Bookmark your protocols** - Star a protocol to pin it to the top of the study selector. The selector and the **Study Documents** grid group protocols into "Your protocols" and "Other protocols".
- **HIPAA-aligned data protection** - Navigator protects your site's data with HIPAA-aligned safeguards.

## Visits

- **Patients** - the patient roster shows each subject's next visit and window. The patient page adds visit progress, queries, and appointments when your CTMS provides them.
- **Source Quality Control** - Upload scanned or photographed source documents for a study and Navigator reviews them against ALCOA data-quality dimensions (attributable, legible, contemporaneous, original, accurate), flagging missing signatures or required fields. Coordinators can record comments and resolution status on each finding.

## Artifacts

- **Flexible sharing** - Share saved answers privately, with **specific people** at your site, or with **everyone at this site**.
- **In Study Documents** - saved answers show as cards in **Study Documents**. Pick the **Artifacts** chip to see only artifacts.

## Administration

- **Collection access** - Site administrators manage who can use a study collection, or specific documents in it, from **Manage → Collection Settings** on each collection. See [Restrict collection and document access](/collections/restrict-access).
- **Insights** - Usage analytics and optional **LLM Subtopic Analysis** help site and sponsor administrators understand how teams use Navigator.
- **Tighter sponsor access** - sponsors see only the sites and studies they are enrolled in.
- **Site capacity** - Site administrators can track usage against user, document, and collection limits, and invite new teammates directly by magic link without a platform administrator. See [Users & site capacity](/admin/site-capacity-and-users).

## Sign-in and reliability

- **Session timeout** - After 60 minutes of inactivity you are signed out for security; sign in again from the login page.
- **Clearer session messages** - If your session ends, the login page explains why so you are not left on a blank screen.
- **Two-factor authentication** - Administrator, editor, and medical monitor accounts require an authenticator app code at sign-in, with a countdown shown if you're temporarily locked out after repeated failed attempts. See [Two-factor authentication (MFA)](/settings/multi-factor-authentication).

## Related

- [Changelog](/changelog) - full version history
- [Roadmap](/roadmap) - upcoming plans and themes
- [Roles & Permissions](/reference/roles-and-permissions)
- [Navigate the app](/getting-started/navigation)
