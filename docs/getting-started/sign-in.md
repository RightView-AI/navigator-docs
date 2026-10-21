---
sidebar_position: 1
---

# Sign in

Navigator has two sign-in methods: **magic link** (passwordless email) and **password**. Single sign-on (SSO) with your organization's account is planned for v1.2.0. See the [Roadmap](/roadmap).

![Navigator sign-in page](/img/docs/login-page.png)

## Sign in with a magic link

1. Open [sites.rightview.ai/login](https://sites.rightview.ai/login).
2. Make sure **Sign in with Magic Link** is selected.
3. Enter your work email address.
4. Click **Send sign-in link**.
5. Check your inbox for an email from **research@rightview.ai** and click the link. The link expires after 30 minutes.

If the email does not arrive, click **Didn't receive it? Send again**.

:::tip First-time users
If your account was just created, you may receive a welcome email with the same magic-link flow.
:::

## Sign in with a password

1. On the login page, click **Sign in with Password**.
2. Enter your email and password.
3. Click **Sign in**.

If you forgot your password, click **Forgot password?**. Enter your email and click **Send link**. Navigator emails a reset link that expires after 30 minutes.

:::info Two-factor authentication for privileged accounts
Privileged accounts need an extra sign-in step. These are administrator, site administrator, site editor, private editor, sponsor administrator, and medical monitor accounts. The step is a 6-digit code from an authenticator app. You enter it after your password or magic link. See [Two-factor authentication (MFA)](../settings/multi-factor-authentication.md) for setup and troubleshooting.
:::

## If your sign-in link has expired

A sign-in link works once and expires after 30 minutes. If you open an expired or used link, the page shows **Send a new link**. Enter your email and click the button. Navigator sends a new link.

## If you're asked to set a new password

Passwords expire after 90 days. An administrator can also require a reset on your account. In either case, signing in with your old password shows a **Set new password** form on the login page. Enter and confirm a new password to finish signing in. The password needs at least 8 characters, with an uppercase letter, a lowercase letter, and a number.

## Session timeout

For security, Navigator signs you out after **60 minutes of inactivity**. The login page then shows **You were signed out due to 1 hour of inactivity.** Sign in again to continue.

If the app looks signed in but actions fail, refresh the page or sign in again.

## Troubleshooting

| Issue | What to try |
| --- | --- |
| Magic link email not arriving | Check spam/junk folders. Confirm your email matches the one your admin registered. |
| Link expired | Return to the login page and request a new link. |
| Invalid email or password | Reset your password or contact **support@rightview.ai**. |
