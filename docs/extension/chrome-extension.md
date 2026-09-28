---
sidebar_position: 1
---

# Chrome side-panel extension

The **Rightview Navigator** Chrome extension shows Navigator in a side panel. The panel stays next to the page you work on, for example your EDC, a source document, or a screening record. It is the same Navigator that you use in the browser.

**Who it is for:** coordinators and other site staff who work in a second system, such as an EDC, EMR, or CTMS. Use the panel to ask questions, run Source QC, compare source data with the EDC, or pre-screen a patient. You do not have to leave the other system.

## Install

The extension is on the Chrome Web Store.

1. In **Google Chrome**, open the [Rightview Navigator listing on the Chrome Web Store](https://chromewebstore.google.com/detail/abailmienbplhpgipgbdgendbdfpaeak).
2. Click **Add to Chrome**. Then click **Add extension** to confirm.
3. (Optional) Pin the extension. Click the puzzle-piece icon in the toolbar, then click the pin next to **Rightview Navigator**.

Chrome updates the extension automatically. You do not need to download or install it again.

## First launch: the Welcome page

The first time you open the panel, it shows a **Welcome to Navigator** page.

1. Read the **Turn on access to local files** steps. You need this setting only to capture a file that you open from your computer. See [Allow access to local files](/extension/enable-file-access).
2. Look at the status line below the steps. It shows if file access is on or off.
3. Click **Open Navigator**. The panel shows the Navigator sign-in form or chat.

After the first time, the panel opens directly to Navigator. To see the Welcome page again, right-click the toolbar icon and select **Welcome and setup help**.

## Open the panel and sign in

1. Click the **Rightview Navigator** toolbar icon, or press **Alt+Shift+R**. The panel opens on the right side of the browser window.
2. If you are not signed in, the Navigator sign-in form shows in the panel. Sign in with your Navigator account. The extension does not use a separate account.
3. After sign-in, the panel shows chat for one study collection. To change the collection, use the collection picker at the top of the panel.

The panel uses the same session as [sites.rightview.ai](https://sites.rightview.ai). If you are signed in there, the panel opens directly to chat. After 60 minutes with no activity, Navigator signs you out and shows the sign-in form again. This is a requirement for a PHI application. You cannot extend it.

## Panel views

An icon rail on the left side of the panel changes the view. You can also press **Alt+1**, **Alt+2**, and so on to select a view. **Chat** and **Save page** always show. The other views show only if an administrator enables the module for your site.

| View | What it does | Module |
| --- | --- | --- |
| **Chat** | Ask questions about the selected study collection. Answers include citations. | None |
| **Source QC** | Capture the page in the active tab and run an ALCOA+ quality review. | Source QC |
| **Cross-check with EDC** | Compare the EDC values with the source document, field by field. | Source QC |
| **Pre-screening** | Check a patient record against the study eligibility criteria. | Pre-screening |
| **Invoice capture** | Capture invoice lines from a CTMS page into Finance. | Finance |
| **Save page** | Save the text of the active tab as a shared document in the study. | None |

Each view except Chat shows the study at the top. Use the **Study** picker to change it. Click the back arrow to go back to chat.

## Chat

Chat in the panel works the same as chat in the main app. Select a collection, type a question, and get an answer with numbered citations. See [Ask questions in chat](/chat/asking-questions) for the full guide.

These controls are specific to the panel:

- **Cross-reference current screen** - a checkbox below the message box. Select it before you send a message. Navigator then also reads the visible text of the page in the active tab. For example, ask *"Does this record meet Visit 2 requirements?"*. Navigator reads only the text, and only for that one message.
- **Open the full Rightview app** - the arrow icon at the top of the panel. It opens the full Navigator app in a new tab.
- **Sign out** - the icon at the top of the panel.

> Do not enter protected personal or patient identifiers (PHI/PII) into chat. AI can sometimes give incorrect information. Always use your professional judgement.

## Source QC

Source QC reviews a source document against the ALCOA+ data-quality dimensions and the protocol. It flags issues such as a missing signature or a missing field.

**Overview (1 min):** Source QC and Cross-check with EDC from start to finish.

<video controls preload="metadata" poster="/video/source-qc-explainer-poster.jpg" style={{width: '100%', maxWidth: '840px', borderRadius: '8px'}}>
  <source src="/video/source-qc-explainer.mp4" type="video/mp4" />
</video>

**Walkthrough:** a real Source QC run in the extension.

<video controls preload="metadata" style={{width: '100%', maxWidth: '840px', borderRadius: '8px'}}>
  <source src="/video/source-qc-extension.mp4" type="video/mp4" />
</video>

1. Open the source document in a browser tab. For example, open a page in your EDC.
2. In the panel, select **Source QC**.
3. Click **Run Source QC**.
4. The extension captures the full page of the active tab. Chrome shows a "started debugging this browser" banner during the capture. The banner closes when the capture is complete.
5. Navigator uploads and analyzes the capture. The panel shows each finding as a **Flag** or a **Note**. If there are no issues, the panel shows **No issues found**.

Navigator also saves the capture in the main app, in **Visits → Source Quality Control**. There you can see all findings, add comments, and mark issues resolved. Click **Open in Rightview** below the result to go there.

**PDFs and images:** If you open a PDF or an image directly in its own tab, the extension captures the original file. If the PDF is inside another page, the panel shows **This tab is a PDF**. Upload that PDF to Navigator directly.

## Cross-check with EDC

Cross-check with EDC does source data verification. It compares the values in the EDC with the values in the source document, field by field.

1. Open the source document in one tab.
2. Open the EDC form in a second tab.
3. In the panel, select **Cross-check with EDC**. The panel reads the list of your open tabs.
4. In **Source tab**, select the tab with the source document. The default is the active tab.
5. In **EDC tab (optional)**, select the tab with the EDC form. The panel remembers the EDC site that you used last.
6. Click **Compare with EDC**.

Navigator captures the source tab, reads the EDC tab, and compares them. The result shows each field with its **EDC** value and its **Source** value. Each field has one of these verdicts:

| Verdict | Meaning |
| --- | --- |
| **Match** | The EDC value and the source value are the same. |
| **Mismatch** | The EDC value and the source value are different. |
| **Missing in EDC** | The source has a value, but the EDC does not. |
| **Missing in source** | The EDC has a value, but the source does not. |

A summary line above the result shows the number of fields compared, mismatches, and missing values.

Navigator saves the comparison on the Source QC record of the source document. In the main app, open **Visits → Source Quality Control** and open the document. The comparison shows in the **Source data verification** section. Click **Open in Rightview** below the result to go there. To compare again, click **New cross-check**.

If you set **EDC tab (optional)** to **None - just capture the source**, the button changes to **Capture source**. Navigator then uploads the source for Source QC only, with no comparison.

## Pre-screening

Pre-screening checks a patient record against the inclusion and exclusion criteria of the selected study.

1. Open the patient record in a browser tab. For example, open it in your EMR. The record can be a web page or a PDF.
2. In the panel, select **Pre-screening**.
3. Click **Check eligibility**.
4. The panel shows a verdict: **Likely included**, **Likely excluded**, or **More info needed**. Below the verdict, each criterion shows its result and the reason. Citations show the document name and page.

If the capture takes too long, the panel shows an error. Reload the patient record tab and try again. If the check takes too long, click **Keep waiting**.

The verdict is decision support. It is not a determination.

## Invoice capture

Invoice capture reads invoice lines from a CTMS page and saves them in Finance.

1. Open the CTMS invoice page in the active tab.
2. In the panel, select **Invoice capture**.
3. Click **Capture invoices**.
4. Review the rows. Clear the checkbox of each row that you do not want to save.
5. If the page shows more than one patient, check the patient on each row. Then select **I checked the patient on every selected row**.
6. Click **Save** (the button shows the number of selected rows). If a row is already on file, Navigator updates it. It does not make a duplicate.

Click **View in Finance** to see the saved rows. For more information, see [Finance desk](/finance/finance-desk).

## Save page

Save page saves the text of the active tab as a shared document in the study. All users with access to the study can search and cite it. Navigator removes patient identifiers before it stores the text.

1. Open the page in the active tab.
2. In the panel, select **Save page**.
3. Click **Capture page**.
4. Check the title. Type a document type, for example "Lab Manual".
5. Click **Save to collection**.

## Page suggestions

The extension can suggest a view for the page that you open. For example, on a source document it shows a small card with the text *"This looks like a source document. Run Source QC for [study]?"*. The extension reads the page on your computer only. It sends nothing to Navigator until you click the button on the card.

- Click the button on the card to open the panel and start the run for the named study.
- Press **Alt+Shift+Y** to accept the suggestion from the keyboard.
- Click **X** to close the card. The card also closes after a few seconds with no activity.
- Click **Pause suggestions** to stop suggestions on all pages. You can also right-click the toolbar icon and select **Pause page suggestions**. When suggestions are paused, the toolbar icon shows **OFF**. To start them again, click **Resume** at the top of the panel.

## Troubleshooting

- **The panel is blank or does not load chat** - Your session possibly timed out after 60 minutes with no activity. Close the panel and open it again. The sign-in form shows. If the problem continues, contact your Rightview administrator.
- **A view is not in the icon rail** - An administrator did not enable that module for your site.
- **Source QC shows "This tab is a PDF"** - Upload the PDF to Navigator directly. See [Source Quality Control](/visits/overview#source-quality-control).
- **The capture fails on a local file** - The tab shows a file from your computer (its address starts with `file:///`). Chrome blocks the extension until you turn on file access. See [Allow access to local files](/extension/enable-file-access).
- **Navigator captured the wrong page** - Source QC, Pre-screening, Invoice capture, and Save page use the active tab. Make sure that the correct tab is active before you start. Cross-check with EDC uses the tabs that you select.
- **Cross-check with EDC shows no tabs** - Open the source and EDC pages in normal browser tabs. Click the back arrow, then select **Cross-check with EDC** again.

## Related guides

- [Ask questions in chat](/chat/asking-questions)
- [View all sources](/chat/viewing-sources)
- [Allow access to local files](/extension/enable-file-access)
- [Visits & Source Quality Control](/visits/overview)
- [Finance desk](/finance/finance-desk)
- [Sign in](/getting-started/sign-in)
