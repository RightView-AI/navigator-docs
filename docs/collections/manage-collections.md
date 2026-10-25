---
sidebar_position: 2
description: "Manage study collections on the Study Documents page: cards, rename, delete, restrict access, and personal documents."
keywords: ["study documents", "collection", "protocol", "rename", "delete", "CTMS", "access control", "restrict", "permissions", "confidential", "private", "personal document", "who can see", "share"]
---

# Manage collections (Study Documents)

The **Study Documents** page shows the documents, verified answers, and artifacts for the active study as cards.

## Open the Study Documents page

Click **Study Documents** in the sidebar. The study name at the top shows the active study. To change it, click the name and select another study. Type in the filter box to find a study by ID or sponsor.

## The study collection picker

The study you select here is also the active study in the sidebar's **Study collection** picker. The picker sets the study for chat, **Users** (external contacts), **Visits**, and **Study Documents**. Change it in one place and all views change.

:::tip Refresh keeps your place
The page address includes the current view (for example `?view=collections`), so a refresh or a shared link opens the same view.
:::

## Find an item

Type in **Search this study…** to filter cards by title or label, or click a filter chip: **All**, **Documents** (including your personal and confidential documents), **Knowledge** (answers that a contact verified), **Artifacts**, or **Site-wide** (documents that apply to every study at your site).

## Read the cards

Each card has a colored label:

- **Document type** (for example **Protocol Document** or **Lab Manual**) - a shared study document.
- **Personal** - only you can see it. See [Personal documents](#personal-documents).
- **Confidential** - sealed from site administrators. See [Confidential documents](#confidential-documents).
- **Verified answer** - an answer that a contact verified.
- **Artifact** - a saved artifact. See [Save and share artifacts](/artifacts/save-and-share).
- **Site-wide** - a document for all studies at your site.

Click a card to open it. A document opens in the viewer. A verified answer or an artifact opens in a dialog.

## Shortcuts to other records

The page also has shortcuts to records that live in other views. A shortcut opens the record in its own view, and you cannot change a record from it. The search box finds shortcuts.

| Shortcut | Where it shows | What you need | Opens |
| --- | --- | --- | --- |
| **Schedule of Assessments** card | Above the documents | A saved schedule and the **Schedule of Assessments** module | **Visits → Schedule of Assessments** |
| **Patient source documents** | Below the documents | The **Source QC** module | **Visits → Source Quality Control** |
| **Finance** section | Below the documents | The **Finance** module | **Billing rules** or **Invoiceables** in **Finance** |

- The Schedule of Assessments card shows **Draft** or **Approved**, the version, and the save date.
- A patient source document card shows the subject and visit, or the file name if there is no link, and a badge: **Analyzing…**, **Failed**, **Pass**, **Issues found**, or **Complete**.
- The Finance section starts with the **Billing rules** card (**Approved** or **Draft**, number of rules, save date). An **Invoice** card follows for each imported invoice, showing how it came in: **File import**, **CTMS sync**, or **Screen capture**.

A section shows its first row. Click **Show all** or **Collapse**, and **Load more** for the next cards.

## Card actions

Click the **...** menu on a card. The actions depend on your role and the item.

| Item | Actions |
| --- | --- |
| Document | **Download**, **Amend**, **Manage access**, **Delete** |
| Verified answer | **Delete** (site administrators) |
| Artifact | **Edit**, **Share**, **Delete** (the creator) |
| Site-wide document | **Download** |

Sponsor-managed documents have no **Amend** or **Delete**. Only the sponsor can change them. On a personal document, the uploader sees **Delete**. On a confidential document, members see **Manage access** and **Delete**.

## Create a study collection (site administrators)

Click **New Collection** at the top right, or click the study name and select **+ Create New**. Then follow [Create a new collection](/collections/upload-documents#create-a-new-collection).

## Rename a collection (site administrators)

1. Select the study and click **Manage**. The **Manage collection** dialog opens on the **Collection Settings** tab.
2. Change the **Protocol ID** or **Sponsor name**, then click **Save**.

The new name shows everywhere, including chat and artifacts. Choose the final protocol ID carefully.

## Link a collection to a CTMS study (site administrators)

If your site has a CTMS, link each collection to its CTMS study. **Patients**, **Finance**, chat, and protocol access then read the study you link. The two names can differ.

1. Select the study and click **Manage** to open **Collection Settings**.
2. In **CTMS study**, read the current link: **Not linked**, **Linked to** a study, or **Marked as not in the CTMS**.
3. Click **Use this study** on a **Suggested CTMS study**, or pick a study from the list. Pick **Not in the CTMS** if the study has none.
4. Click **Save link**.

A CTMS study can link to one collection only. A study that another collection uses shows that collection's name, and you cannot pick it. To remove a link, click **Clear link**. When you change or clear a link, Navigator marks the billing rows from the old study for review in Finance.

With no link, Navigator reads the CTMS study that has the same name as the collection. If another collection already reads that study by name, Navigator warns you before you save. Click **Link anyway** or **Cancel**. The other collection shows no data until you link it to its own study. **Patients** and **Finance** show a notice for an unlinked study. Site administrators see **Link it in Study settings**, and other users see **Ask a site admin to link it in Study settings.**

## Delete a collection (site administrators)

1. Click **Manage**, then the **Delete** tab.
2. Click **Delete collection**, type the protocol ID, and click **Permanently delete collection**.

This deletes every document in the collection. You cannot undo it.

## Failed uploads

If the last upload to a study failed, a message shows above the cards. Click **Dismiss** to remove it. Site administrators also see a warning mark next to the study in the study list.

## Best practices

1. Keep document types accurate. Chat citations show these labels.
2. Amend documents promptly, so staff know which version is current.
3. Use one collection per protocol. Do not split a protocol across collections.

## Restrict collection and document access

Site administrators can limit who can use a collection and who can see a document in it. Use this when a protocol has sensitive appendices, or when only some staff must use some files. Site administrators can always see all collections at their site.

### Set collection access

1. Select the study and click **Manage**. The **Manage collection** dialog opens on **Collection Settings**.
2. Under **Collection access**, choose **All site users** or **Specific users only** and select the users.
3. Click **Save access**.

Users who are not on the list do not see the collection in chat or in collection lists. The rule applies to every document unless a document has its own rule. You can also set access when you create a collection. See [Create a new collection](/collections/upload-documents#create-a-new-collection).

### Set document access

1. On the document card, click the **...** menu, then **Manage access**.
2. Choose **All site users** to use the collection rule, or **Specific users only** to set a different list.
3. Click **Save access**.

### Confidential documents

A confidential document is sealed from site administrators. Only the uploader, the members the uploader adds, and platform administrators can see it or ask about it in chat. Use it for files such as a clinical trial agreement or a budget. This is stronger than document access, because a site administrator can see and change document access.

To upload one:

1. On **Study Documents**, click **Upload** and add the files.
2. Under **Who can see this?**, select **Confidential**. Only Private Editors and platform administrators see this choice.
3. Under **Members**, type a name or email address and pick each member. Each must be an active user at your site. You always keep access.
4. Click **Next: Name Files →**, type a document type for each file, and click **Upload**.

The card shows a **Confidential** label. See [Roles and permissions](/reference/roles-and-permissions).

#### Change who can see a confidential document

The uploader, other members, and platform administrators can change the members. Click the **...** menu on the card, then **Manage access**. Select the people who must see the document, clear the others, and click **Save access**. You always keep access. There is no **All site users** option, because the document must stay sealed from site administrators.

### Tips

- Restrict the **collection** when a small team must use the full protocol.
- Restrict a **document** when one manual or appendix must stay private in an open collection.
- After you change access, tell affected users to refresh the app.

## Personal documents

A **personal document** is a file that you upload to a study for your own use, such as working notes, a draft, or a reference copy. Navigator reads it when it answers your questions in chat. Only you can see it, and it never goes into anyone else's chat answers. Other site users, medical monitors, sponsors, and site administrators cannot see it. Platform (Rightview) administrators can see it only for support.

You cannot share a personal document. If a team needs a file, upload a shared document and [restrict its access](#restrict-collection-and-document-access).

### Upload a personal document

From the **Study Documents** page:

1. Click **Upload** and add the file.
2. Under **Who can see this?**, select **Just me**.
3. Click **Next: Name Files →**, type a document type (for example `my notes`), and click **Upload**.

From chat:

1. Select the study in the **Study collection** picker. The **+** button left of the message box shows only when a study is selected.
2. Click **+**. The **Add a personal document** panel opens.
3. Add the file, type a document type, and click **Upload**.

A status line above the message box shows the progress, then **Added** with the file name. If the upload fails, it shows the reason. A personal document always belongs to one study.

### Replace or delete a personal document

To replace one, upload a new personal document with the **same document type**. It replaces only your personal document of that type, not the shared document or other users' personal documents.

To delete one, click the **...** menu on the card with the **Personal** label, then **Delete**, and confirm. This frees one of your personal document slots in that study.

### Limits

Personal documents accept the [same file formats as shared uploads](/collections/upload-documents#supported-file-types). By default each file can be up to 5 MB, and you can have 5 personal documents per study. Your site can have different limits. Put larger files, or content the team needs, in a shared document.

## Related guides

- [Upload documents](/collections/upload-documents)
- [Roles and permissions](/reference/roles-and-permissions)
