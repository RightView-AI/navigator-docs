---
sidebar_position: 2
title: Two-factor authentication (MFA)
---

# Two-factor authentication (MFA)

Administrator, editor, and medical monitor accounts need an extra sign-in step: a 6-digit code from an authenticator app. You enter it after your password or magic link. This protects the account even if someone learns the password.

:::info Who needs this
MFA applies to privileged accounts: **platform administrators**, **site administrators**, **site editors**, **private editors**, **sponsor administrators**, and **medical monitors**. Standard user accounts are not required to set it up.
:::

## Set up MFA (first sign-in)

The first time you sign in on a privileged account, Navigator walks you through setup automatically - there's nothing to find in settings ahead of time.

1. Sign in with your email and password (or magic link) as usual.
2. Navigator shows **Set up two-factor authentication**. If you don't already have an authenticator app, install one on your phone - [Google Authenticator](https://support.google.com/accounts/answer/1066447), [Microsoft Authenticator](https://www.microsoft.com/security/mobile-authenticator-app), [Authy](https://authy.com/), and [1Password](https://1password.com/) all work.
3. Open the app and choose **Add account** / **Scan QR code**, then point your camera at the QR code Navigator shows.
   - Can't scan it? Expand **Can't scan? Enter this key manually** and type the key into your app instead.
4. Type the current 6-digit code from your app into the box and click **Confirm and continue**.
5. Navigator shows **8 backup codes**. Click **Copy all codes** and save them somewhere safe - a password manager or a printed note in a secure location. Each code works once and lets you sign in if you lose access to your authenticator app.
6. Enter the current app code one more time and click **Finish sign-in**. To skip the code on this browser for 30 days, check **Trust this computer for 30 days (skip the code next time)** first.

You're enrolled - every sign-in from here on asks for a code, unless you trust the device (below).

## Sign in with MFA

Once enrolled, signing in is a two-step process:

1. Enter your email and password (or use your magic link) as usual.
2. Navigator shows **Enter your security code**. Type the current code from your authenticator app in **Authenticator or backup code**. If you don't have your phone, type one of your backup codes.
3. Click **Continue**.

### Trust this computer for 30 days

Check **Trust this computer for 30 days (skip the code next time)** before you click **Continue**. Navigator then skips the code on that browser for 30 days. Only do this on a device you control, not on a shared or public computer.

Trust ends after 30 days. It also ends if you clear the browser's cookies. When you change your password, Navigator removes trust from your other devices.

## Using backup codes

If you don't have your phone, enter one of the 8 backup codes you saved during setup in place of the 6-digit app code. Each backup code works once. You cannot get new backup codes on their own. If you are running low, ask for an MFA reset. You get 8 new codes when you set up MFA again.

## Losing access to your authenticator app

If you lose your phone and don't have your backup codes, contact your administrator or **support@rightview.ai** to have MFA reset on your account so you can enroll again.

## Reset MFA for a teammate (site administrators)

A site administrator can reset MFA for a site editor at the same site.

1. Open **Users** in the sidebar, on the **Site users** tab.
2. Find the person. If the person has MFA, a key icon (**Reset two-step verification**) shows in the row.
3. Click the icon, then click **Reset MFA**.

Navigator signs the person out everywhere and removes their trusted devices. The person sets up the authenticator app again at the next sign-in. You cannot reset your own MFA. For other roles, ask a platform administrator or **support@rightview.ai**.

## Troubleshooting

| Issue | What to try |
| --- | --- |
| "That code did not work" | Codes rotate every 30 seconds - use the newest one shown in your app, not one you copied earlier. Make sure your phone's clock is set to automatic/network time; a clock that's drifted causes valid codes to be rejected. |
| Lost phone, no backup codes | Contact your administrator or **support@rightview.ai** to reset MFA on your account. |
| Sign-in link is expired or used | On the sign-in page, click **Send a new link**. |
| Setup QR code won't scan | Expand **Can't scan? Enter this key manually** and type the key into your authenticator app instead. |
| Asked for a code again sooner than 30 days | The trusted-device cookie is per-browser and per-device - a new browser, incognito window, or clearing cookies resets it. |

## Related

- [Roles & Permissions](/reference/roles-and-permissions)
- [Account settings](/settings/account)
