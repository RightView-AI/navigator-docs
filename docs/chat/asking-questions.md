---
sidebar_position: 1
---

# Ask questions in chat

Chat is the core of Navigator. You ask a question in plain language. Navigator searches your study documents and gives an answer with citations.

## Before you start

1. Sign in at [sites.rightview.ai](https://sites.rightview.ai).
2. In the sidebar, use the **Study collection** picker to select the protocol.
3. If no collections show, ask your site administrator to create one. See [Upload documents](/collections/upload-documents).

## Send a question

1. Click the message box at the bottom of the chat.
2. Type your question, for example: *What are the inclusion criteria for Visit 2?*
3. Press **Enter** or click the send button.

While Navigator works, a **Working** panel shows each step as a chip, for example a search of the trial documents. The chip of the current step shows a spinner. A completed step shows a check mark. See [View Flow](/chat/view-flow).

To stop the answer early, click the send button again. It now shows a stop icon.

You can type your next question while Navigator answers. Press **Enter**. The message box shows **queued**, and Navigator sends the question when the current answer ends.

The answer text shows while Navigator writes it. Answers can include tables, nested lists, formatted math formulas, and [charts and visual blocks](#charts-and-visual-blocks).

When an answer needs several searches, Navigator runs independent searches at the same time. If the model is slow to start, Navigator sends a second request and uses the first reply.

## Questions on CTMS data

Where your site connects a CTMS that supports it, chat can answer from live CTMS data. For example, ask:

- *What data queries are open for this study?*
- *Which study documents are still unsigned?*
- *Is invoice 0010000342 paid?*
- *How much have we paid subjects on this study?*

These answers are read-only. Chat does not answer or close a query, and it does not change a payment. When you select a study, chat reads only that study. To ask about another study, select it first. Invoice and payment questions need the Finance module.

If a user has limited access to studies, and Navigator cannot reach the CTMS to check a patient's study, chat does not show the EHR record of that patient. Chat says that it could not reach the CTMS.

When you ask chat to build or save a Schedule of Assessments, chat never replaces an approved schedule by itself. It asks you to confirm first.

## Charts and visual blocks

When data reads better as a picture, an answer can include a visual block. Most answers have none. A block can be:

- **Chart** - a line, bar, stacked bar, or pie chart. Hover over the chart to see the values. A pie also shows the share of each slice.
- **Timeline** - a visit schedule or study milestones. Each item can show a date, a study day, a visit window, and a status: **Done**, **Due**, **Overdue**, or **Upcoming**.
- **Stats** - two to six number tiles, for example enrolled subjects and the enrollment target.
- **Comparison** - two to four columns side by side, for example two protocols.

A block can have a title and a caption. The caption usually holds the citation for the data.

When you click **Copy message**, each block is copied as a table. See [Copy an answer with citations](/chat/viewing-citations#copy-an-answer-with-citations).

## Questions on site Insights

Site administrators can ask chat about how their site uses Navigator. Chat answers from the same data as the **Insights** page. For example, ask:

- *How many questions did coordinators ask about dosing last month?*
- *What is our escalation rate?*
- *Which studies have the most escalations?*
- *What do coordinators ask about most?*

Chat can give the number of questions asked, the number escalated to a PI, the self-service rate, the most common question types, and the main topics. You can limit a question to one study or a date range. The answer says which study and dates it covers.

Chat reads only your own site. Other users get a reply that Insights data is only available to site administrators. See [Insights & Audit Log](/admin/site-settings).

## Call scripts

Ask chat to build a pre-screening call script, for example *Create a call script for this study*. When the script is complete, it shows as an interactive view with these panels:

- **EMR Review** - a checklist for the chart review. The title shows how many items you checked, for example **EMR Review (3/12)**.
- **Medication Quick Reference** - the medication and washout tables.
- **Call Script** - the numbered phone questions. Each question has a check box and action tags, for example **Exclude**, **Washout**, **Escalate to PI**, **Request records**, **Confirm at screening**, or **Continue**.
- **If the candidate passes** - the next steps.
- **FAQ** - click a question to show the answer.
- **Sources** - the documents that the script uses.

Check a question after you ask it. Click a tag to mark the answer. When you mark an **Exclude** tag, a banner says that the candidate does not qualify and names the question. The other questions stay open.

Your check marks and tags are not saved. They reset when you open the script again. They are not copied with the script.

Navigator saves each call script as an artifact. A **Created artifact:** link shows below the answer, and the **Save** button shows **Saved**. The saved artifact opens in the same view.

## Medication pre-screening reference

Ask chat to build a medication reference for the selected study, for example *Build a medication pre-screening reference*. Use it before you schedule a candidate's screening visit. The reference has:

- The screening period, with its citation.
- **Required medications** - each drug, its generic name, its drug class, and the requirement.
- **Prohibited medications and washouts** - each drug, the rule, the washout period, and a scheduling tag. For example, **Stop ≥ 28 days before screening visit** means that the last dose must be at least 28 days before the screening visit. **Can wash out during screening** means that the washout fits in the screening period. **Confirm with PI** means that the documents do not give a washout.
- **Scheduling notes** - the drugs with the longest lead time first.
- **Sources** - the study documents that the reference uses.

All drugs, rules, and washouts come from your study documents. When the documents do not give a generic name or a drug class, Navigator looks it up on the web. A value from the web is marked with **†** and listed under **Web references**. Verify these values before you use them.

If the study documents name no required or prohibited medications, chat says so and does not build a reference.

Navigator saves each reference as an artifact, named for example **ABC-123 Medication Pre-Screening Reference**. A **Created artifact:** link shows below the answer, and the **Save** button shows **Saved**.

## Pre-screening in chat

You can ask chat to pre-screen a patient. Select the study, then describe the patient in a message. Include facts such as age, conditions, and medicines. Chat runs the same pre-screening check as the Chrome side panel. Your site needs the Pre-screening module.

The result shows in the view that [Pre-screening results](#pre-screening-results) describes. If you ask about a named subject, or ask a short follow-up, chat gives a normal text answer. If you close the tab or cancel the run, the check stops.

## Pre-screening results

When you open a pre-screening run in chat, the result shows as a short view:

1. The verdict: **Likely included**, **Likely excluded**, or **More info needed**. A line below counts the criteria, for example *1 exclusion applies · 2 unknown · 5 passed*.
2. A short summary.
3. **Decides the verdict** - the exclusions that apply and the inclusions that are not met.
4. **Needs info** - the criteria that the record does not answer. Each row shows what is **Missing**.
5. **Passed** - the criteria that the patient meets. This group is closed. Click it to open it.

Click a criterion to show or hide its reasoning, the quote from the patient record, and the protocol citation. The captured patient page shows as **Patient record captured from the page**. Click **Show captured text** to read it. To run a pre-screening, see [Pre-screening](/extension/chrome-extension#pre-screening).

## Past conversations

Navigator saves each chat in the chat history list next to the chat.

- Click a chat to open it again.
- Click **New chat** to start a new chat. You can also click **Chat** in the sidebar.
- To remove a chat, hover over it and click **Archive chat**. Then click **Delete** to confirm, or click **Cancel**. The chat no longer shows in the list.

## Follow-up questions

In the same chat, you can ask short follow-up questions. For example, after a question about inclusion criteria, ask *"What about exclusion criteria?"* Navigator uses the recent messages to understand the follow-up.

For best results:

- Stay in the **same chat** when you ask for more detail.
- Keep the **same study collection** selected.
- If a follow-up answer seems off-topic, repeat the key detail, for example the visit or the document type.

Regulatory follow-up questions can use regulatory sources and your study documents. Click **View Sources** to see every source.

## Tips for better answers

- **Be specific.** Give visit numbers, procedures, or document types.
- **Ask about one topic in each message.** Split long questions into separate messages.
- **Select the correct collection.** Answers mainly use the documents of the selected study, plus regulatory sources when necessary.

## Related guides

- [View citations](/chat/viewing-citations)
- [View all sources](/chat/viewing-sources)
- [View Flow](/chat/view-flow)
- [Save and share artifacts](/artifacts/save-and-share)
- [Tips & tricks](/getting-started/tips-and-tricks)
