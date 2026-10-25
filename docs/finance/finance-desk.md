---
sidebar_position: 1
description: "Find billable work that has not been invoiced, using billing rules and Source QC captures."
keywords: ["finance", "billing", "invoice", "invoiceable", "reconciliation", "budget", "CTA", "subject payments", "money", "unbilled"]
---

# Finance desk: invoices and billing

The **Finance** desk finds billable work that your site has not invoiced yet. For one study, it compares **billing rules** (built from the budget or CTA), **source activities** (found in your Source QC captures), and **invoiceables** (held in your CTMS). You approve or dismiss each result in a review queue.

<video controls preload="metadata" poster="/video/finance-explainer-poster.jpg" style={{width: '100%', maxWidth: '840px', borderRadius: '8px'}}>
  <source src="/video/finance-explainer.mp4" type="video/mp4" />
</video>

## Who can use Finance

Finance is an optional module, off by default. Contact Rightview to turn it on for your site. When it is on, **Finance** shows in the sidebar for Users, Site Editors, Private Editors, and Site Admins. Medical monitors and sponsor administrators do not see it. See [Roles and permissions](/reference/roles-and-permissions).

All of these roles can import invoiceables, use **Invoice capture**, run reconciliation, approve or dismiss results, and link patient numbers. Only Site Admins can use **Sync now**, **Build rules from budget**, **Approve rules**, and **Export report**.

## Open the desk

1. Select a study in the sidebar's **Study collection** picker.
2. Click **Finance** in the sidebar.

The desk works on one study at a time. With no study selected, it shows **Select a study collection**.

## Set up a study

A new study shows a **Set up this study** checklist. Reconciliation needs billing rules and invoiceables. You can add them in any order.

1. **Build billing rules.** Upload the CTA or budget to the study collection, then ask in chat: *"Build the billing rules for this study."* Site Admins can also click **Build rules from budget** on the **Billing rules** tab.
2. **Approve billing rules.** A Site Admin reviews the draft on the **Billing rules** tab and clicks **Approve rules**.
3. **Import invoiceables** with **Import CSV**, **Invoice capture**, or **Sync now**.
4. **Run reconciliation.**

Source activities come from Source QC. When a capture finishes, Navigator also reads the same pages for billable work. See [Source Quality Control](/visits/overview#source-quality-control).

## Money summary

Four cards show totals for open items:

| Card | What it shows |
| --- | --- |
| **To invoice** | Work in the source that is not in the CTMS. Click to filter the queue. |
| **Owed at the wrong rate** | CTMS lines billed below the budget amount. Click to filter the queue. |
| **Needs review** | Possible duplicates and items with missing evidence. |
| **In the CTMS** | All invoiceables for the study, and the amount without source evidence. Click to open the **Invoiceables** tab. |

## Add invoiceables

### Import a CSV

Export the study's invoiceable list from your CTMS as a CSV file. On the desk, click **Import CSV** and choose the file. Importing the same file again updates rows and does not add duplicates.

- The file needs a header row and up to 20,000 rows.
- Only the item name column is required (for example `label`, `item`, `description`, or `activity`). If it is missing, the import stops and names the column.
- Optional columns: record ID, patient, visit, type, date, amount, currency (default USD), status, and invoice. Navigator matches headers by name and ignores case, spaces, and underscores.
- Include patient, date, and amount when you can. Reconciliation uses them to match CTMS lines to source work.

### Capture a CTMS page with Invoice capture

Use the [Chrome side-panel extension](/extension/chrome-extension) to read an invoiceable page in your CTMS.

1. Open the CTMS invoiceable page in the current tab.
2. In the side panel, click **Invoice capture**, then select the study.
3. Click **Capture invoices**. This usually takes less than one minute.
4. Review the rows and clear the checkbox for any row you do not want. If the page lists more than one patient, check the patient number on each row and select **I checked the patient on every selected row**.
5. Click **Save**.

Then click **Capture another page**, **View in Finance**, or (before saving) **Start over**. On a page that looks like a CTMS invoice page, the extension also offers a popup to start a capture.

### Sync from a connected CTMS

If your site has a CTMS connection that supports billing, Site Admins see **Sync now**. It pulls the study's invoiceables from the CTMS. With a connected CTMS, **Run reconciliation** also checks the CTMS again when no line matches an activity.

## Billing rules

The **Billing rules** tab lists each rule from the budget: its number (BR1, BR2, and so on), the item, the trigger, the amount, the frequency, the effective dates, the evidence it needs, and the budget page it came from. **(bundled)** means that another payment includes the item.

A new rule set is a draft. A Site Admin clicks **Approve rules** to make it active, or **Rebuild from budget** to make a new draft, for example after a budget amendment. **Version history** lists earlier versions. You can run reconciliation on draft rules, but the results are provisional until a Site Admin approves them.

## Run reconciliation

Click **Run reconciliation**. It is not available until the study has billing rules. Each run checks up to 200 activities. If more remain, run it again. A new run does not change items you already approved or dismissed. Each run also adds a summary to your chat threads.

## Review the results

The **Review queue** tab groups results by patient. Filter by **Status** (default **Open**), **Recommendation**, or **Patient**.

| Recommendation | Meaning |
| --- | --- |
| **Ready to invoice** | A billing rule covers the work, and the CTMS has no matching line. |
| **Already captured** | The CTMS has a matching line at the budget amount. |
| **Wrong amount** | The CTMS has a matching line at a different amount. |
| **Possible duplicate** | The CTMS has a close match but not an exact one, or the line already matches a different activity. |
| **More evidence needed** | The source has no patient number, or the reading is uncertain. |
| **Not covered** | No billing rule covers the work. |
| **Included in other pay** | Every rule that covers the work is part of another payment. |

An exact match has the same patient, a matching item, and a service date within 3 days. The **Owed / owe** column shows the difference from the budget. **Owed** means the CTMS bills less and the sponsor owes the site. **Owe** means the CTMS bills more and the site owes the difference back.

### Approve or dismiss an item

Click a row to open the evidence panel. It shows the reason, the **Billing rule**, the **Candidate invoiceable**, and the **Source evidence** page. Click **Approve** to accept the recommendation or **Dismiss** to reject it. A decision is final.

## Patients tab

The **Patients** tab lists each patient with counts for **Source activities**, **Invoiceables**, **Source, not invoiced** (open **Ready to invoice** items), and **Invoiced, no source**. A **Source only** or **CTMS only** badge means the patient shows on one side only. This often happens when one system uses a screening number and the other uses a subject number.

To link two numbers for the same patient:

1. Click the patient number.
2. Accept the suggestion with **Link** (or reject it with **Not the same patient**). With no suggestion, choose the other number from the list and click **Link**.
3. Click **Run reconciliation** to match again.

To remove a link, click **Unlink**.

## Invoiceables tab

The tab lists every CTMS line for the study, grouped under invoices when Navigator holds invoice headers, otherwise by patient. **Source** shows where a line came from: **CTMS sync**, **CSV import**, or **Extension capture**. **Evidence** shows **Matched** when source work supports the line, otherwise **None yet**.

If your CTMS provides payables, a **Payables** section lists site payments out and receipts. If it provides subject payments, open a patient on the **Patients** tab to see them in a **Subject payments** section. You can also ask chat for totals. See [Ask questions in chat](/chat/asking-questions#questions-on-ctms-data).

## Export the pilot report

Site Admins can click **Export report** to download a CSV for the study. The top lists confirmed missed dollars (approved **Ready to invoice** items), counts of open, approved, and dismissed items, recommendation accuracy, and dismissals per recommendation. Below that is one row per result with the decision, who made it, when, the amount, and the source page. Patients are identified by subject number only.

## Related guides

- [Chrome side-panel extension](/extension/chrome-extension)
- [Visits & Source Quality Control](/visits/overview)
- [Roles and permissions](/reference/roles-and-permissions)
