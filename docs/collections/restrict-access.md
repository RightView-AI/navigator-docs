---
sidebar_position: 3
---

# Restrict collection and document access

Site administrators can limit who at your site can use a study collection in chat, upload to it, or see individual documents inside it. Use this when a protocol includes sensitive appendices or when only certain roles should work with specific files.

Platform administrators and site administrators always have full visibility across collections at their site. Global administrators can manage access for any site they select.

## Open access settings

1. In the sidebar, open **Site settings** (under **Admin**).
2. Select the **Access** tab.
3. If you manage multiple sites as a global administrator, choose the **Site** from the dropdown at the top of the page.

You will see every study collection for that site in a list on the left. Each row shows whether access is open to all site users or limited to specific people.

## Set collection-level access

1. Click a collection in the list.
2. Under **Collection access**, choose one of:
   - **All site users** — anyone at the site can select this collection in chat and work with its documents.
   - **Specific users only** — check the users who should have access, then click **Save access**.
3. Users who are not on the list will not see the collection in chat or in collection lists.

Changing collection access applies to the whole study collection unless you set a different rule on individual documents.

## Set document-level access

Some files in a collection may need tighter control than the collection default.

1. With a collection selected, scroll to **Documents in collection**.
2. Find the document row and click **Edit access** (or the access label on that row).
3. Choose **All site users** to inherit the collection rule, or **Specific users only** to override with a custom list.
4. Click **Save access**.

Documents without their own override inherit whatever you configured at the collection level. The access column shows labels such as **All site users** or **Inherits collection** so you can see the effective rule at a glance.

## Set access when creating a collection

When a site administrator creates a new study collection from **Collections**, the upload flow includes an **Collection access** step before files are submitted. Choose **All site users** or **Specific users only** the same way as above so the new collection is restricted from the start.

## Tips

- Restrict at the **collection** level when an entire protocol should be limited to a small team.
- Use **document** overrides when one manual or appendix should stay private within an otherwise open collection.
- After changing access, ask affected users to refresh the app if they still see a collection they should no longer access.

## Related guides

- [Upload documents](/collections/upload-documents)
- [Manage collections](/collections/manage-collections)
- [Roles & Permissions](/reference/roles-and-permissions)
