---
sidebar_position: 1
---

# Roles and permissions

Navigator uses role-based access. Your administrator assigns a role when your account is created.

## Role overview

### Site-side

| Capability | User | Medical Monitor | Site Editor | Private Editor | Site Admin |
| --- | :---: | :---: | :---: | :---: | :---: |
| Chat / ask questions | ✅ | ✅ | ✅ | ✅ | ✅ |
| View past conversations | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create / delete own artifacts | ✅ | ✅ | ✅ | ✅ | ✅ |
| Share artifacts (private / people / site) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Edit / delete any site artifact | ❌ | ❌ | ❌ | ❌ | ✅ |
| View protocols & files | ✅ | ✅ | ✅ | ✅ | ✅ |
| Upload personal documents (**Just me**) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Upload study documents (**Everyone in this trial**) | ❌ | ❌ | ✅ | ❌ | ✅ |
| Upload site-wide documents (**Everyone at my site**) | ❌ | ❌ | ❌ | ❌ | ✅ |
| Delete protocol documents | ❌ | ❌ | ✅ | Confidential only | ✅ |
| Delete own personal documents | ✅ | ✅ | ✅ | ✅ | ✅ |
| Change members of confidential documents | ❌ | ❌ | ❌ | ✅ | ❌ |
| Upload confidential documents (hidden from site admins) | ❌ | ❌ | ❌ | ✅ | ❌ |
| Restrict collection or document access | ❌ | ❌ | ❌ | ❌ | ✅ |
| Rename study collections | ❌ | ❌ | ❌ | ❌ | ✅ |
| Approve sponsor amendment schedule changes | ❌ | ❌ | ❌ | ❌ | ✅ |
| Site Insights | ❌ | ❌ | ❌ | ❌ | ✅ |
| MM inbox / send to PI | ❌ | ✅ | ❌ | ❌ | ❌ |
| Use PI contacts (Send to PI) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Add / edit / remove PI contacts (own site) | ❌ | ❌ | ❌ | ❌ | ✅ |
| Invite site users, view site capacity | ❌ | ❌ | ❌ | ❌ | ✅ |
| Finance desk: import invoiceables, run reconciliation, approve or dismiss results | ✅ | ❌ | ✅ | ✅ | ✅ |
| Finance desk: build and approve billing rules, **Sync now**, export the pilot report | ❌ | ❌ | ❌ | ❌ | ✅ |

The Finance rows apply only when your site has the Finance module. See [Finance desk](/finance/finance-desk).

### Sponsor-side

| Capability | Sponsor Admin |
| --- | :---: |
| See collections and analytics for enrolled sites and studies | ✅ |
| Stage documents and publish an amendment to enrolled sites | ✅ |
| See other sponsors' studies, or sites that are not enrolled | ❌ |
| Chat, upload, or use the main Navigator workspace | ❌ |
| Finance desk | ❌ |

## Role descriptions

### User
Standard site staff. Can chat, upload personal documents, save artifacts, and send answers to PI contacts. Adding contacts requires a site admin. Can use the Finance desk when the site has the Finance module.

### Medical Monitor
Can chat and use the **My PI Inbox** to communicate with PIs. Does not see **Visits**, **Finance**, or **Users** in the sidebar.

### Sponsor Admin
Sees only the sites and studies that an administrator enrolled for the sponsor. A site that is no longer enrolled drops out of the sponsor's views. Can stage documents and publish an amendment to the enrolled sites. Cannot use chat or upload documents in the main Navigator interface.

When a sponsor publishes an amendment, each enrolled site gets the documents as locked, sponsor-managed documents. If the amendment changes the visit schedule, Navigator stages the changes. Nothing is written to the site's CTMS until a site admin approves the changes.

### Site Editor
Manages study documents without full site-admin access. Can upload study documents, add documents to a collection, and delete protocol documents. Cannot restrict access, rename collections, add site-wide documents, view Site Insights, or invite users. A platform administrator assigns this role.

### Private Editor
Uploads and manages **confidential** documents that stay hidden from site administrators, and sets which members can see them. Can delete confidential documents only, not shared ones. Has no other site-admin powers. A platform administrator assigns this role.

### Site Admin
Full control over the site's collections, artifacts, analytics, and PI contacts. Can delete protocol documents, rename study collections, and set [collection or document access](/collections/restrict-access) from **Manage** on a study collection. Sees all collections at the site, even with access restrictions. Confidential documents from a Private Editor stay hidden from Site Admins. Approves sponsor amendment schedule changes before they go to the CTMS. On the Finance desk, approves billing rules and exports the pilot report.

## Two-factor authentication

Site Admin, Site Editor, Private Editor, Sponsor Admin, and Medical Monitor accounts require MFA at sign-in. See [Two-factor authentication (MFA)](/settings/multi-factor-authentication).

## Requesting access changes

Contact your organization's Navigator administrator or email **support@rightview.ai**.
