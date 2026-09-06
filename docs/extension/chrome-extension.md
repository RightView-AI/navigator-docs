---
sidebar_position: 1
---

# Chrome side-panel extension

The **Rightview Navigator** Chrome extension puts Navigator in a side panel next to whatever you're working on - your EDC, a source document, or a screening record. It's the same Navigator you use in the browser, scoped to one study collection, without switching tabs.

**Who it's for:** coordinators and other site staff who work alongside another system (EDC, EMR) and want to ask Navigator questions - or run Source QC and Pre-screening against the page in front of them - without leaving that system.

## Install

The extension is published **Unlisted** on the Chrome Web Store, so it installs like any other extension but isn't searchable.

1. Open the install link from your Rightview contact in **Google Chrome**.
2. Click **Add to Chrome**, then **Add extension** to confirm.
3. Pin it (optional): click the puzzle-piece toolbar icon, then the pin next to **Rightview Navigator**, so the icon stays visible.

It auto-updates from the Web Store - there's nothing to download or reinstall. If you don't have the link, ask your site administrator or Rightview contact.

## Open the panel and sign in

1. Click the **Rightview Navigator** toolbar icon. The panel opens on the right side of the browser window.
2. The first time, the Navigator **login form appears inside the panel**. Sign in with your existing Navigator account - the extension adds no separate account.
3. After sign-in, the panel loads chat scoped to a study collection. Use the **collection picker in the panel header** to switch collections.

The panel shares your Navigator session, so if you're already signed in on [sites.rightview.ai](https://sites.rightview.ai) it opens straight to chat. The standard **60-minute inactivity sign-out** still applies: activity in the panel keeps you signed in; 60 minutes idle logs you out and shows the login form again. This is a requirement for a PHI application and can't be extended.

## Panel views

A slim icon rail on the left of the panel switches between views. Chat is always there; **Source QC** and **Pre-screening** appear only if an administrator has enabled those modules for your site.

| View | What it does |
| --- | --- |
| **Chat** | Ask questions against the selected study collection, with citations. |
| **Source QC** | Capture the current browser page and run an ALCOA source-document quality review. |
| **Pre-screening** | Read the current page's text and check it against the study's eligibility criteria. |

## Chat

Chat works the same as in the main app - pick a collection, type a question, get an answer with numbered citations. See [Ask questions in chat](/chat/asking-questions) for the full guide.

Two things are specific to the panel:

- **Cross-reference current screen** - a checkbox below the message box. Tick it before sending and Navigator also reads the **visible text of the page you're looking at**, so you can ask things like *"Does this record meet Visit 2 requirements?"* about the page in front of you. Only the text is read, and only for that one message.
- **Open in Rightview** - opens the full Navigator app in a new browser tab when you need the sidebar, admin, or views that don't fit the panel.

> Do not enter protected personal or patient identifiers (PHI/PII) into chat. AI may occasionally generate incorrect information - use professional judgement at all times.

## Source QC

Source QC reviews a source document against the ALCOA data-quality dimensions (attributable, legible, contemporaneous, original, accurate) and flags issues such as a missing signature or field.

1. Open the source document in a browser tab (for example, a page in your EDC).
2. In the panel, switch to **Source QC** and click **Go**.
3. The extension captures the **full page** of the active tab - Chrome briefly shows a "started debugging this browser" banner while it takes the screenshot, then stops. This capture only happens when you click **Go**.
4. Navigator uploads and analyzes the capture and shows a compact result in the panel.

The captured document also lands in the main app's **Visits → Source Quality Control** view, where you can see the full per-dimension findings, comment, and mark issues resolved. Use **Open in Rightview** from the result to jump there.

**PDFs:** Chrome's built-in PDF viewer can't be captured reliably, so if the tab is a PDF the panel tells you to upload the file to Navigator directly instead. Images opened in their own tab are captured as the original file.

## Pre-screening

Pre-screening checks a potential participant's record against the selected study's eligibility criteria.

1. Open the participant record (for example, in your EMR) in a browser tab.
2. In the panel, switch to **Pre-screening** and start the run.
3. The extension reads the **text of the active tab** and Navigator checks it against the study's inclusion/exclusion criteria.
4. The panel shows a verdict - **Likely included**, **Likely excluded**, or **More info needed** - with a per-criterion breakdown.

Pre-screening reads page text only (no screenshot). As with chat, treat the verdict as decision support, not a determination.

## Troubleshooting

- **Panel is blank or won't load the chat** - your session may have timed out (60-minute idle). Reopen the panel; the login form should appear. If it still fails, your organization's setup may not be complete yet - contact your Rightview administrator.
- **No Source QC or Pre-screening icon** - those modules aren't enabled for your site. An administrator can enable them.
- **Source QC says "This is a PDF"** - upload the PDF to Navigator directly (see [Source Quality Control](/visits/overview#source-quality-control)); Chrome PDFs can't be screenshotted.
- **Wrong page captured** - Source QC and Pre-screening act on the **active tab**. Make sure the tab you want is the focused one before you click **Go**.

## Related guides

- [Ask questions in chat](/chat/asking-questions)
- [View all sources](/chat/viewing-sources)
- [Visits & Source Quality Control](/visits/overview)
- [Sign in](/getting-started/sign-in)
