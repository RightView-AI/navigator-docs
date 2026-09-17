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
| Upload study documents | ✅ | ✅ | ✅ | ❌ | ✅ |
| Delete protocol documents | ❌ | ❌ | ✅ | Confidential only | ✅ |
| Upload confidential documents (hidden from site admins) | ❌ | ❌ | ❌ | ✅ | ❌ |
| Restrict collection or document access | ❌ | ❌ | ❌ | ❌ | ✅ |
| Rename study collections | ❌ | ❌ | ❌ | ❌ | ✅ |
| Site Insights | ❌ | ❌ | ❌ | ❌ | ✅ |
| MM inbox / send to PI | ❌ | ✅ | ❌ | ❌ | ❌ |
| Use PI contacts (Send to PI) | ✅ | ✅ | ✅ | ✅ | ✅ |
| Add / edit / remove PI contacts (own site) | ❌ | ❌ | ❌ | ❌ | ✅ |
| Invite site users, view site capacity | ❌ | ❌ | ❌ | ❌ | ✅ |

### Sponsor-side

| Capability | Sponsor Admin |
| --- | :---: |
| Sponsor protocols & analytics | ✅ |
| Chat, upload, or use the main Navigator workspace | ❌ |

## Role descriptions

### User
Standard site staff. Can chat, upload documents, save artifacts, and send answers to PI contacts (adding contacts requires a site admin).

### Medical Monitor
Can chat and use the **My PI Inbox** to communicate with PIs.

### Sponsor Admin
Views sponsor-level protocol lists and analytics. Cannot use chat or upload documents in the main Navigator interface.

### Site Editor
Manages study documents without full site-admin access. Can upload study documents, add documents to a collection, and delete protocol documents. Cannot restrict access, rename collections, add site-wide documents, view Site Insights, or invite users. A platform administrator assigns this role.

### Private Editor
Uploads and manages **confidential** documents that stay hidden from site administrators, and sets which members can see them. Can delete confidential documents only, not shared ones. Has no other site-admin powers. A platform administrator assigns this role.

### Site Admin
Full control over their site's collections, artifacts, analytics, and PI contacts. Can delete protocol documents, rename study collections, and set [collection or document access](/collections/restrict-access) from **Collections → Manage** on a study collection. Sees all collections at the site regardless of access restrictions. Confidential documents uploaded by a Private Editor stay hidden from Site Admins.

## Two-factor authentication

Site Admin, Site Editor, Private Editor, Sponsor Admin, and Medical Monitor accounts require MFA at sign-in. See [Two-factor authentication (MFA)](/settings/multi-factor-authentication).

## Requesting access changes

Contact your organization's Navigator administrator or email **support@rightview.ai**.
