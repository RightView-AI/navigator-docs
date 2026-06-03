---
sidebar_position: 1
---

# Upload documents

Study **collections** group all files for a protocol: the protocol itself, lab manual, investigator guide, slides, spreadsheets, and other trial materials. Navigator reads and searches these files when you ask questions in chat.

## Who can upload

Site staff, medical monitors, and administrators can upload documents. Sponsor administrators cannot upload from the Navigator app. See [Roles & Permissions](/reference/roles-and-permissions) for details.

## Supported file types

You can upload the following formats to a study collection:

| Category | Formats |
| --- | --- |
| **Documents** | PDF, Word (`.docx`, `.dotx`, `.docm`, `.dotm`) |
| **Presentations** | PowerPoint (`.pptx`, `.potx`, `.ppsx`, `.pptm`, `.potm`, `.ppsm`) |
| **Spreadsheets** | Excel (`.xlsx`, `.xlsm`), CSV |
| **Web & text** | HTML (`.html`, `.htm`), Markdown (`.md`), AsciiDoc (`.adoc`, `.asciidoc`, `.asc`) |
| **Images** | JPEG, PNG, TIFF, BMP, WebP |

Assign a **document type** to each file (for example `protocol document`, `lab manual`) so citations are labeled clearly in chat.

:::tip Mixed collections
A single study collection can include PDFs and Office files together. You do not need a separate collection per file type.
:::

## Create a new collection

1. Open **Collections** from the sidebar.
2. Click **Create new**.
3. Fill in the form:
   - **Protocol ID** (required) — for example `PROTO-2024-001`
   - **Sponsor Name** (required) — the study sponsor
   - **Files** (required) — drag and drop or browse; you can select multiple files at once
4. For each file, enter a **document type**.
5. If you are a **site administrator**, choose **Collection access** on the next step:
   - **All site users**, or
   - **Specific users only** (select who may use the new collection).
6. Click **Create collection**.

Navigator uploads and processes each file. You will see an **Uploading** or **Creating** status until the collection is ready. When finished, the status changes to **Ready**.

You can change access later under **Site settings → Access**. See [Restrict collection and document access](/collections/restrict-access).

## Add documents to an existing collection

1. Go to **Collections**.
2. Find the protocol row and click **Manage collection**.
3. Upload additional files and assign document types.
4. Wait until the collection shows **Ready** before asking questions about the new content in chat.

## Document types

Document types help Navigator label citations correctly. Common types include:

- Protocol document
- Lab manual
- Investigator guide
- Presentation slides
- Data collection form

Use descriptive, consistent names across your site so citations are easy to read.

## Processing time

Large files or collections with many documents may take a few minutes to process. You can leave the Collections page and return later; refresh if the status has not updated.

## Source preview in chat

When you open a citation, Navigator shows the relevant excerpt. **PDF** sources may also open an in-app page viewer when a PDF is available. Other formats display the extracted text passage used in the answer.

## Troubleshooting

| Issue | What to try |
| --- | --- |
| Upload fails | Confirm the file type is supported and within your organization’s size limits. |
| Collection stuck on "Creating" | Wait a few minutes, then refresh. Contact support if it persists. |
| Chat cannot find new content | Ensure you selected the correct collection in the chat header and that status shows **Ready**. |
| Wrong file type rejected | Check the table above; rename the extension if the file was saved in an unsupported format. |

## Related guides

- [Manage collections](/collections/manage-collections) — status, rename, amendments
- [Restrict collection and document access](/collections/restrict-access)
