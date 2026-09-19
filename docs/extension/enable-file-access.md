---
sidebar_position: 2
---

# Allow access to local files

Source QC and Pre-screening act on whatever tab you have open. When that tab is a **local file** — a PNG, PDF, or HTML file you opened from your computer (its address starts with `file:///`) — Chrome blocks extensions from reading it unless you turn on one permission per extension. This is off by default for every extension, and Chrome only lets **you** turn it on; it can't be preset by the extension or the Web Store.

If you only ever work against web pages (your EDC, EMR, or anything at `http://`/`https://`), you don't need this. Turn it on when you want Navigator to read a file you've opened straight from disk.

## Symptom

You point Source QC or Pre-screening at a local file and the panel shows a message like *"This is a local file. Turn on 'Allow access to file URLs'…"*, or the capture just fails. That's this toggle being off.

## Turn it on

1. Open **`chrome://extensions`** (paste it into the address bar and press Enter).
2. Find **Rightview Navigator** and click **Details**.
3. Scroll to **Allow access to file URLs** and switch it **on**.
4. Go back to your file tab and **reload it** (or close and reopen the file) so the new permission applies.

That's it — it stays on through extension updates and reinstalls. To turn it back off, flip the same switch.

## Why Chrome makes you do this

File access lets an extension read files on your computer, so Chrome requires a deliberate, per-extension opt-in that only you can grant. There's no way to enable it automatically from the Web Store.

## Avoid it entirely

You don't have to open files from disk. Instead:

- **Open the document in a browser tab** — most EDCs and EMRs already serve source docs over the web, and those work with no extra permission.
- **Upload the file to Navigator directly** in the main app, then run Source QC there. See [Source Quality Control](/visits/overview#source-quality-control).

## Related guides

- [Chrome side-panel extension](/extension/chrome-extension)
- [Visits & Source Quality Control](/visits/overview)
