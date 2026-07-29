---
sidebar_position: 1
---

# Visits & Schedule of Assessments

**Visits** keeps protocol visit windows and patient progress in one place, alongside the same chat you already use for document questions. Schedule of Assessments works for every site — the **Patients** view additionally needs a connected clinical trial management system (CTMS) or EMR.

**Who sees this:** the **Visits** item always appears in the sidebar. The **Patients** view inside it only becomes available once your site has a CTMS or EMR connection configured by an administrator — without one, you'll still have Schedule of Assessments, just not Patients.

## What's inside

Visits has two views, reachable from the sidebar:

| View | What it shows | Requires CTMS/EMR? |
| --- | --- | --- |
| **Schedule of Assessments** | The protocol's visit schedule — visit names, windows, and the assessments required at each one | No |
| **Patients** | A roster of patients on the protocol, their current visit status, and upcoming visit windows | Yes |

## Build a Schedule of Assessments

A Schedule of Assessments (SoA) is built from your protocol document rather than entered by hand. Two ways to create one:

1. **At upload time** — when uploading a protocol document, check **"contains the Schedule of Assessments"** so Navigator extracts it automatically as soon as the document finishes processing.
2. **From chat** — ask the assistant to build the schedule for the collection (for example, *"build the schedule of assessments for this protocol"*). If one already exists and looks complete, the assistant summarizes it instead — ask explicitly for a rebuild if the protocol changed.

Either way, the result is saved as a **draft** — visits, study-day windows, and required procedures at each one, read straight from the protocol's table. Nothing is entered by hand and nothing goes live until a site administrator reviews and approves it.

## Approve a Schedule of Assessments

Only **site administrators** can edit or approve an SoA draft.

1. Open **Visits → Schedule of Assessments**.
2. Review the extracted visits, windows, and procedures against the protocol. Edit any visit directly if something needs correcting.
3. Click **Approve** to move the schedule from draft to active.

An SoA must be **approved** before the Patients view can calculate upcoming visits — a draft alone is not enough.

## Matching a study collection to a CTMS trial

Patients are matched to a study collection by an exact match between the collection's **Protocol ID** and the corresponding trial name in your CTMS. If the names don't match, the Patients view will tell you which trial names are available so you can rename the collection to line up — see [Rename a collection](/collections/manage-collections#rename-a-collection-site-administrators).

## Patient roster and visit windows

Once an SoA is approved and a collection is matched to a CTMS trial, the Patients view shows each patient's progress against the schedule: which visit they're on, whether they're inside or outside the expected window, and what's due next. This is meant to support your own review, not replace clinical judgment or your CTMS as the system of record.

## Protocol amendments

How an amendment is handled depends on how the collection is managed:

**Standard collections** — upload the amended protocol using **Amend** on the document (see [Amend a document](/collections/upload-documents#amend-an-existing-document)). Amending doesn't rebuild the SoA by itself — once the file finishes processing, ask the assistant in chat to rebuild the schedule. The result is a new **draft**; nothing changes for patients or in your CTMS until a site administrator reviews and approves it, same as building one from scratch.

**Sponsor-managed collections** — when a sponsor publishes an amendment to a locked, sponsor-managed collection, Navigator runs the full amendment automatically at every affected site:

1. Rebuilds the Schedule of Assessments from the amended protocol and diffs it against the prior version.
2. For each active patient whose next visit changed, **automatically writes the new visit day into your CTMS** and records it in Write History — no confirmation step first.
3. Flags any patient whose changed visit now requires additional procedures as possibly needing **re-consent**.
4. Re-checks every active patient's eligibility against the amended inclusion/exclusion criteria and flags anyone who may need PI review.

Open the amendment's **"… changes"** button above the Schedule of Assessments (or the matching Notifications entry) to see what changed, and which patients were rescheduled or flagged. Review happens after the fact — the CTMS write is already done by the time you see it.

## Related guides

- [Upload documents](/collections/upload-documents) — including the Schedule of Assessments checkbox
- [Manage collections](/collections/manage-collections) — renaming a collection to match a CTMS trial
- [Ask questions in chat](/chat/asking-questions)
