---
sidebar_position: 1
description: "Schedule of Assessments, patient visit windows, protocol amendments, and Source Quality Control."
keywords: ["visits", "SoA", "schedule of assessments", "source QC", "quality control", "patients", "visit windows", "CTMS", "amendment", "approve", "roster"]
---

# Visits & Schedule of Assessments

**Visits** keeps protocol visit windows and patient progress in one place, next to the chat you use for document questions.

Each view in **Visits** is a module. Rightview turns modules on for your site, and a site administrator gives them to users. See [Give a user modules](/admin/site-capacity-and-users#give-a-user-modules). **Visits** shows in the sidebar only when you have at least one of its modules. Medical monitors do not see **Visits**. **Patients** does not need a connected CTMS, though most sites that use it have one for live patient data.

| View | What it shows |
| --- | --- |
| **Schedule of Assessments** | The protocol's visit names, windows, and the assessments at each visit |
| **Patients** | Patients on the protocol, their current visit status, and upcoming visit windows |
| **Source Quality Control** | Uploaded source documents and their ALCOA review results |

## Source Quality Control

Upload a scanned or photographed source document, for example a signed consent form or a case report page, from **Visits → Source Quality Control**. You can upload one file or many. Navigator reviews each document against the ALCOA dimensions (attributable, legible, contemporaneous, original, accurate) and flags issues such as a missing signature or required field.

Each upload is one row with its review status. Click a row to open the full analysis with findings for each dimension. The title is the subject and visit if the document has a subject link. Otherwise it is the subject identifier that Navigator reads from the page, for example **Subject 1001**, or the file name if it finds none. Older uploads of the same file show under **N versions**. Use **Search names and comments…** to find a document by name or by the text of a comment.

<video controls preload="metadata" style={{width: '100%', maxWidth: '840px', borderRadius: '8px'}}>
  <source src="/video/source-qc-in-app.mp4" type="video/mp4" />
</video>

:::tip Working inside your EDC?
The [Chrome side-panel extension](/extension/chrome-extension#source-qc) runs the same review on the page in the active tab.
:::

### How Navigator reviews a document

Navigator reads the whole document, checks each page, then checks the whole document again. This finds problems that span pages, such as conflicting dates, a changing subject number, or a missing page. A page check does not flag a calculated value that uses readings from other pages.

Navigator reviews up to 50 pages of a PDF. For a longer PDF, a notice shows how many pages it reviewed. Upload the rest as a separate document. The review runs outside the main app, so a large document does not slow chat.

### Read the findings

- Each finding shows the supporting text from the page, with its location.
- Several checks that report the same problem on a page show as one finding.
- Findings that Navigator is not sure about show in a separate **Needs review** list. They do not fail the document.
- Coordinators can comment on a finding and mark it resolved.

### Link a document to a subject and visit

The **Subject link** card on the document shows its subject and visit. If there is no link, Navigator can suggest one from the page header and file name. Click **Confirm** to save it, **Change** to pick another subject and visit, or **Clear** to remove it. Medical monitors see the link but cannot change it. A linked document shows on the patient page and in that patient's Visit progress.

Uploaded source documents are stored apart from your collection's protocol documents. Chat does not use them to answer questions.

### Source data verification

The Chrome extension can compare your EDC values with a source document, field by field. See [Cross-check with EDC](/extension/chrome-extension#cross-check-with-edc). Navigator saves the result on the document's Source QC record. Open the document from **Visits → Source Quality Control** to see the **Source data verification** section. Each field shows its EDC value, its source value, and a verdict: **Match**, **Mismatch**, **Missing in EDC**, or **Missing in source**. The header shows how many fields to review.

## Build a Schedule of Assessments

Navigator builds a Schedule of Assessments (SoA) from your protocol. You do not enter it by hand. Do one of these:

1. **At upload:** check **"contains the Schedule of Assessments"** when you upload the protocol. Navigator extracts it when the document finishes processing.
2. **From chat:** ask, for example, *"build the schedule of assessments for this protocol"*. If a complete SoA exists, chat summarizes it instead. Ask for a rebuild if the protocol changed.

The result is a **draft** with visits, study-day windows, and the procedures at each visit. Nothing goes live until a site administrator approves it.

## Approve a Schedule of Assessments

Only **site administrators** can edit or approve a draft.

1. Open **Visits → Schedule of Assessments**.
2. Compare the visits, windows, and procedures with the protocol. Edit a visit directly to correct it.
3. Click **Approve** to make the schedule active.

The Patients view cannot calculate upcoming visits until the SoA is approved.

## Matching a study collection to a CTMS trial

A site administrator links each collection to its CTMS study. See [Link a collection to a CTMS study](/collections/manage-collections#link-a-collection-to-a-ctms-study-site-administrators). **Patients** reads the linked study. With no link, Navigator reads the CTMS study whose name matches the collection **Protocol ID**. If none matches, the view shows a notice that points to **Study settings**.

## Patient roster and visit windows

When the SoA is approved and the collection is matched to a CTMS trial, **Patients** shows each patient's visit, whether they are inside or outside the window, and what is due next. It supports your own review. It does not replace clinical judgment or your CTMS as the system of record.

The roster shows the number of subjects and how many have an upcoming visit. If the CTMS has a visit schedule, the next visit follows it, even when it differs from the SoA. Navigator checks a limited number of subjects against the CTMS per load. The header shows how many are **not checked yet**, and **Load more** checks more. A subject with an open query has an **Open query** flag.

Open a patient for detail. A section shows only when your CTMS provides the data:

- **Visit progress** - the EDC status of each visit: **Not started**, **Visit done, EDC pending**, **Entered**, **QC done**, or **Monitor reviewed**. A Source QC badge shows when a linked source document exists.
- **Appointments** - the CTMS appointment and window next to the protocol visit.
- **Subject queries** - open, replied, and closed data queries.
- **Source QC** - linked Source QC documents and their findings.

## Protocol amendments

**Standard collections:** upload the amended protocol with **Amend** on the document. See [Amend a document](/collections/upload-documents#amend-an-existing-document). Amending does not rebuild the SoA. When the file finishes processing, ask chat to rebuild the schedule. The result is a new **draft**, and nothing changes for patients or in your CTMS until a site administrator approves it.

**Sponsor-managed collections:** when a sponsor publishes an amendment to a locked collection, Navigator runs the full amendment at every affected site:

1. Rebuilds the SoA from the amended protocol and compares it with the prior version.
2. For each active patient whose next visit changed, stages the new visit day. Nothing is written to your CTMS yet.
3. Flags any patient whose changed visit needs more procedures as possibly needing **re-consent**.
4. Re-checks each active patient's eligibility against the amended inclusion and exclusion criteria, and flags anyone who may need PI review.

Open the **"… changes"** button above the SoA, or the matching **Notifications** entry, to see what changed and which patients are affected. Staged visit days show **Awaiting approval**. A site administrator clicks **Approve & apply N schedule changes** to write the new visit days to the CTMS. Applied changes then show **Rescheduled**.

## Related guides

- [Upload documents](/collections/upload-documents) - including the Schedule of Assessments checkbox
- [Manage collections](/collections/manage-collections)
- [Ask questions in chat](/chat/asking-questions)
