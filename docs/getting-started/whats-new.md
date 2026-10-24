---
sidebar_position: 3
---

# What's new in Navigator

This page summarizes recent improvements that affect how you work in Navigator. For step-by-step instructions, follow the links in each section. For the full version history, see the [Changelog](/changelog).

## New this release (v1.1.9)

- **Pre-screening in chat** - describe a patient in chat and Navigator runs the pre-screening check. See [Pre-screening in chat](/chat/asking-questions#pre-screening-in-chat).
- **AI curator switch** - a site administrator turns the AI curator on or off for a study. It is off by default. See [Turn the AI curator on or off](/collections/manage-collections#turn-the-ai-curator-on-or-off-site-administrators).
- **Previews and safer deletes** - more file types open in the preview, and a delete asks you to confirm. See [Card actions](/collections/manage-collections#card-actions).
- **Limits on wrong attempts** - Navigator waits after 5 wrong passwords or codes in 15 minutes. See [Limits on wrong attempts](/getting-started/sign-in#limits-on-wrong-attempts).
- **Charts in chat** - answers can show charts, including pie charts, timelines, number tiles, and side-by-side comparisons. See [Charts and visual blocks](/chat/asking-questions#charts-and-visual-blocks).
- **Excel downloads** - an artifact with a table has **Download Excel**. Each table goes on its own sheet. See [Download or print an artifact](/artifacts/save-and-share#download-or-print-an-artifact).
- **Spreadsheet artifacts** - ask chat for a spreadsheet. It opens in a grid that you can edit. See [Edit a spreadsheet artifact](/artifacts/save-and-share#edit-a-spreadsheet-artifact).
- **Download from the artifact window** - an artifact that you open from a chat link has its own download buttons. See [Open an artifact](/artifacts/save-and-share#open-an-artifact).
- **Call scripts you can work through** - tick questions and follow the action tags. See [Call scripts](/chat/asking-questions#call-scripts).
- **Pre-screening results you can scan** - the verdict first, then the criteria that decide it, need information, or passed. See [Pre-screening results](/chat/asking-questions#pre-screening-results).
- **Medication pre-screening reference** - ask chat for a study's required and prohibited medications, with washouts. See [Medication pre-screening reference](/chat/asking-questions#medication-pre-screening-reference).
- **Insights in chat** - site administrators can ask chat about their site's usage. See [Questions on site Insights](/chat/asking-questions#questions-on-site-insights).
- **Audit Log for site administrators** - an **Audit Log** tab shows the audit records of your own site, including failed sign-ins. See [Audit Log](/admin/site-settings#audit-log).
- **Uploads up to 100 MB** - large study, confidential, and site-wide documents now upload. See [File size limit](/collections/upload-documents#file-size-limit).
- **Upload progress** - a notice shows each upload, and the study picker shows **Uploading** or **Upload failed**. See [Follow upload progress](/collections/upload-documents#follow-upload-progress).
- **Extension install reminder** - Navigator reminds you once to install the Chrome extension. See [Install reminder in Navigator](/extension/chrome-extension#install-reminder-in-navigator).

## Navigator in your browser

- **Chrome side panel** - use Navigator next to your EDC, a source document, or a screening record. See [Chrome side-panel extension](/extension/chrome-extension).
- **Cross-check with EDC** - compare a source document tab with an EDC form tab field by field. Navigator marks each field **Mismatch** or **Missing**, and saves the result on the Source QC record.
- **Pre-screening evidence on the page** - after a check, click **Show all evidence on the page** to mark the supporting text on the patient record. See [Pre-screening](/extension/chrome-extension#pre-screening).
- **Page suggestions** - a small round logo on a supported page suggests Source QC, Pre-screening, or Invoice capture. See [Page suggestions](/extension/chrome-extension#page-suggestions).
- **Welcome page** - the extension opens a Welcome page after the first install. See [Welcome to Navigator in your browser](/extension/welcome).

## Finance

- **Finance desk** - if your site has the Finance module, open **Finance** in the sidebar. Import invoices, click **Run reconciliation**, and see billable work that has no invoice. See [Finance desk](/finance/finance-desk).
- **Invoice headers, payables, and subject payments** - the desk groups invoice lines under their invoice and shows payables and subject payments when your CTMS provides them.

## Smarter chat

- **Follow-up questions** - Navigator keeps context from your recent messages in the same conversation, so short follow-ups (for example *"What about Visit 2?"*) work without repeating the full question.
- **Regulatory references** - Answers can cite governance and regulatory sources alongside your study documents. Look for regulatory badges in the text and in **View sources**.
- **View Flow** - On completed answers, open **View Flow** to see how Navigator approached your question (helpful for complex or multi-step responses).
- **Answers from a contact come back to chat** - a contact's answer shows in the same chat thread. It is labeled **Verified response** when the contact signed it in the app or emailed it from a confirmed email domain, and **Response** otherwise.
- **Live answers** - chat shows the answer text while Navigator writes it.
- **Questions on CTMS data** - where your CTMS supports it, ask chat about subject queries, study documents, invoice status, and payment totals. See [Questions on CTMS data](/chat/asking-questions#questions-on-ctms-data).
- **Clearer CTMS errors** - when Navigator cannot reach your CTMS, chat and the sponsor portfolio say so.
- **Safer Schedule of Assessments** - chat asks you to confirm before it replaces an approved schedule.
- **Several artifacts from one message** - ask chat to save two or more artifacts in one message. Chat saves each one separately and links it under the answer.

## Documents and collections

- **More file types** - Upload PDFs, Microsoft Office files (Word, PowerPoint, Excel), CSV, HTML, Markdown, and common images - not only PDF. See [Upload documents](/collections/upload-documents).
- **Study Documents** - the **Study Documents** page shows every document, verified answer, and artifact in the study as searchable cards, with one **Upload** button. It also has shortcuts to the Schedule of Assessments, patient source documents, billing rules, and invoices. A site administrator clicks **New Collection** to create a study collection. A page refresh opens the view you were on.
- **Personal documents** - Upload documents inside a study that only you can see, and ask the assistant about them in chat.
- **Site-wide documents** - Site administrators can add documents that apply to every study at the site.
- **Rename collections** - Site administrators can rename a study collection's Protocol ID and sponsor name from **Manage → Collection Settings**.
- **Link a study to its CTMS study** - a site administrator picks the CTMS study for a collection in **Manage**, on the **Collection Settings** tab. See [Link a collection to a CTMS study](/collections/manage-collections#link-a-collection-to-a-ctms-study-site-administrators).
- **Sharing choices come first** - in **Upload**, **Who can see this?** shows right after you add files.
- **Access control** - Site administrators can limit who sees a whole collection or individual documents. See [Restrict collection and document access](/collections/restrict-access).
- **Bookmark your protocols** - Star a protocol to pin it to the top of the study selector. The selector and the **Study Documents** grid group protocols into "Your protocols" and "Other protocols".
- **HIPAA-aligned data protection** - Navigator protects your site's data with HIPAA-aligned safeguards.

## Visits

- **Patients** - the patient roster shows each subject's next visit and window. The patient page adds visit progress, queries, and appointments when your CTMS provides them.
- **Link Source QC documents to a subject** - Navigator suggests the subject and visit from the page header. You click **Confirm**.
- **Source Quality Control** - Upload scanned or photographed source documents for a study and Navigator reviews them against ALCOA data-quality dimensions (attributable, legible, contemporaneous, original, accurate), flagging missing signatures or required fields. Each finding shows its evidence, and uncertain findings show in a **Needs review** list. Coordinators can record comments and resolution status on each finding. Search finds a document by name or by comment text.

## Artifacts

- **Flexible sharing** - Share saved answers privately, with **specific people** at your site, or with **everyone at this site**.
- **In Study Documents** - saved answers show as cards in **Study Documents**. Pick the **Artifacts** chip to see only artifacts.
- **Download and print** - download an artifact as PDF, Word, or Excel, or print it, from the menu on its card.

## Administration

- **Modules per user** - a user needs a module on the site and in their own list. Administrators and site administrators always get every module of the site.
- **Collection access** - Site administrators manage who can use a study collection, or specific documents in it, from **Manage → Collection Settings** on each collection. See [Restrict collection and document access](/collections/restrict-access).
- **Insights** - usage numbers and **Topic insights** help site and sponsor administrators see how teams use Navigator. See [Insights & Audit Log](/admin/site-settings).
- **Tighter sponsor access** - sponsors see only the sites and studies they are enrolled in.
- **Site capacity** - Site administrators can track usage against user, document, and collection limits, and invite new teammates directly by magic link without a platform administrator. See [Users & site capacity](/admin/site-capacity-and-users).

## Sign-in and reliability

- **Session timeout** - After 60 minutes of inactivity you are signed out for security; sign in again from the login page.
- **Clearer session messages** - If your session ends, the login page explains why so you are not left on a blank screen.
- **Two-factor authentication** - Administrator, editor, and medical monitor accounts require an authenticator app code at sign-in, with a countdown shown if you're temporarily locked out after repeated failed attempts. See [Two-factor authentication (MFA)](/settings/multi-factor-authentication).
- **Reset MFA for site staff** - a site administrator can reset the authenticator app of a site editor from the **Site users** tab.

## Related

- [Changelog](/changelog) - full version history
- [Roadmap](/roadmap) - upcoming plans and themes
- [Roles & Permissions](/reference/roles-and-permissions)
- [Navigate the app](/getting-started/navigation)
