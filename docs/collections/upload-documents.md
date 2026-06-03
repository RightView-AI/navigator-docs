---
sidebar_position: 1
---

# Upload documents

Study **collections** group all PDFs for a protocol: the protocol itself, lab manual, investigator guide, and other trial documents. Navigator searches these files when you ask questions in chat.

## Who can upload

Site staff, medical monitors, and admins can upload documents. Sponsor admins cannot upload from the Navigator app. See [Roles & Permissions](/reference/roles-and-permissions) for details.

## Create a new collection

1. Open **Collections** from the sidebar.
2. Click **Create new**.
3. Fill in the form:
   - **Protocol ID** (required) — for example `PROTO-2024-001`
   - **Sponsor Name** (required) — the study sponsor
   - **PDF Files** (required) — drag and drop or browse to select one or more PDFs
4. For each file, enter a **document type** (for example `lab manual`, `protocol document`, `investigator guide`).
5. If you are a **site administrator**, choose **Collection access** on the next step:
   - **All site users**, or
   - **Specific users only** (select who may use the new collection).
6. Click **Create collection**.

Navigator uploads and indexes each PDF. You will see an **Uploading** or **Creating** status until the collection is ready. When finished, the status changes to **Ready**.

You can change access later under **Site settings → Access**. See [Restrict collection and document access](/collections/restrict-access).

:::note PDF only
Only **PDF** files are supported. Other formats are rejected.
:::

## Add documents to an existing collection

1. Go to **Collections**.
2. Find the protocol row and click **Manage collection**.
3. Upload additional PDFs and assign document types.
4. Wait until the collection shows **Ready** before asking questions about the new content in chat.

## Document types

Document types help Navigator label citations correctly. Common types include:

- Protocol document
- Lab manual
- Investigator guide

Use descriptive, consistent names across your site so citations are easy to read.

## Processing time

Large PDFs may take a few minutes to process. You can leave the Collections page and return later; refresh if the status has not updated.

## Troubleshooting

| Issue | What to try |
| --- | --- |
| Upload fails | Confirm the file is a valid PDF under your organization's size limits. |
| Collection stuck on "Creating" | Wait a few minutes, then refresh. Contact support if it persists. |
| Chat cannot find new content | Ensure you selected the correct collection in the chat header and that status shows **Ready**. |

## Related guides

- [Manage collections](/collections/manage-collections) — view status, amendments, and delete documents
