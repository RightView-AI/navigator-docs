---
sidebar_position: 1
---

# Upload documents

A study **collection** holds all files for a protocol. Examples are the protocol, the lab manual, the investigator guide, slides, and spreadsheets. Navigator reads and searches these files when you ask questions in chat.

## Who can upload

| Upload | Who can do it |
| --- | --- |
| A personal document (**Just me**) | All users who can open the **Study Documents** page |
| A study document (**Everyone in this trial**) | Site administrators, site editors, and administrators |
| A confidential document (**Confidential**) | Private Editors and administrators |
| A site-wide document (**Everyone at my site**) | Site administrators and administrators |

See [Roles & Permissions](/reference/roles-and-permissions) for details.

## Supported file types

| Category | Formats |
| --- | --- |
| **Documents** | PDF, Word (`.docx`, `.dotx`, `.docm`) |
| **Presentations** | PowerPoint (`.pptx`, `.potx`, `.ppsx`, `.pptm`) |
| **Spreadsheets** | Excel (`.xlsx`, `.xlsm`), CSV |
| **Web & text** | HTML (`.html`, `.htm`), Markdown (`.md`) |
| **Images** | JPEG, PNG, TIFF, BMP, WebP |

A collection can hold PDFs and Office files together. You do not need a different collection for each file type.

## File size limit

A study document, a confidential document, or a site-wide document can be up to 100 MB. This limit also applies when you create a collection or amend a document. Navigator sends each file straight to secure storage, so a file over 32 MB uploads the same way as a small one.

A personal document has a smaller limit. See [Personal documents](/collections/personal-documents#supported-file-types-and-limits).

If a file is too large, the upload shows **File too large. Maximum upload size is 100 MB.**

## Upload a document

1. In the sidebar, click **Study Documents**.
2. Make sure the correct study shows at the top of the page.
3. Click **Upload**. The **Add document** panel opens.
4. Drag one or more files into the panel, or click to browse. The panel shows **Reading file…** while it reads the files.
5. Under **Who can see this?**, select one option:
   - **Just me** - a personal document only you can see.
   - **Everyone in this trial** - a study document for all users with access to this study.
   - **Confidential** - a study document that stays hidden from site administrators. See [Confidential documents](/collections/restrict-access#confidential-documents).
   - **Everyone at my site** - a site-wide document for every study at your site.
6. Click **Next: Name Files →**. The next step shows a **Visible to:** line with your choice. Click **← Back** to change it.
7. For each file, type a document type (for example `Lab Manual`). Site-wide documents do not need a document type.
8. Optional: if a study document contains the Schedule of Assessments, select the **Schedule of Assessments** checkbox. Navigator then builds the visit schedule for the **Visits** tab.
9. Click **Upload**.

**Who can see this?** shows only after you add a file. You only see the options that your role allows. When processing is complete, the panel shows **Document uploaded and processed successfully.**

**One upload at a time:** the **Add document** panel runs one upload at a time. While an upload runs, the **Upload** button stays off. If you switch to another study, the panel closes and clears your files. The **Upload** button stays off until the earlier upload ends.

**One document per type:** a collection can have only one current document for each document type. To update a document, use **Amend**. Do not upload a second file with the same type.

## Create a new collection

Site administrators and administrators can create a collection.

1. In the sidebar, click **Study Documents**.
2. Click **New Collection** at the top right of the page. The **Create New Study Collection** dialog opens.

   You can also click the study name at the top of the page and select **+ Create New**.
3. Enter the **Protocol ID** (for example `PROTO-2024-001`).
4. Enter the **Sponsor Name**.
5. Add one or more files.
6. Click **Next: Name Files →**.
7. Type a document type for each file. Optional: select the **Schedule of Assessments** checkbox for the file that contains it.
8. Site administrators: click **Next: Access →**. Then choose **All site users** or **Specific users only**.
9. If your site has a CTMS, the same step shows a **CTMS study** list. Click **Use this study** to accept the suggested study, or pick a study from the list. Pick **Decide later** to link it later. See [Link a collection to a CTMS study](/collections/manage-collections#link-a-collection-to-a-ctms-study-site-administrators).
10. Click **Create Study Collection**.

You can change access later. See [Restrict collection and document access](/collections/restrict-access).

The new study stays selected while its files upload. The **Study Documents** page shows **Uploading document 1 of 3. Documents show here as each one finishes.** Each document shows as a card when it is ready.

## Follow upload progress

When you create a collection or add documents, a progress message shows in the corner of the screen. It shows on every page, so you can keep working.

- While the upload runs, the message shows **Uploading** and the study name, a progress bar, and the percent processed. For more than one file, it also shows the file number, for example **File 2 of 3**.
- When the upload is done, the message shows **is ready** after the study name.
- If the upload fails, the message shows **Upload failed:** and the study name, with the reason.

The sidebar's **Study collection** picker also shows the status next to the study name, for example **Uploading 45%** or **Upload failed**.

A personal document that you add from chat also shows this message.

## Amend an existing document

Use **Amend** when a document changes, for example a new protocol version.

1. On the **Study Documents** page, find the document card.
2. Click the **...** menu on the card.
3. Click **Amend**.
4. Select the new file.

The new file becomes the current version. Navigator keeps the old version as history. Chat answers use the current version first.

Sponsor-managed documents have no **Amend** action. Only the sponsor can update them.

If the new file is identical to the current version, Navigator does not process it again.

Amending a document does not rebuild its Schedule of Assessments. After the new file is processed, ask the assistant in chat to rebuild it. See [Protocol amendments](/visits/overview#protocol-amendments).

## Download a document

1. Find the document card.
2. Click the **...** menu on the card.
3. Click **Download**.

## Document types

Document types give citations a clear label in chat. Common types are:

- Protocol document
- Lab manual
- Investigator guide
- Presentation slides
- Data collection form

Use the same type names across your site.

## Processing time

Large files can take a few minutes to process. You do not need to refresh the page. Navigator starts the upload service when you point at an upload control, so the first upload after a quiet period waits less. If one status check fails for a short time, Navigator checks again and the upload continues. See [Tips & tricks](/getting-started/tips-and-tricks#uploads-take-a-few-minutes---you-dont-need-to-refresh).

## Troubleshooting

| Issue | What to do |
| --- | --- |
| Upload fails | Make sure the file type is supported. Make sure the file is 100 MB or smaller (5 MB for a personal document). |
| **This file could not be read.** | The file is in a synced folder, such as OneDrive or SharePoint, or it changed after you picked it. Save a copy of the file to your computer and upload the copy. |
| **The upload could not be sent.** | The file changed after you picked it, or something on your computer or network blocked it. Save a copy of the file to your computer and try again. |
| Upload shows a failed message | Click **Dismiss**, then upload the file again. If it fails again, contact support. |
| Chat cannot find new content | Make sure the correct study is selected in the **Study collection** picker. Make sure processing is complete. |
| You do not see an audience option | Your role does not allow it. Ask a site administrator. |

## Related guides

- [Manage collections](/collections/manage-collections)
- [Restrict collection and document access](/collections/restrict-access)
- [Personal documents](/collections/personal-documents)
- [Tips & tricks](/getting-started/tips-and-tricks)
