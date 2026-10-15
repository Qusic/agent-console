---
title: Privacy
description: How Agent Console handles your data and optional notifications.
---

No Agent Console account is required, and the app does not use analytics or tracking. We
do not host your agents or proxy the app's connection to your host. That connection may use a
cloud tunnel you choose, and the host may contact its configured model providers. This
statement covers Agent Console and its optional push relay; hosts and other providers
have their own data-handling practices.

## Data on your device

The app keeps saved hosts and preferences on your device. A saved direct connection
address may include a connection token. Tokens used to sign in to tunnel or agent
providers are stored in the iOS Keychain.

## Optional notifications

Notifications require a compatible host, your consent for that host, and iOS permission.
If you opt in and iOS allows notifications, the app shares this device's push token and
our relay address with the host. The host decides which events to report and what content
to include. Previews may contain session content and appear on the lock screen.

If the host sends a notification to our relay at `qusic.me`, the relay uses the request
to deliver it through Apple Push Notification service (APNs). It does not retain the
request or device token.

## Your choices

When a host is connected, you can turn off its notifications. The app asks it to remove
the webhook, but an existing registration may remain if the host cannot be reached. The
app cannot erase data the host has already retained or sent. Disabling iOS notifications
stops alerts on your device, not necessarily activity by the host.

See [Notifications](../docs/webhooks-and-notifications/) for setup and availability.
