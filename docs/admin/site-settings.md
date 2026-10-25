---
sidebar_position: 2
title: Insights & Audit Log
description: "See how your site uses Navigator with Insights analytics and the Audit Log."
keywords: ["insights", "analytics", "usage", "reports", "dashboard", "sponsor admin", "audit log"]
---

# Insights and Audit Log for site administrators

Site administrators have two sidebar items that other site staff do not see:

- **Insights** shows how your site uses Navigator.
- **Audit Log** lists the recorded actions at your site.

Collection and document access are managed separately, from each collection's **Manage** dialog. See [Restrict collection and document access](/collections/manage-collections#restrict-collection-and-document-access).

## Insights

Click **Insights** in the sidebar. The page shows your site. Use the **Protocol** list to show one study or **All protocols**.

The page shows:

- Cards for **Total Queries**, **Time Saved**, **Self-Service Rate**, **Escalations**, and **Artifacts Created**. The self-service rate is the share of questions answered without an escalation to a contact.
- Daily usage for the last 30 days.
- **Question categories** for your site.
- **Topic insights**: click **Generate insights** to group recent questions into recurring themes for each category. The result takes a moment to load.
- **Recurring Source QC issues**.
- A **By Protocol** table with **Queries**, **Self-service %**, **Escalations**, **Artifacts**, and **Hours** for each study.

### Ask chat about Insights

Site administrators can also ask chat for their site's Insights numbers, for example: *"How many questions did we escalate last month for this study?"* Chat reads the same data as the **Insights** page. It reads your own site only.

## Audit Log

The **Audit Log** lists actions recorded at your site: sign-ins, failed sign-ins, uploads, changes, approvals, exports, and more. It shows your own site only. Platform administrators see the same log in their platform settings, for every site.

1. Click **Audit Log** in the sidebar.
2. Narrow the list. You can:
   - Type in **Search by user, action, record type, or record id** and click **Search**.
   - Pick an action, for example **Sign-in failed**, from the **All actions** list.
   - Pick a record type, for example **Document**, from the **All record types** list.
   - Enter a **User email**.
   - Set a from date and a to date.
3. Click **Details** on a row to see the full entry. Sensitive values are masked.

Click **Clear** to remove all filters. The list shows 50 entries per page. Use **Previous** and **Next** to page through them.

Each row shows the **Time**, **User**, **Action**, **Record type**, and **Outcome** (**Success** or **Failed**).

### Failed sign-ins

A failed sign-in shows as **Sign-in failed**. If the email belongs to a user at your site, the entry shows in your Audit Log. A failed sign-in with an email that Navigator does not know goes to platform administrators only.

### Export the Audit Log

Click **Export CSV** to download the filtered list as a CSV file. The export holds up to 5,000 entries, newest first. If more entries match, Navigator says so. Narrow the filters to export the rest.

## Sponsor Insights

Sponsor administrators see sponsor-scoped **Insights** and protocol lists. They do not upload documents or use chat in the main Navigator workspace.

## Related guides

- [Restrict collection and document access](/collections/manage-collections#restrict-collection-and-document-access)
- [Roles & Permissions](/reference/roles-and-permissions)
