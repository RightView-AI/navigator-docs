---
sidebar_position: 2
title: Two-factor authentication (MFA)
---

# Two-factor authentication (MFA)

Administrator and medical monitor accounts require an extra sign-in step - a 6-digit code from an authenticator app - in addition to your password or magic link. This protects the most sensitive accounts even if a password is ever compromised.

:::info Who needs this
MFA applies to privileged accounts: **platform administrators**, **site administrators**, **sponsor administrators**, and **medical monitors**. Standard user accounts are not required to set it up.
:::

## Set up MFA (first sign-in)

The first time you sign in on a privileged account, Navigator walks you through setup automatically - there's nothing to find in settings ahead of time.

1. Sign in with your email and password (or magic link) as usual.
2. Navigator shows **Set up two-factor authentication**. If you don't already have an authenticator app, install one on your phone - [Google Authenticator](https://support.google.com/accounts/answer/1066447), [Microsoft Authenticator](https://www.microsoft.com/security/mobile-authenticator-app), [Authy](https://authy.com/), and [1Password](https://1password.com/) all work.
3. Open the app and choose **Add account** / **Scan QR code**, then point your camera at the QR code Navigator shows.
   - Can't scan it? Expand **Can't scan? Enter this key manually** and type the key into your app instead.
4. Type the current 6-digit code from your app into the box and click **Confirm and continue**.
5. Navigator shows **8 backup codes**. Click **Copy all codes** and save them somewhere safe - a password manager or a printed note in a secure location. Each code works once and lets you sign in if you lose access to your authenticator app.
6. Enter the current app code one more time and click **Finish sign-in**.

You're enrolled - every sign-in from here on asks for a code, unless you trust the device (below).

## Sign in with MFA

Once enrolled, signing in is a two-step process:

1. Enter your email and password (or use your magic link) as usual.
2. Navigator asks for your **6-digit code**. Open your authenticator app and type the current code, or use one of your saved backup codes if you don't have your phone.

### Trust this computer for 30 days

Check **Trust this computer for 30 days** before continuing and Navigator skips the code prompt on that browser for 30 days. Only do this on a device you control - a personal laptop, not a shared or public computer. Trust expires automatically after 30 days, or immediately if you sign out and clear cookies.

## Using backup codes

If you don't have your phone, enter one of the 8 backup codes you saved during setup in place of the 6-digit app code. Each backup code works exactly once. If you're running low, contact your administrator to have a fresh set generated.

## Losing access to your authenticator app

If you lose your phone and don't have your backup codes, contact your administrator or **research@rightview.ai** to have MFA reset on your account so you can enroll again.

## Troubleshooting

| Issue | What to try |
| --- | --- |
| "That code did not work" | Codes rotate every 30 seconds - use the newest one shown in your app, not one you copied earlier. Make sure your phone's clock is set to automatic/network time; a clock that's drifted causes valid codes to be rejected. |
| Lost phone, no backup codes | Contact your administrator or **research@rightview.ai** to reset MFA on your account. |
| Setup QR code won't scan | Expand **Can't scan? Enter this key manually** and type the key into your authenticator app instead. |
| Asked for a code again sooner than 30 days | The trusted-device cookie is per-browser and per-device - a new browser, incognito window, or clearing cookies resets it. |

## Related

- [Roles & Permissions](/reference/roles-and-permissions)
- [Account settings](/settings/account)
