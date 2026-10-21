---
sidebar_position: 2
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

### Install reminder in Navigator

Navigator can remind you to install the extension. The reminder shows when all of these are true:

- You use Chrome, or another Chromium browser such as Edge, on a computer.
- The extension is not installed in that browser.
- You signed in to Navigator and accepted the terms.

The reminder is a small **Get the Navigator extension** notice in the bottom-right corner. Click **Install** to open the Chrome Web Store listing. Click **Not now** or the **X** to close it.

Navigator shows the reminder one time per user. It records this on your account when the notice shows. The notice does not come back, even if you close the tab, sign in again, or use another computer or browser. If a notice about a new Navigator release shows at sign-in, the reminder waits for a later sign-in. Navigator does not show the reminder inside the side panel, on a phone or tablet, or in Safari or Firefox.

## First launch: the Welcome page

When you add the extension, Chrome opens the [Welcome page](/extension/welcome) in a new tab. It shows how to pin the extension, sign in, and turn on access to local files. Chrome opens it only after a first install, not after an update.

The side panel opens directly to Navigator. To see the Welcome page again, right-click the toolbar icon and select **Setup help**.

## Open the panel and sign in

1. Click the **Rightview Navigator** toolbar icon, or press **Alt+Shift+R**. The panel opens on the right side of the browser window.
2. If you are not signed in, the Navigator sign-in form shows in the panel. Sign in with your Navigator account. The extension does not use a separate account.
3. After sign-in, the panel shows chat for one study collection. To change the collection, use the collection picker at the top of the panel.

The panel uses the same session as [sites.rightview.ai](https://sites.rightview.ai). If you are signed in there, the panel opens directly to chat. After 60 minutes with no activity, Navigator signs you out and shows the sign-in form again. This is a requirement for a PHI application. You cannot extend it.

## Panel views

An icon rail on the left side of the panel changes the view. Each icon has a short label. Point to an icon to see the full name. You can also press **Alt+1**, **Alt+2**, and so on to select a view. **Chat**, **Save page**, and **History** always show. The other views show only if an administrator enables the module for your site.

| Rail label | Full name | What it does | Module |
| --- | --- | --- | --- |
| **Chat** | Chat | Ask questions about the selected study collection. Answers include citations. | None |
| **Source QC** | Source QC | Capture the page in the active tab and run an ALCOA+ quality review. | Source QC |
| **EDC check** | Cross-check with EDC | Compare the EDC values with the source document, field by field. | Source QC |
| **Screening** | Pre-screening | Check a patient record against the study eligibility criteria. | Pre-screening |
| **Invoices** | Invoice capture | Capture invoice lines from a CTMS page into Finance. | Finance |
| **Save page** | Save page | Save the text of the active tab as a shared document in the study. | None |
| **History** | Chat history | Open your recent chats, including pre-screening runs. | None |

Medical monitors do not see **Source QC** or **Invoices**, even when the module is on.

Each view except Chat shows the study at the top. Use the **Study** picker to change it. To start a run from the keyboard, press **Ctrl+Enter** (**Cmd+Enter** on a Mac). Click the back arrow to go back to chat.

## Chat

Chat in the panel works the same as chat in the main app. Select a collection, type a question, and get an answer with numbered citations. See [Ask questions in chat](/chat/asking-questions) for the full guide.

These controls are specific to the panel:

- **Cross-reference current screen** - a checkbox below the message box. Select it before you send a message. Navigator then also reads the visible text of the page in the active tab. For example, ask *"Does this record meet Visit 2 requirements?"*. Navigator reads only the text, and only for that one message.
- **Open the full Rightview app** - the arrow icon at the top of the panel. It opens the full Navigator app in a new tab.
- **Sign out** - the icon at the top of the panel. Navigator asks **Sign out of Rightview?** Click **Sign out** to confirm. A capture in progress in the panel stops.

### Call scripts in the panel

When an answer is a pre-screening call script, the panel shows it in sections, for example **EMR Review**, **Medication Quick Reference**, **Call Script**, **If the candidate passes**, **FAQ**, and **Sources**. The view fits the width of the panel. You can tick the EMR review items and the questions that you asked. Navigator does not save these ticks. They reset when you open the script again.

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
2. In the rail, select **Source QC**.
3. Click **Run Source QC**.
4. The extension captures the full page of the active tab. Chrome shows a "started debugging this browser" banner during the capture. The banner closes when the capture is complete.
5. Navigator uploads and analyzes the capture. The panel shows each finding as a **Flag** or a **Note**. If there are no issues, the panel shows **No issues found**. To run it again, click **Run again**.

Navigator also saves the capture in the main app, in **Visits → Source Quality Control**. There you can see all findings, add comments, and mark issues resolved. Click **Open in Rightview** below the result to go there.

**PDFs and images:** If you open a PDF or an image directly in its own tab, the extension captures the original file. Navigator checks every page of the PDF.

**PDFs from your computer:** Open the PDF in a Chrome tab, then run Source QC as usual. The side panel reads the file. First turn on [access to local files](/extension/enable-file-access). This works for Source QC, the source tab in Cross-check with EDC, and Pre-screening.

If the PDF is inside another page, the extension cannot get the file. The panel shows **This tab is a PDF**. Upload that PDF to Navigator directly.

## Cross-check with EDC

Cross-check with EDC does source data verification. It compares the values in the EDC with the values in the source document, field by field.

1. Open the source document in one tab.
2. Open the EDC form in a second tab.
3. In the rail, select **EDC check**. The **Cross-check** view opens and reads the list of your open tabs.
4. In **Source tab**, select the tab with the source document. The default is the active tab. Click **Use current tab** to pick the tab that you are on.
5. In **EDC tab (optional)**, select the tab with the EDC form. The panel remembers the EDC site that you used last. This list does not show the source tab, PDF tabs, or image tabs.
6. Click **Compare with EDC**.

To find a tab, type in **Search tabs by title or site…**. If you open a page after the panel, click **Refresh tabs**.

Navigator captures the source tab, reads the EDC tab, and compares them. The result shows each field with its **EDC** value and its **Source** value. Each field has one of these verdicts:

| Verdict | Meaning |
| --- | --- |
| **Match** | The EDC value and the source value are the same. |
| **Mismatch** | The EDC value and the source value are different. |
| **Missing in EDC** | The source has a value, but the EDC does not. |
| **Missing in source** | The EDC has a value, but the source does not. |

A summary line above the result shows the number of fields compared, mismatches, and missing values.

Navigator saves the comparison on the Source QC record of the source document. In the main app, open **Visits → Source Quality Control** and open the document. The comparison shows in the **Source data verification** section. Click **Open in Rightview** below the result to go there. To compare again, click **New cross-check**.

If you set **EDC tab (optional)** to **None — just capture the source**, the button changes to **Capture source**. Navigator then uploads the source for Source QC only, with no comparison. The panel shows **Source captured** when the upload is done.

## Pre-screening

Pre-screening checks a patient record against the inclusion and exclusion criteria of the selected study.

**Overview (1 min):** Pre-screening from start to finish.

<video controls preload="metadata" poster="/video/prescreening-explainer-poster.jpg" style={{width: '100%', maxWidth: '840px', borderRadius: '8px'}}>
  <source src="/video/prescreening-explainer.mp4" type="video/mp4" />
</video>

1. Open the patient record in a browser tab. For example, open it in your EMR. The record can be a web page or a PDF. For a PDF from your computer, first turn on [access to local files](/extension/enable-file-access).
2. In the rail, select **Screening**.
3. Click **Check eligibility**.
4. While the check runs, the panel shows each step and a check mark when the step ends. To stop the check, click **Cancel**.
5. The panel shows the result. To check the record again, click **Check again**.

If the PDF is inside another page, the extension cannot read it. Open the PDF in its own browser tab, or upload it to Navigator.

### Read the result

The result shows the most important information first:

1. **The verdict:** **Likely included**, **Likely excluded**, or **More info needed**. A line below the verdict counts the criteria, for example *1 exclusion applies · 2 unknown · 5 passed*.
2. **A short summary** of the result.
3. **Decides the verdict** - an inclusion criterion that is **Not met**, or an exclusion criterion that **Applies**.
4. **Needs info** - criteria that the record does not answer. Each one shows **Unknown** and a **Missing:** line that names the missing fact.
5. **Passed** - criteria that help the patient qualify: an inclusion that is **Met**, or an exclusion that **Does not apply**. This group is closed. Click **Passed** to open it.

Click a criterion to open or close its reason, the quote from the record, and the citation. Citations show the document name and page.

The same result view shows when you open the run as a chat, in the panel or in the main app.

### See the evidence on the page

After the check, click **Show all evidence on the page**. The panel marks the text on the patient record that supports each criterion. To mark the evidence for one criterion only, click the quote under that criterion. Click **Clear marks on the page** to remove the marks. The **Show all evidence on the page** button shows only when more than one criterion has a quote.

This needs version 1.7.0 or later of the extension. An older version shows a message that asks you to update it.

### Ask follow-up questions

Click **Continue in chat** under the result. The run opens as a chat in the panel. Ask follow-up questions about the verdict there.

Each run is saved as a chat named with the study and the run time, for example **Pre-screening · FLOW_NCT03819153 · Oct 12, 12:33 AM**. To open a past run, select **History** in the panel.

If the capture takes too long, the panel shows an error. Reload the patient record tab and try again. If the check takes too long, click **Keep waiting**.

The verdict is decision support. It is not a determination.

## Invoice capture

Invoice capture reads invoice lines from a CTMS page and saves them in Finance.

**Overview (1 min):** Invoice capture and the Finance desk from start to finish.

<video controls preload="metadata" poster="/video/finance-explainer-poster.jpg" style={{width: '100%', maxWidth: '840px', borderRadius: '8px'}}>
  <source src="/video/finance-explainer.mp4" type="video/mp4" />
</video>

1. Open the CTMS invoice page in the active tab.
2. In the rail, select **Invoices**.
3. Click **Capture invoices**.
4. Review the rows. Clear the checkbox of each row that you do not want to save.
5. If the page shows more than one patient, check the patient on each row. Then select **I checked the patient on every selected row**.
6. Click **Save**. The button shows the number of selected rows, for example **Save 3 invoiceables**. If a row is already on file, Navigator updates it. It does not make a duplicate.

Click **View in Finance** to see the saved rows. For more information, see [Finance desk](/finance/finance-desk).

## Save page

Save page saves the text of the active tab as a shared document in the study. All users with access to the study can search and cite it. Use it for study documents, such as a lab manual. Do not use it for patient records. For a private file, use **+** in chat.

1. Open the page in the active tab.
2. In the panel, select **Save page**.
3. Click **Capture page**.
4. Check the title. Type a document type, for example "Lab Manual".
5. Click **Save to collection**.

## Page suggestions

The extension can suggest a view for the page that you open. When a page looks like a source document, a patient record, or a CTMS invoice page, a small round logo shows in the bottom-right corner of the page. The logo is teal and blue, with a check mark. The extension reads the page on your computer only. It sends nothing to Navigator until you click the logo.

- Point to the logo to see the suggestion: **Run Source QC**, **Check eligibility**, or **Capture invoices**.
- Click the logo to open the panel and start that run for your study.
- Press **Alt+Shift+Y** to accept the suggestion from the keyboard.
- To hide the logo on this page, point to it and click the small **X** (**Hide on this page**), or press **Esc**. Otherwise the logo stays until you use it or leave the page.
- To stop suggestions on all pages, right-click the toolbar icon and select **Pause page suggestions**. When suggestions are paused, the toolbar icon shows **OFF**. To start them again, click **Resume** at the top of the panel.

The extension suggests only the views that your account can open. For example, if Pre-screening is not on for your site, you never get a pre-screening suggestion. A medical monitor never gets a Source QC or invoice suggestion. Suggestions start after you open the panel and sign in. If your access changes, for example when you switch site, the extension updates the suggestions. When you sign out of the panel, the extension clears the list and removes any logo. Suggestions start again when you sign in.

## Troubleshooting

- **The panel is blank or does not load chat** - Your session possibly timed out after 60 minutes with no activity. Close the panel and open it again. The sign-in form shows. If the problem continues, contact your Rightview administrator.
- **A view is not in the icon rail** - An administrator did not enable that module for your site.
- **Source QC shows "This tab is a PDF"** - Upload the PDF to Navigator directly. See [Source Quality Control](/visits/overview#source-quality-control).
- **The capture fails on a local file** - The tab shows a file from your computer (its address starts with `file:///`). Chrome blocks the extension until you turn on file access. See [Allow access to local files](/extension/enable-file-access).
- **Navigator captured the wrong page** - Source QC, Pre-screening, Invoice capture, and Save page use the active tab. Make sure that the correct tab is active before you start. Cross-check with EDC uses the tabs that you select.
- **No page suggestions show** - Open the panel and sign in. Suggestions show only after that, and only for views that your account can open. Also check that the toolbar icon does not show **OFF**. If you updated the extension, reload the page.
- **Cross-check with EDC shows no tabs** - Open the source and EDC pages in normal browser tabs. Click the back arrow, then select **Cross-check with EDC** again.

## Related guides

- [Ask questions in chat](/chat/asking-questions)
- [View all sources](/chat/viewing-sources)
- [Allow access to local files](/extension/enable-file-access)
- [Visits & Source Quality Control](/visits/overview)
- [Finance desk](/finance/finance-desk)
- [Sign in](/getting-started/sign-in)
