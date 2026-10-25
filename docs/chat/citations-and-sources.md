---
sidebar_position: 2
description: "Check where a chat answer came from: citation badges, the sources panel, and View Flow."
keywords: ["citation", "source", "reference", "evidence", "PubMed", "regulatory", "view sources", "view flow", "steps", "copy answer", "math"]
---

# Citations, sources, and View Flow

Each chat answer shows where it came from. Use citations to check one reference, **View Sources** to see all of them, and **View Flow** to see the steps Navigator took.

## Citations

Each chat answer includes citations. A citation points to the passage that Navigator used. Use citations to check an answer against your documents.

### Inline citation badges

A citation badge shows at the end of a paragraph or list item. The badge has a colored dot and the number of sources for that part of the answer. The color shows the source type:

- **Gray** - a passage from your study documents
- **Green** - a PI answer. It shows as **Verified response** when the PI signed it in the app, or answered by email from a confirmed email domain. Any other PI answer shows as **Response**.
- **Blue** - an external reference, for example a PubMed result
- **Amber** - a regulatory reference

A badge with more than one source type shows overlapping dots. Charts and other [visual blocks](/chat/asking-questions#charts-and-visual-blocks) carry their citation badges in the block caption.

Click a badge:

- If it has one source, the **source preview** panel opens.
- If it has more than one source, the [sources panel](#all-sources) opens.

### Source preview panel

The preview panel opens on the right. It shows:

1. The document type and the file name.
2. **Document Preview** - for a PDF, a viewer that can go to the cited page.
3. **Cited Text** - the passage that Navigator used.

To close the panel, click the **X**.

### Math in answers

Navigator shows math formulas as formatted math, for example dose calculations.

### Copy an answer with citations

Below the answer, click **Copy message**. Navigator copies the answer text and a list of its sources. The button shows **Copied**. You can paste it into notes or an email. Charts, timelines, stats, and comparisons are copied as tables.

## All sources

For each chat answer, you can open a sources panel. The panel shows every document passage, external reference, and regulatory citation that Navigator used for the answer.

### Open the sources panel

1. Find the chat answer.
2. Below the answer, click **View Sources**. The number in parentheses shows how many sources the answer used.
3. The panel opens on the right. The title shows the number of sources.

### Document cards

Each study document and PI answer shows as a card. The cards use the same labels as the **Study Documents** page:

| Card label | Meaning |
| --- | --- |
| Document type (for example **Protocol Document** or **Lab Manual**) | A passage from a shared study document |
| **Personal** | A passage from your personal document |
| **Verified response** | A PI answer signed in the app, or sent by email from a confirmed email domain |
| **Response** | Any other PI answer by email |

Each card shows the file name, the page number, and a short excerpt. Click a card to open the full preview.

### Other source groups

Other sources show in groups below the cards. A group shows only when the answer uses it.

| Group | Description |
| --- | --- |
| **Regulatory** | Regulatory or governance documents, for example ICH guidance |
| **EHR** | Data from a connected EHR system |
| **PubMed** | External PubMed search results |

Click a group header to expand or collapse it.

### When to use sources vs. inline citations

- Use an **inline citation badge** to check one reference while you read.
- Use **View Sources** to see every source of the answer.

### Close the panel

Click the **X** at the top of the panel. Your conversation does not change.

## View Flow

**View Flow** shows the steps that Navigator used to make an answer. You do not need to read technical logs.

### Watch an answer take shape

While Navigator works on an answer, a **Working** panel shows above the answer. Each step shows as a chip with a name and a short description, for example a search of the trial documents. The panel shows the number of steps.

- The current step shows a spinner.
- A completed step shows a check mark.

Navigator does not show its raw reasoning text.

When the answer is complete, the panel collapses to one line, for example **Thought for 12s**.

### Open View Flow

1. Wait until the answer is complete.
2. Below the answer, click **View Flow**. It shows next to **Copy message**, **View Sources**, and **Save**.

If **View Flow** does not show, the answer has no flow details.

### What you see

The **Analysis Flow** panel opens on the right. It can include these sections:

- **Agent Routing** - how Navigator sent your question to the correct assistant.
- **Workflow Selected** - the special workflow that Navigator used, if any.
- **Connected Systems** - the connected systems that Navigator used, if any.
- **Steps Taken** - the steps that Navigator did to make the answer.

Use View Flow to train staff, to review complex questions, or to confirm that the correct study was used.

To close the panel, click the **X**.

## Related guides

- [Ask questions in chat](/chat/asking-questions)
- [Send answers to a PI](/inbox/send-to-pi)
- [Manage collections](/collections/manage-collections)
