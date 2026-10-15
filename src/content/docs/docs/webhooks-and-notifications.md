---
title: Notifications
description: Turn on push notifications with a compatible agent host.
sidebar:
  order: 6
---

Agent Console can register its push relay with a host that supports an optional **webhook
extension**. The host may report events while the app is disconnected. Webhooks are not
standard AHP and can serve other purposes; Agent Console currently uses them only for
push notifications and does not offer custom destinations.

## Turn on notifications

With a supported host connected, tap **Enable notifications** on its page or go to
**Settings → Hosts → [host] → Notifications**. Agree to share this device's push token and
our relay URL with that host, then allow iOS notifications if prompted. Consent is per
host; iOS permission is app-wide. If the option is missing, the connected host does not
advertise webhook support.

The host chooses which events to report and what preview to provide. It must be running
and able to reach the relay; delivery is not guaranteed. Check its documentation for
details.

## Data and control

Only enable notifications for hosts you trust. The host decides how to store or use the
information you share with it. If it sends an event to our relay, the preview may contain
session or workspace details and appear on the lock screen. The relay passes the alert to
Apple without storing the request; it does not handle the app's connection to your host.

Turning notifications off asks the host to clear its webhook when reachable, but cannot
erase information it has already stored or sent. Disabling iOS notifications stops alerts
on the device, not necessarily requests from the host. See [Privacy](../../privacy/) for
what the app and its relay receive and handle.
