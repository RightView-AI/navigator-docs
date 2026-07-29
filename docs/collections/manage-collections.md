---
sidebar_position: 2
---

# Manage collections

The **Collections** page lists every study collection your site has access to and lets you maintain the documents inside each one.

## Collections table

Each row shows:

| Column | Meaning |
| --- | --- |
| **Protocol ID** | Unique identifier for the study |
| **Sponsor** | Sponsor organization name |
| **Status** | Ready, Uploading/Creating, or Has amendments |
| **Documents** | Number of current documents in the collection — a document you've amended still counts once, not twice |
| **Actions** | **Manage** button |

## Status indicators

- **Ready** (green) — all documents are processed and available for chat.
- **Uploading / Creating** (spinner) — files are still being ingested. Chat may not include new content until this completes.
- **Has amendments** (clock icon) — some documents have newer versions available. [Amend](/collections/upload-documents#amend-an-existing-document) the outdated ones as needed.

## Manage a collection

Click **Manage** on a row to open the **Manage collection** dialog, with tabs for:

- **Documents** — view all documents and their types, upload additional files; site admins and admins can also amend, manage access, or delete existing documents
- **Knowledge Base** — expert-verified Q&A pairs saved from chat for this collection (site admins and admins can delete entries)
- **Collection Settings** (site admins and admins) — rename the collection and set [collection or document access](/collections/restrict-access)
- **Delete** (site admins and admins) — delete the entire collection

On narrow screens, scroll the table horizontally to reach all columns, including **Actions**.

## Rename a collection (site administrators)

Site administrators and global administrators can rename a study collection's **Protocol ID** and sponsor name:

1. Click **Manage** on the collection, then open the **Collection Settings** tab.
2. Update the **Protocol ID** and/or **Sponsor name** fields.
3. Click **Save**.

Renaming updates the collection everywhere it appears, including chat and artifacts linked to that protocol. Choose the final protocol ID carefully so staff and reports stay consistent.

## The study collection picker

Near the top of the sidebar, the **Study collection** dropdown shows which protocol you're currently working in and lets you switch. It scopes more than chat: **Contacts**, **Visits**, and **Artifacts** all follow whichever collection is active there, so switching protocols there switches your view everywhere else in the app too.

## Switching sites (admins)

Global administrators view collections for their own platform account by default. To view or manage another site's collections, use **Admin view → Site admin** to preview that site — see [Preview site and sponsor views](/admin/preview-other-roles).

## Best practices

1. **Keep document types accurate** — citations display these labels to users.
2. **Upload amendments promptly** — mark outdated protocol versions so staff know which content is current.
3. **One collection per protocol** — avoid splitting the same protocol across multiple collections.

## Related guides

- [Restrict collection and document access](/collections/restrict-access) — limit who can use a collection or specific documents (site administrators)
- [Amend an existing document](/collections/upload-documents#amend-an-existing-document) — replace an outdated document with a new version
