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

1. **At upload time** — when uploading a protocol document, check **"contains the Schedule of Assessments"** so Navigator extracts it automatically.
2. **From chat** — ask the assistant to build the schedule for the collection (for example, *"build the schedule of assessments for this protocol"*). Review the result before approving it.

An SoA must be **approved** before the Patients view can calculate upcoming visits.

## Matching a study collection to a CTMS trial

Patients are matched to a study collection by an exact match between the collection's **Protocol ID** and the corresponding trial name in your CTMS. If the names don't match, the Patients view will tell you which trial names are available so you can rename the collection to line up — see [Rename a collection](/collections/manage-collections#rename-a-collection-site-administrators).

## Patient roster and visit windows

Once an SoA is approved and a collection is matched to a CTMS trial, the Patients view shows each patient's progress against the schedule: which visit they're on, whether they're inside or outside the expected window, and what's due next. This is meant to support your own review, not replace clinical judgment or your CTMS as the system of record.

## Protocol amendments

When a protocol is amended, Navigator can help carry the change through: rebuilding the Schedule of Assessments from the amended document, flagging visits that need rescheduling, and re-checking whether currently enrolled patients still meet eligibility criteria under the new version. Review every suggested change before it's applied — nothing updates your CTMS automatically without your confirmation.

## Related guides

- [Upload documents](/collections/upload-documents) — including the Schedule of Assessments checkbox
- [Manage collections](/collections/manage-collections) — renaming a collection to match a CTMS trial
- [Ask questions in chat](/chat/asking-questions)
