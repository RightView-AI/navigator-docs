---
sidebar_position: 1
---

# Finance desk

The **Finance** desk finds billable work that your site has not invoiced yet. It compares three things for one study:

- **Billing rules** that Navigator builds from the study budget or CTA.
- **Source activities** that Navigator finds in your Source QC captures.
- **Invoiceables** that your CTMS holds for the study.

Each result goes to a review queue. You approve or dismiss each item.

## Who can use Finance

Finance is an optional module. It is off by default. Contact Rightview to turn it on for your site.

When the module is on, **Finance** shows in the sidebar for these roles:

| Action | User | Site Editor | Private Editor | Site Admin |
| --- | :---: | :---: | :---: | :---: |
| Open the Finance desk | ✅ | ✅ | ✅ | ✅ |
| Import invoiceables and use **Invoice capture** | ✅ | ✅ | ✅ | ✅ |
| Run reconciliation | ✅ | ✅ | ✅ | ✅ |
| Approve or dismiss results | ✅ | ✅ | ✅ | ✅ |
| Link patient numbers | ✅ | ✅ | ✅ | ✅ |
| **Sync now** from a connected CTMS | ❌ | ❌ | ❌ | ✅ |
| **Build rules from budget** and **Approve rules** | ❌ | ❌ | ❌ | ✅ |
| **Export report** | ❌ | ❌ | ❌ | ✅ |

Medical monitors and sponsor administrators do not see Finance. See [Roles and permissions](/reference/roles-and-permissions).

## Open the desk

1. Select a study in the sidebar's **Study collection** picker.
2. Click **Finance** in the sidebar.

The desk works on one study at a time. The header shows **Collection:** and the study ID. If no study is selected, the desk shows **Select a study collection**.

## Set up a study

A new study shows a **Set up this study** checklist. Reconciliation needs billing rules and invoiceables. You can add them in any order.

1. **Build billing rules from the budget.** Upload the CTA or budget to the study collection. Then ask in chat: *"Build the billing rules for this study."* Site admins can also click **Build rules from budget** on the **Billing rules** tab.
2. **Approve billing rules.** A site admin reviews the draft on the **Billing rules** tab and clicks **Approve rules**.
3. **Import invoiceables from the CTMS.** Use **Import CSV**, **Invoice capture**, or **Sync now**.
4. **Run reconciliation.**

Source activities come from Source QC. When Source QC finishes a capture, Navigator reads the same pages for billable work. See [Source Quality Control](/visits/overview#source-quality-control).

## Money summary

Four cards at the top show totals for open items:

| Card | What it shows |
| --- | --- |
| **To invoice** | Work in the source that is not in the CTMS. Click the card to filter the queue to these items. |
| **Owed at the wrong rate** | CTMS lines billed below the budget amount. Click the card to filter the queue to these items. |
| **Needs review** | Possible duplicates and items with missing evidence. |
| **In the CTMS** | All invoiceables for the study, and the amount without source evidence. Click the card to open the **Invoiceables** tab. |

## Add invoiceables

### Import a CSV

1. Export the invoiceable list for the study from your CTMS as a CSV file.
2. On the desk, click **Import CSV** and choose the file.

The desk shows how many rows it imported. If you import the same file again, Navigator updates the rows. It does not add duplicates.

The CSV must have a header row. Only one column is required: the item name. Navigator matches column headers by name. Case, spaces, and underscores do not matter.

| Field | Required | Accepted header names |
| --- | :---: | --- |
| Item | ✅ | `label`, `item`, `description`, `activity`, `procedure`, `line item`, `name` |
| Record ID | | `id`, `external id`, `item id`, `ar id`, `invoiceable id`, `line id` |
| Patient | | `subject`, `subject id`, `subject number`, `patient`, `patient id`, `participant` |
| Visit | | `visit`, `visit id`, `subject visit id`, `visit name` |
| Type | | `type`, `activity type`, `category`, `item type` |
| Date | | `date`, `service date`, `date of service`, `completed date`, `visit date`, `dos` |
| Amount | | `amount`, `total`, `price`, `charge`, `cost`, `value` |
| Currency | | `currency`, `ccy` (the default is USD) |
| Status | | `status`, `state`, `billing status` |
| Invoice | | `invoice`, `invoice id`, `invoice number`, `invoice no` |

A file can have up to 20,000 rows. If the item column is missing, the import stops and names the missing column.

Include the patient, date, and amount columns when you can. Reconciliation uses them to match CTMS lines to source work.

### Capture a CTMS page with Invoice capture

Use the Chrome side panel to read an invoiceable page in your CTMS. To install the extension, see [Chrome side-panel extension](/extension/chrome-extension).

1. Open the CTMS invoiceable page in the current browser tab.
2. In the side panel, click **Invoice capture** in the icon rail.
3. Select the study at the top of the panel.
4. Click **Capture invoices**. The panel reads the page and finds the invoiceables. This usually takes less than one minute.
5. Review the rows. Clear the checkbox for each row that you do not want to save.
6. If the page lists more than one patient, a **Patient** column shows. Check the patient number on each row. Then select **I checked the patient on every selected row**.
7. Click **Save**. The button shows the number of rows that you selected.

After the save, click **Capture another page** for the next page. Click **View in Finance** to open the desk in a new tab. To discard the rows before you save, click **Start over**.

The extension can also suggest a capture. On a page that looks like a CTMS invoice page, a popup asks if you want to capture invoices for your study. Click **Capture invoices** to start.

### Sync from a connected CTMS

If your site has a CTMS connection that supports billing, the desk shows **Sync now**. Only site admins can use it. It pulls the study's invoiceables from the CTMS.

With a connected CTMS, **Run reconciliation** also checks the CTMS again when no line matches an activity.

## Billing rules

The **Billing rules** tab lists each rule from the budget:

| Column | Meaning |
| --- | --- |
| **BR** | The rule number, for example BR1. |
| **Item** | The billable item. **(bundled)** means that another payment includes this item. |
| **Trigger** | The event that makes the item billable. |
| **Amount** | The budget amount. |
| **Frequency** | How often you can bill the item. |
| **Effective** | The dates when the rule applies. |
| **Evidence** | The evidence that the rule needs. |
| **Source** | The budget document and page. |

A new rule set is a draft. A site admin clicks **Approve rules** to make it active. Site admins can click **Rebuild from budget** to make a new draft, for example after a budget amendment. **Version history** lists earlier versions.

You can run reconciliation on draft rules. The results are provisional until a site admin approves the rules.

## Run reconciliation

Click **Run reconciliation**. The button is not available until the study has billing rules.

Each run checks up to 200 activities. If more remain, the message tells you to run it again. Each run also adds a summary to your chat threads.

A new run does not change items that you already approved or dismissed.

## Review the results

The **Review queue** tab groups results by patient. Use the **Status**, **Recommendation**, and **Patient** filters to narrow the list. By default, the **Status** filter is **Open**.

Each row shows the activity, the date, the billing rule, the match type, the amount difference, and a recommendation.

| Recommendation | Meaning |
| --- | --- |
| **Ready to invoice** | A billing rule covers the work, and the CTMS has no matching line. |
| **Already captured** | The CTMS has a matching line at the budget amount. |
| **Wrong amount** | The CTMS has a matching line, but its amount is not the budget amount. |
| **Possible duplicate** | The CTMS has a close match, but not an exact match. Or the line already matches a different activity. |
| **More evidence needed** | The source has no patient number, or the source reading is uncertain. |
| **Not covered** | No billing rule covers the work. |
| **Included in other pay** | Every rule that covers the work is part of another payment. |

An exact match has the same patient, a matching item, and a service date within 3 days.

The **Owed / owe** column shows the amount difference:

- **Owed** means that the CTMS bills less than the budget. The sponsor owes the site the difference.
- **Owe** means that the CTMS bills more than the budget. The site owes the difference back.

### Approve or dismiss an item

1. Click a row to open the evidence panel. It shows the reason for the recommendation, the **Billing rule**, the **Candidate invoiceable**, and the **Source evidence** page.
2. Click **Approve** to accept the recommendation. Click **Dismiss** to reject it.

You can also use the approve and dismiss icons at the end of each open row.

A decision is final. After you approve or dismiss an item, its buttons go away.

## Patients tab

The **Patients** tab lists each patient from the source and from the CTMS:

| Column | Meaning |
| --- | --- |
| **Source activities** | Billable work found in the source. |
| **Invoiceables** | Lines in the CTMS. |
| **Source, not invoiced** | Open **Ready to invoice** items. |
| **Invoiced, no source** | CTMS lines with no source evidence. |

A **Source only** or **CTMS only** badge means that the patient shows on one side only. This often occurs when one system uses a screening number and the other uses a subject number.

To link two numbers for the same patient:

1. Click the patient number to open the detail view.
2. If Navigator found both numbers on one document, it shows a suggestion. Click the **Link** button to accept it. Click **Not the same patient** to reject it.
3. If there is no suggestion, choose the other number from the list and click **Link**.
4. Click **Run reconciliation** to match again with the linked numbers.

To remove a link, click **Unlink** next to the other number. Click **All patients** to go back to the list.

## Invoiceables tab

The **Invoiceables** tab lists every CTMS line for the study, grouped by patient. The **Source** column shows where each line came from: **CTMS sync**, **CSV import**, or **Extension capture**. The **Evidence** column shows **Matched** when source work supports the line. Otherwise it shows **None yet**.

## Export the pilot report

Site admins can click **Export report** to download a CSV file for the study.

The top of the file lists totals:

- Confirmed missed dollars (approved **Ready to invoice** items).
- The number of open, approved, and dismissed items.
- Recommendation accuracy: the share of decided **Ready to invoice** and **Possible duplicate** items that were approved.
- The number of dismissed items for each recommendation.

Below the totals, the file has one row for each result. Each row has the decision, who made it, when, the amount, and the source page. The report identifies patients by subject number only.

## Related guides

- [Chrome side-panel extension](/extension/chrome-extension)
- [Visits & Source Quality Control](/visits/overview)
- [Roles and permissions](/reference/roles-and-permissions)
