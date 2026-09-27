---
sidebar_position: 2
---

# Allow access to local files

The extension captures the page in a browser tab. Sometimes that tab shows a **local file**, for example a PDF, PNG, or HTML file that you open from your computer. The address of a local file starts with `file:///`. Chrome does not let an extension read local files until you turn on one setting for that extension. This setting is off by default. Only you can turn it on. The extension and the Chrome Web Store cannot turn it on for you.

You do not need this setting for web pages, for example your EDC, EMR, or any page at `http://` or `https://`. Turn it on only if you want Navigator to read a file from your computer.

## The Welcome page shows the status

The first time you open the side panel, the **Welcome to Navigator** page shows the steps below. A status line below the steps tells you if file access is on or off. To see the Welcome page again, right-click the Rightview Navigator toolbar icon and select **Welcome and setup help**.

## Symptom

You start a capture on a local file, and the panel shows a message that starts with *"This is a local file. Turn on "Allow access to file URLs"..."*. Or the capture fails. The cause is that the setting is off.

## Turn it on

1. Open **`chrome://extensions`**. Type it in the address bar and press Enter.
2. Find **Rightview Navigator** and click **Details**.
3. Find **Allow access to file URLs** and turn it on.
4. Go back to the tab with your file. Reload the tab, or close the file and open it again.

The setting stays on after extension updates and after you install the extension again. To turn it off, use the same switch.

## Why Chrome asks you to do this

With file access, an extension can read files on your computer. For this reason, Chrome makes you turn it on yourself, for each extension. The Chrome Web Store cannot turn it on automatically.

## Work without file access

You do not have to open files from your computer. You can do one of these:

- **Open the document in a browser tab.** Most EDCs and EMRs show source documents on the web. These pages work without this setting.
- **Upload the file to Navigator directly** in the main app. Then run Source QC there. See [Source Quality Control](/visits/overview#source-quality-control).

## Related guides

- [Chrome side-panel extension](/extension/chrome-extension)
- [Visits & Source Quality Control](/visits/overview)
