---
sidebar_position: 2
description: "Manage study collections on the Study Documents page: cards, rename, delete, restrict access, and personal documents."
keywords: ["study documents", "collection", "protocol", "rename", "delete", "CTMS", "access control", "restrict", "permissions", "confidential", "private", "personal document", "who can see", "share"]
---

# Manage collections (Study Documents)

The **Study Documents** page shows the document base for the active study. It shows all documents, verified answers, and artifacts for that study as cards.

## Open the **Study Documents** page

1. In the sidebar, click **Study Documents**.
2. The study name at the top of the page shows the active study.
3. To change the study, click the study name and select a different study. Type in the filter box to find a study by ID or sponsor.

## The study collection picker

The study you select on the **Study Documents** page is also the active study in the sidebar's **Study collection** picker. The picker sets the study for chat, **Users** (external contacts), **Visits**, and the **Study Documents** page. When you change the study in one place, all views change.

:::tip Refresh keeps your place
The page address includes the current view (for example `?view=collections`). When you refresh the page or open a shared link, Navigator opens the same view.
:::

## Find an item

- Type in the **Search this study…** box to filter cards by title or label.
- Click a filter chip to show one kind of item:

| Chip | Shows |
| --- | --- |
| **All** | Every item in the study |
| **Documents** | Study documents, including your personal and confidential documents |
| **Knowledge** | Answers that a contact verified |
| **Artifacts** | Artifacts saved for this study |
| **Site-wide** | Documents that apply to every study at your site |

## Read the cards

Each card has a colored label that shows the kind of item:

- **Document type** (for example **Protocol Document** or **Lab Manual**) - a shared study document.
- **Personal** - a document only you can see. See [Personal documents](/collections/manage-collections#personal-documents).
- **Confidential** - a document sealed from site administrators. See [Confidential documents](/collections/manage-collections#confidential-documents).
- **Verified answer** - an answer that a contact verified.
- **Artifact** - a saved artifact. See [Save and share artifacts](/artifacts/save-and-share).
- **Site-wide** - a document for all studies at your site.

Click a card to open it. A document opens in the document viewer. A verified answer or an artifact opens in a dialog.

## Shortcuts to other records

The **Study Documents** page also has shortcuts to records that live in other views. A shortcut opens the record in its own view. You cannot change a record from the shortcut. The search box finds shortcuts.

| Shortcut | Where it shows | What you need | Opens |
| --- | --- | --- | --- |
| **Schedule of Assessments** card | Above the study documents | A saved schedule and the **Schedule of Assessments** module | **Visits → Schedule of Assessments** |
| **Patient source documents** section | Below the study documents | The **Source QC** module | The document in **Visits → Source Quality Control** |
| **Finance** section | Below the study documents | The **Finance** module | The **Billing rules** tab or the **Invoiceables** tab of **Finance** |

- The **Schedule of Assessments** card shows **Draft** or **Approved**, the version, and the save date.
- A **Patient source documents** card shows the subject and visit. If the document has no link, it shows the file name. The badge shows **Analyzing…**, **Failed**, **Pass**, **Issues found**, or **Complete**.
- The **Finance** section starts with the **Billing rules** card. The card shows **Approved** or **Draft**, the number of rules, and the save date. An **Invoice** card follows for each imported invoice. It shows how the invoice came in, for example **File import**, **CTMS sync**, or **Screen capture**.

A section shows its first row. Click **Show all** to see more, and **Collapse** to go back. Click **Load more** for the next cards.

## Card actions

Click the **...** menu on a card to see its actions. The actions you see depend on your role and on the item.

| Item | Actions |
| --- | --- |
| Document | **Download**, **Amend**, **Manage access**, **Delete** |
| Verified answer | **Delete** (site administrators) |
| Artifact | **Edit**, **Share**, **Delete** (the creator) |
| Site-wide document | **Download** |

Sponsor-managed documents have no **Amend** or **Delete** action. Only the sponsor can change them.

On a personal document, you see **Delete** if you uploaded it. On a confidential document, members see **Manage access** and **Delete**. See [Confidential documents](/collections/manage-collections#confidential-documents).

## Create a study collection (site administrators)

1. On the **Study Documents** page, click **New Collection** at the top right. You can also click the study name at the top and select **+ Create New**.
2. Do the steps in [Create a new collection](/collections/upload-documents#create-a-new-collection).

## Rename a collection (site administrators)

1. On the **Study Documents** page, select the study.
2. Click **Manage**. The **Manage collection** dialog opens on the **Collection Settings** tab.
3. Change the **Protocol ID** or the **Sponsor name**.
4. Click **Save**.

The new name shows everywhere the collection appears, including chat and artifacts. Choose the final protocol ID carefully. This keeps staff and reports consistent.

## Link a collection to a CTMS study (site administrators)

If your site has a CTMS, link each study collection to its CTMS study. **Patients**, **Finance**, chat, and protocol access then read the CTMS study that you link. The collection name and the CTMS study name can differ.

1. On the **Study Documents** page, select the study.
2. Click **Manage**. The **Manage collection** dialog opens on the **Collection Settings** tab.
3. In the **CTMS study** section, read the current link. It shows **Not linked**, **Linked to** a study, or **Marked as not in the CTMS**.
4. If Navigator shows **Suggested CTMS study**, click **Use this study**. Or pick a study from the list. Pick **Not in the CTMS** if the study has no CTMS study.
5. Click **Save link**.

A CTMS study can link to one collection only. A study that another collection uses shows in the list with that collection's name, and you cannot pick it.

To remove a link, click **Clear link**. When you change or clear a link, Navigator marks the billing rows from the old study for review in Finance.

If a study has no link, **Patients** and **Finance** show a notice. Click **Link it in Study settings** to open this section. Other users see **Ask a site admin to link it in Study settings.** Until you link it, Navigator reads the CTMS study that has the same name as the collection.

If another collection already reads this CTMS study by its name, Navigator warns you before you save. Click **Link anyway** to continue, or **Cancel**. The other collection shows no data until you link it to its own CTMS study.

## Delete a collection (site administrators)

1. Click **Manage**, then click the **Delete** tab.
2. Click **Delete collection**.
3. Type the protocol ID to confirm.
4. Click **Permanently delete collection**.

This deletes every document in the collection. You cannot undo it.

## Failed uploads

If the last upload to a study failed, a message shows above the cards. Click **Dismiss** to remove it. For site administrators, the study list shows a warning mark next to a study with a failed upload.

## Best practices

1. **Keep document types accurate.** Chat citations show these labels.
2. **Amend documents promptly.** Staff then know which version is current.
3. **Use one collection per protocol.** Do not split a protocol across collections.

## Restrict collection and document access

Site administrators can limit who can use a study collection. They can also limit who can see a document in the collection. Use this when a protocol has sensitive appendices, or when only some staff must use some files.

Site administrators can always see all collections at their site.

### Open access settings

1. In the sidebar, click **Study Documents**.
2. Make sure the correct study shows at the top of the page.
3. Click **Manage**. The **Manage collection** dialog opens on the **Collection Settings** tab.

### Set collection access

Under **Collection access**, choose one option:

- **All site users** - all users at the site can use this collection.
- **Specific users only** - select the users who get access.

Then click **Save access**.

Users who are not on the list do not see the collection in chat or in collection lists. The rule applies to all documents in the collection, unless a document has its own rule.

### Set document access

1. On the **Study Documents** page, find the document card.
2. Click the **...** menu on the card.
3. Click **Manage access**. The **Collection Settings** tab opens with the access settings for that document.
4. Choose **All site users** to use the collection rule. Choose **Specific users only** to set a different list.
5. Click **Save access**.

A document without its own rule uses the collection rule.

### Set access when you create a collection

When a site administrator creates a collection, the dialog has an access step. Choose **All site users** or **Specific users only**. The collection is then restricted from the start. See [Create a new collection](/collections/upload-documents#create-a-new-collection).

### Confidential documents

A confidential document is sealed from site administrators. Only the uploader, the members the uploader adds, and platform administrators can see it or ask about it in chat. Use it for files such as a clinical trial agreement or a budget. This is stronger than document access, because a site administrator can see and change document access.

To upload a confidential document:

1. On the **Study Documents** page, click **Upload**.
2. Add the files. **Who can see this?** shows below the file list.
3. Select **Confidential**. Only Private Editors and platform administrators see this choice.
4. Under **Members**, type a name or an email address and pick each member from the list. Each member must be an active user at your site. You always keep access.
5. Click **Next: Name Files →**, then type a document type for each file.
6. Click **Upload**.

A confidential document shows a **Confidential** label on its card. See [Roles and permissions](/reference/roles-and-permissions).

#### Change who can see a confidential document

The uploader, other members, and platform administrators can change the members.

1. On the **Study Documents** page, find the card with the **Confidential** label.
2. Click the **...** menu on the card, then click **Manage access**.
3. Select the people who must see the document. Clear the people who must not.
4. Click **Save access**.

You always keep access to a confidential document that you change. There is no **All site users** option, because the document must stay sealed from site administrators.

### Tips

- Restrict the **collection** when a small team must use the full protocol.
- Restrict a **document** when one manual or appendix must stay private in an open collection.
- After you change access, tell affected users to refresh the app.

## Personal documents

A **personal document** is a file that you upload to a study for your own use. Navigator can read it when it answers your questions in chat. Only you can see it. Other site users, sponsors, and site administrators cannot see it. It does not go into their chat answers.

Use a personal document for working notes, a draft, or a reference copy.

:::info Personal vs. shared documents
A shared study document is visible to everyone with access to the study. A personal document is private to you. You cannot share it with other users. If a team needs a file, upload a shared document and restrict its access. See [Restrict collection and document access](#restrict-collection-and-document-access).
:::

### Who can see a personal document

| Who | Can they see it? |
| --- | --- |
| **You** (the uploader) | Yes - in chat, citations, and the **Study Documents** page |
| Other site users | No |
| Medical monitors, sponsors | No |
| **Site administrators** | No |
| Platform (Rightview) administrators | Only for support. It never goes into their chat answers. |

### Upload from the **Study Documents** page

1. In the sidebar, click **Study Documents**.
2. Make sure the correct study shows at the top of the page.
3. Click **Upload**.
4. Add the file.
5. Under **Who can see this?**, select **Just me**.
6. Click **Next: Name Files →**, then type a document type (for example `my notes`).
7. Click **Upload**.

### Upload from chat

1. In the sidebar's **Study collection** picker, select the study.
2. In chat, click the **+** button to the left of the message box. The **Add a personal document** panel opens.
3. Add the file.
4. Type a document type.
5. Click **Upload**.

A status line above the message box shows the file name and the progress. When the file is ready, the line shows **Added** with the file name. If the upload fails, the line shows the reason. Click the **X** to close the line.

The **+** button shows only when a study is selected. A personal document always belongs to one study.

### Delete a personal document

1. On the **Study Documents** page, find the card with the **Personal** label.
2. Click the **...** menu on the card, then click **Delete**.
3. Confirm the delete.

Deleting a personal document frees one of your personal document slots in that study.

### Supported file types and limits

Personal documents accept the [same file formats as shared uploads](/collections/upload-documents#supported-file-types).

| Limit | Default value |
| --- | --- |
| **Size per file** | 5 MB |
| **Personal documents per user, per study** | 5 |

Your site can have different limits. Put larger files, or content that the team needs, in a shared document.

### Replace a personal document

Upload a new personal document with the **same document type**. The new file replaces your old personal document of that type. It does not change the shared document of that type. It does not change the personal documents of other users.

### How it works in chat

- Navigator searches your personal documents together with the shared documents.
- In the **Study Documents** page and in the sources panel, a personal document shows a **Personal** label.

## Related guides

- [Upload documents](/collections/upload-documents)
- [Restrict collection and document access](/collections/manage-collections#restrict-collection-and-document-access)
- [Personal documents](/collections/manage-collections#personal-documents)
