---
sidebar_position: 2
---

# Manage collections

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

When you come back to the Navigator tab or window, the document list refreshes. A page that you saved with **Save page** in the Chrome extension then shows without a page refresh.

## Find an item

- Type in the **Search this study…** box to filter cards by title or label.
- Click a filter chip to show one kind of item:

| Chip | Shows |
| --- | --- |
| **All** | Every item in the study |
| **Documents** | Study documents, including your personal and confidential documents |
| **Knowledge** | Answers from contacts |
| **Artifacts** | Artifacts saved for this study |
| **Site-wide** | Documents that apply to every study at your site |

## Read the cards

Each card has a colored label that shows the kind of item:

- **Document type** (for example **Protocol Document** or **Lab Manual**) - a shared study document.
- **Personal** - a document only you can see. See [Personal documents](/collections/personal-documents).
- **Confidential** - a document sealed from site administrators. See [Confidential documents](/collections/restrict-access#confidential-documents).
- **Verified response** or **Response** - a contact's answer to a question. **Verified response** means the contact signed the answer in the app, or sent it by email from a confirmed email domain. The card says **Answered by** or **Email response from** and the contact's name.
- **Artifact** - a saved artifact. See [Save and share artifacts](/artifacts/save-and-share).
- **Site-wide** - a document for all studies at your site.

Click a card to open it. A document opens in the document viewer. A contact answer or an artifact opens in a dialog.

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
| Document | **Download**, **Amend**, **Rename**, **Manage access**, **Delete** |
| Contact answer | **Delete** (site administrators and administrators) |
| Artifact | **Download PDF**, **Download Word**, **Download Excel** (only when the artifact has a table), **Print**. The creator also sees **Edit**, **Share**, and **Delete**. |
| Site-wide document | **Download** |

Sponsor-managed documents have no **Amend**, **Rename**, or **Delete** action. Only the sponsor can change them.

On a personal document, you see **Download**, and **Delete** if you uploaded it. On a confidential document, members see **Manage access** and **Delete**. A confidential document has no **Download** action. See [Confidential documents](/collections/restrict-access#confidential-documents).

**Delete** removes the item right away. There is no confirmation step.

## Rename a document

Site administrators, site editors, and administrators can rename a shared study document.

1. Click the **...** menu on the document card, then click **Rename**. The **Rename document** dialog opens.
2. Type the new name. Keep the same file extension, for example `.pdf`.
3. Click **Rename**.

The new name applies to every version of the document. The file itself does not change. You cannot rename a personal or confidential document.

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

## Upload status

While a new collection uploads, the **Study Documents** page shows **Uploading document 1 of 3. Documents show here as each one finishes.** The new study stays selected while it uploads. A progress message also shows on every page. See [Follow upload progress](/collections/upload-documents#follow-upload-progress).

The sidebar's **Study collection** picker shows the upload status next to the study, for example **Uploading 45%** or **Upload failed**.

## Failed uploads

If the last upload to a study failed, a message shows above the cards. It starts with **Last upload to this study failed:** and gives the reason. Click **Dismiss** to remove it. For site administrators, the study list at the top of the **Study Documents** page shows a warning mark next to a study with a failed upload.

## Best practices

1. **Keep document types accurate.** Chat citations show these labels.
2. **Amend documents promptly.** Staff then know which version is current.
3. **Use one collection per protocol.** Do not split a protocol across collections.

## Related guides

- [Upload documents](/collections/upload-documents)
- [Restrict collection and document access](/collections/restrict-access)
- [Personal documents](/collections/personal-documents)
