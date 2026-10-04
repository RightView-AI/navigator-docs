---
sidebar_position: 1
---

# Visits & Schedule of Assessments

**Visits** keeps protocol visit windows and patient progress in one place, alongside the same chat you already use for document questions. Schedule of Assessments works for every site - the **Patients** view additionally needs to be enabled for your site by an administrator.

**Who sees this:** the **Visits** item always appears in the sidebar. The **Patients** and **Source Quality Control** views inside it only become available once an administrator enables the corresponding module for your site - without them, you'll still have Schedule of Assessments. Enabling Patients no longer requires a connected clinical trial management system (CTMS) or EMR, though most sites that use it have one configured for live patient data.

## What's inside

Visits has up to three views, reachable from the sidebar:

| View | What it shows | Requires the module enabled? |
| --- | --- | --- |
| **Schedule of Assessments** | The protocol's visit schedule - visit names, windows, and the assessments required at each one | No |
| **Patients** | A roster of patients on the protocol, their current visit status, and upcoming visit windows | Yes |
| **Source Quality Control** | Uploaded source documents and their ALCOA data-quality review results | Yes |

## Source Quality Control

Upload a scanned or photographed source document (for example, a signed consent form or a case report page) from **Visits → Source Quality Control**, one file at a time or in bulk. Navigator reviews each document against ALCOA data-quality dimensions - attributable, legible, contemporaneous, original, and accurate - and flags issues like a missing signature or a missing required field.

Each upload appears as a row with its review status; click a row to open the full analysis, including per-dimension findings.

### Link a document to a subject and visit

On the document detail, the **Subject link** card shows the subject and visit of the document. If the document has no link, Navigator can suggest one from the page header and the file name. Click **Confirm** to save the suggestion. Click **Change** to pick another subject and visit, or **Clear** to remove the link. Medical monitors see the link but cannot change it. A linked document shows on the patient page and in the Visit progress of that patient. Coordinators can add comments on a finding and mark it resolved once addressed. Uploaded source documents are stored separately from your study collection's protocol documents and are not used to answer chat questions.

<video controls preload="metadata" style={{width: '100%', maxWidth: '840px', borderRadius: '8px'}}>
  <source src="/video/source-qc-in-app.mp4" type="video/mp4" />
</video>

### Source data verification

The Chrome extension can compare the values in your EDC with a source document, field by field. See [Cross-check with EDC](/extension/chrome-extension#cross-check-with-edc). Navigator saves the result on the Source QC record of that source document.

To see the result, open the document from **Visits → Source Quality Control**. The **Source data verification** section shows each field with its EDC value and its source value. Each field has a verdict: **Match**, **Mismatch**, **Missing in EDC**, or **Missing in source**. The section header shows the number of fields to review.

:::tip Working inside your EDC?
The [Chrome side-panel extension](/extension/chrome-extension#source-qc) runs the same ALCOA+ review on the page in the active tab. You do not have to leave your other system.
:::

## Build a Schedule of Assessments

A Schedule of Assessments (SoA) is built from your protocol document rather than entered by hand. Two ways to create one:

1. **At upload time** - when uploading a protocol document, check **"contains the Schedule of Assessments"** so Navigator extracts it automatically as soon as the document finishes processing.
2. **From chat** - ask the assistant to build the schedule for the collection (for example, *"build the schedule of assessments for this protocol"*). If one already exists and looks complete, the assistant summarizes it instead - ask explicitly for a rebuild if the protocol changed.

Either way, the result is saved as a **draft** - visits, study-day windows, and required procedures at each one, read straight from the protocol's table. Nothing is entered by hand and nothing goes live until a site administrator reviews and approves it.

## Approve a Schedule of Assessments

Only **site administrators** can edit or approve an SoA draft.

1. Open **Visits → Schedule of Assessments**.
2. Review the extracted visits, windows, and procedures against the protocol. Edit any visit directly if something needs correcting.
3. Click **Approve** to move the schedule from draft to active.

An SoA must be **approved** before the Patients view can calculate upcoming visits - a draft alone is not enough.

## Matching a study collection to a CTMS trial

A site administrator links each study collection to its CTMS study. See [Link a collection to a CTMS study](/collections/manage-collections#link-a-collection-to-a-ctms-study-site-administrators). **Patients** reads the linked study.

If a collection has no link, Navigator reads the CTMS study that has the same name as the collection **Protocol ID**. If no name matches, the view shows a notice that points to **Study settings**.

## Patient roster and visit windows

Once an SoA is approved and a collection is matched to a CTMS trial, the Patients view shows each patient's progress against the schedule: which visit they're on, whether they're inside or outside the expected window, and what's due next. This is meant to support your own review, not replace clinical judgment or your CTMS as the system of record.

The roster shows the number of subjects and how many have an upcoming visit. If the CTMS has a visit schedule, the next visit follows that schedule, even when it differs from the SoA.

Navigator checks a limited number of subjects against the CTMS in each load. The header then shows the number of subjects that are **not checked yet**. Click **Load more** to check more.

Open a patient to see more detail. A section shows only when your CTMS provides the data:

- **Visit progress** - the EDC status of each visit: **Not started**, **Visit done, EDC pending**, **Entered**, **QC done**, or **Monitor reviewed**. A Source QC badge shows when a linked source document exists for the visit.
- **Appointments** - the appointment and the window from your CTMS, next to the protocol visit.
- **Subject queries** - open, replied, and closed data queries for the subject.
- **Source QC** - the Source QC documents that link to the subject, with their findings.

The roster shows an **Open query** flag for a subject with an open query.

## Protocol amendments

How an amendment is handled depends on how the collection is managed:

**Standard collections** - upload the amended protocol using **Amend** on the document (see [Amend a document](/collections/upload-documents#amend-an-existing-document)). Amending doesn't rebuild the SoA by itself - once the file finishes processing, ask the assistant in chat to rebuild the schedule. The result is a new **draft**; nothing changes for patients or in your CTMS until a site administrator reviews and approves it, same as building one from scratch.

**Sponsor-managed collections** - when a sponsor publishes an amendment to a locked, sponsor-managed collection, Navigator runs the full amendment automatically at every affected site:

1. Rebuilds the Schedule of Assessments from the amended protocol and diffs it against the prior version.
2. For each active patient whose next visit changed, **automatically writes the new visit day into your CTMS** and records it in Write History - no confirmation step first.
3. Flags any patient whose changed visit now requires additional procedures as possibly needing **re-consent**.
4. Re-checks every active patient's eligibility against the amended inclusion/exclusion criteria and flags anyone who may need PI review.

Open the amendment's **"… changes"** button above the Schedule of Assessments (or the matching Notifications entry) to see what changed, and which patients were rescheduled or flagged. Review happens after the fact - the CTMS write is already done by the time you see it.

## Related guides

- [Upload documents](/collections/upload-documents) - including the Schedule of Assessments checkbox
- [Manage collections](/collections/manage-collections) - renaming a collection to match a CTMS trial
- [Ask questions in chat](/chat/asking-questions)
