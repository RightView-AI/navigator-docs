---
sidebar_position: 2
description: "Use Navigator in Chrome: chat, Source QC, EDC cross-check, pre-screening, and invoice capture next to the page you work on."
keywords: ["Chrome", "extension", "side panel", "browser", "EDC", "EMR", "source QC", "cross-check", "pre-screening", "invoice capture", "local file", "file URLs", "install", "toolbar"]
---

# Use Navigator in Chrome (side-panel extension)

The **Rightview Navigator** Chrome extension shows Navigator in a side panel next to the page you work on, for example your EDC, a source document, or a screening record. It is the same Navigator as in the browser. Use it to ask questions, run Source QC, compare source data with the EDC, or pre-screen a patient without leaving the other system.

## Install

1. In **Google Chrome**, open the [Rightview Navigator listing on the Chrome Web Store](https://chromewebstore.google.com/detail/abailmienbplhpgipgbdgendbdfpaeak).
2. Click **Add to Chrome**, then **Add extension**.
3. (Optional) Click the puzzle-piece icon in the toolbar and pin **Rightview Navigator**.

Chrome updates the extension automatically.

### Install reminder in Navigator

Navigator shows a small **Get the Navigator extension** notice in the bottom-right corner when all of these are true: you use Chrome (or another Chromium browser such as Edge) on a computer, the extension is not installed there, and you signed in and accepted the terms. Click **Install** to open the Chrome Web Store listing, or **Not now** or the **X** to close it. It shows one time per user and does not come back on another computer or browser. It never shows in the side panel, on a phone or tablet, or in Safari or Firefox.

After the first install, Chrome opens the [Welcome page](/extension/welcome) with steps to pin the extension, sign in, and turn on access to local files. To see it again, right-click the toolbar icon and select **Setup help**.

## Open the panel and sign in

1. Click the toolbar icon, or press **Alt+Shift+R**. The panel opens on the right.
2. If you are not signed in, sign in with your Navigator account. The extension has no separate account.
3. The panel opens to chat for one study collection. Use the collection picker at the top to change it.

The panel shares your session with [sites.rightview.ai](https://sites.rightview.ai). After 60 minutes with no activity, Navigator signs you out. This is a PHI requirement, and you cannot extend it.

## Panel views

The icon rail on the left changes the view. Each icon has a short label, and pointing at it shows the full name. You can also press **Alt+1**, **Alt+2**, and so on. **Chat**, **Save page**, and **History** always show. The other views show only if an administrator enables the module for your site.

| Rail label | Full name | What it does | Module |
| --- | --- | --- | --- |
| **Chat** | Chat | Ask questions about the selected study collection. Answers include citations. | None |
| **Source QC** | Source QC | Capture the active tab and run an ALCOA+ quality review. | Source QC |
| **EDC check** | Cross-check with EDC | Compare EDC values with a source document, field by field. | Source QC |
| **Screening** | Pre-screening | Check a patient record against the study eligibility criteria. | Pre-screening |
| **Invoices** | Invoice capture | Capture invoice lines from a CTMS page into Finance. | Finance |
| **Save page** | Save page | Save the text of the active tab as a shared study document. | None |
| **History** | Chat history | Open your recent chats, including pre-screening runs. | None |

Medical monitors do not see **Source QC** or **Invoices**, even when the module is on.

Each view except Chat shows a **Study** picker at the top. To start a run from the keyboard, press **Ctrl+Enter** (**Cmd+Enter** on a Mac). Click the back arrow to return to chat.

## Chat

Chat in the panel works like chat in the main app. See [Ask questions in chat](/chat/asking-questions). Three controls are specific to the panel:

- **Cross-reference current screen** - a checkbox below the message box. Select it before you send, and Navigator also reads the visible text of the active tab for that one message. For example: *"Does this record meet Visit 2 requirements?"*
- **Open the full Rightview app** - the arrow icon at the top. It opens Navigator in a new tab.
- **Sign out** - the icon at the top. Navigator asks **Sign out of Rightview?** Click **Sign out** to confirm. A capture in progress in the panel stops.

When an answer is a pre-screening call script, the panel shows it in sections, for example **EMR Review**, **Medication Quick Reference**, **Call Script**, **If the candidate passes**, **FAQ**, and **Sources**. You can tick the review items and questions as you go. Navigator does not save the ticks, and they reset when you open the script again.

> Do not enter protected personal or patient identifiers (PHI/PII) into chat. AI can sometimes give incorrect information. Always use your professional judgement.

## Source QC

Source QC reviews a source document against the ALCOA+ dimensions and the protocol, and flags issues such as a missing signature or field.

<video controls preload="metadata" poster="/video/source-qc-explainer-poster.jpg" style={{width: '100%', maxWidth: '840px', borderRadius: '8px'}}>
  <source src="/video/source-qc-explainer.mp4" type="video/mp4" />
</video>

<video controls preload="metadata" style={{width: '100%', maxWidth: '840px', borderRadius: '8px'}}>
  <source src="/video/source-qc-extension.mp4" type="video/mp4" />
</video>

1. Open the source document in a browser tab, for example a page in your EDC.
2. In the rail, select **Source QC** and click **Run Source QC**.
3. The extension captures the full page of the active tab. Chrome shows a "started debugging this browser" banner until the capture finishes.
4. Navigator analyzes the capture. The panel shows each finding as a **Flag** or a **Note**, or **No issues found**. Click **Run again** to repeat the run.

Navigator also saves the capture in **Visits → Source Quality Control**, where you can see all findings, add comments, and mark issues resolved. Click **Open in Rightview** to go there.

A PDF or image that you open directly in its own tab is captured as the original file, and Navigator checks every page of the PDF. For a PDF from your computer, first turn on [access to local files](#allow-access-to-local-files). Then open the PDF in a Chrome tab and run as usual. This works for Source QC, the source tab in Cross-check with EDC, and Pre-screening. If the PDF is inside another page, the extension cannot get the file, and the panel shows **This tab is a PDF**. Upload that PDF to Navigator directly.

## Cross-check with EDC

Cross-check with EDC does source data verification. It compares the values in the EDC with the source document, field by field.

1. Open the source document in one tab and the EDC form in another.
2. In the rail, select **EDC check**. The **Cross-check** view opens.
3. In **Source tab**, pick the tab with the source document. The default is the active tab, and **Use current tab** selects the tab you are on.
4. In **EDC tab (optional)**, pick the EDC form tab. The panel remembers your last EDC site. The list does not show the source tab, PDF tabs, or image tabs.
5. Click **Compare with EDC**.

To find a tab, type in **Search tabs by title or site…**. If you opened a page after the panel, click **Refresh tabs**.

Each field in the result shows its **EDC** value, its **Source** value, and a verdict:

| Verdict | Meaning |
| --- | --- |
| **Match** | The EDC value and the source value are the same. |
| **Mismatch** | The values are different. |
| **Missing in EDC** | The source has a value, but the EDC does not. |
| **Missing in source** | The EDC has a value, but the source does not. |

A summary line shows the number of fields compared, mismatches, and missing values. Navigator saves the comparison on the document's Source QC record, in the **Source data verification** section of the document in the main app. Click **Open in Rightview** to go there, or **New cross-check** to compare again.

If you set **EDC tab (optional)** to **None — just capture the source**, the button becomes **Capture source** and Navigator uploads the source for Source QC only. The panel shows **Source captured** when it is done.

## Pre-screening

Pre-screening checks a patient record against the inclusion and exclusion criteria of the selected study.

<video controls preload="metadata" poster="/video/prescreening-explainer-poster.jpg" style={{width: '100%', maxWidth: '840px', borderRadius: '8px'}}>
  <source src="/video/prescreening-explainer.mp4" type="video/mp4" />
</video>

1. Open the patient record in a browser tab, for example in your EMR. It can be a web page or a PDF. For a PDF from your computer, first turn on [access to local files](#allow-access-to-local-files). A PDF inside another page cannot be read, so open it in its own tab or upload it to Navigator.
2. In the rail, select **Screening** and click **Check eligibility**.
3. The panel shows each step and a check mark as it ends. Click **Cancel** to stop.
4. Read the result. Click **Check again** to run it again.

The verdict is decision support. It is not a determination.

### Read the result

The result shows the most important information first:

1. **The verdict:** **Likely included**, **Likely excluded**, or **More info needed**, with a count line such as *1 exclusion applies · 2 unknown · 5 passed*.
2. **A short summary.**
3. **Decides the verdict** - an inclusion criterion that is **Not met**, or an exclusion criterion that **Applies**.
4. **Needs info** - criteria the record does not answer. Each shows **Unknown** and a **Missing:** line that names the missing fact.
5. **Passed** - an inclusion that is **Met**, or an exclusion that **Does not apply**. This group is closed. Click **Passed** to open it.

Click a criterion to open its reason, the quote from the record, and the citation (document name and page). The same view shows when you open the run as a chat, in the panel or in the main app.

If the capture takes too long, the panel shows an error. Reload the record tab and try again. If the check takes too long, click **Keep waiting**.

### See the evidence on the page

Click **Show all evidence on the page** to mark the supporting text on the patient record. To mark one criterion, click the quote under it. Click **Clear marks on the page** to remove the marks. The button shows only when more than one criterion has a quote. This needs extension version 1.7.0 or later. An older version asks you to update.

### Ask follow-up questions

Click **Continue in chat** under the result to ask follow-up questions about the verdict. Each run is saved as a chat named with the study and run time, for example **Pre-screening · FLOW_NCT03819153 · Oct 12, 12:33 AM**. Open past runs from **History**.

## Invoice capture

Invoice capture reads invoice lines from a CTMS page and saves them in Finance. In the rail, select **Invoices**. For the full steps, see [Capture a CTMS page with Invoice capture](/finance/finance-desk#capture-a-ctms-page-with-invoice-capture).

## Save page

Save page saves the text of the active tab as a shared document in the study. All users with access to the study can search and cite it. Use it for study documents such as a lab manual. Do not use it for patient records. For a private file, use **+** in chat.

1. Open the page in the active tab.
2. In the panel, select **Save page** and click **Capture page**.
3. Check the title and type a document type, for example "Lab Manual".
4. Click **Save to collection**.

## Page suggestions

When a page looks like a source document, a patient record, or a CTMS invoice page, a small round logo (teal and blue, with a check mark) shows in the bottom-right corner of the page. The extension reads the page on your computer only and sends nothing to Navigator until you click the logo.

- Point at the logo to see the suggestion: **Run Source QC**, **Check eligibility**, or **Capture invoices**.
- Click the logo, or press **Alt+Shift+Y**, to open the panel and start that run for your study.
- To hide the logo on this page, point at it and click the small **X** (**Hide on this page**), or press **Esc**.
- To stop suggestions on all pages, right-click the toolbar icon and select **Pause page suggestions**. The toolbar icon then shows **OFF**. Click **Resume** at the top of the panel to start them again.

### Pages where suggestions show

A site administrator can limit suggestions for each study to the site's own systems, such as the EHR, the EDC, and the CTMS. On other pages the extension shows no suggestion and does not read the page. The list follows the study you pick in the panel. If you expect a suggestion and see none, ask your site administrator to add the page's address. See [Limit extension page suggestions](/collections/manage-collections#limit-extension-page-suggestions-site-administrators). The list does not limit captures you start yourself, such as **Use current tab** or **Save page**.

The extension suggests only the views your account can open. For example, a medical monitor never gets a Source QC or invoice suggestion. Suggestions start after you open the panel and sign in, update if your access changes, and clear when you sign out of the panel.

## Troubleshooting

- **The panel is blank or does not load chat** - Your session may have timed out. Close the panel and open it again. If the problem continues, contact your Rightview administrator.
- **A view is not in the icon rail** - An administrator did not enable that module for your site.
- **Source QC shows "This tab is a PDF"** - Upload the PDF to Navigator directly. See [Source Quality Control](/visits/overview#source-quality-control).
- **The capture fails on a local file** - See [Allow access to local files](#allow-access-to-local-files).
- **Navigator captured the wrong page** - Source QC, Pre-screening, Invoice capture, and Save page use the active tab. Make sure the correct tab is active first. Cross-check with EDC uses the tabs you select.
- **No page suggestions show** - Open the panel and sign in first. Suggestions show only for views your account can open. Also check that the toolbar icon does not show **OFF**. If you updated the extension, reload the page.
- **Cross-check with EDC shows no tabs** - Open the source and EDC pages in normal browser tabs. Click the back arrow, then select **EDC check** again.

## Allow access to local files

A tab can show a **local file**, for example a PDF, PNG, or HTML file from your computer. Its address starts with `file:///`. Chrome does not let an extension read local files until you turn on one setting for that extension. The setting is off by default, and only you can turn it on. You do not need it for web pages at `http://` or `https://`, such as your EDC or EMR.

If it is off, a capture on a local file fails or shows *"This is a local file. Turn on "Allow access to file URLs"..."*. To turn it on:

1. Open **`chrome://extensions`** (type it in the address bar).
2. Find **Rightview Navigator** and click **Details**.
3. Turn on **Allow access to file URLs**.
4. Reload the tab with your file, or close and reopen the file.

The setting stays on after updates and reinstalls. Use the same switch to turn it off.

You can also skip this setting. Open the document in a browser tab (most EDCs and EMRs show source documents on the web), or upload the file in the main app and run Source QC there. See [Source Quality Control](/visits/overview#source-quality-control).

## Related guides

- [Ask questions in chat](/chat/asking-questions)
- [Visits & Source Quality Control](/visits/overview)
- [Finance desk](/finance/finance-desk)
- [Sign in](/getting-started/sign-in)
