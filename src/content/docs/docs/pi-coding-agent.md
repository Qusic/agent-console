---
title: Pi Coding Agent
description: Connect Agent Console to the Pi coding agent directly or through Microsoft Dev Tunnels.
sidebar:
  order: 4
---

Agent Console connects to the [pi coding agent](https://github.com/earendil-works/pi)
through [`pi-ahp`](https://github.com/Qusic/pi-ahp), an open-source AHP host that
embeds pi. It uses your existing pi models, credentials, settings, and session
history; pi and its tools continue to run on the host.

## Install pi-ahp

`pi-ahp` requires Node.js and at least one model provider configured for pi.

```sh
npm install --global pi-ahp
```

## Direct connection

Start the host on an address reachable from your iPhone or iPad. For example, on
a trusted local network:

```sh
pi-ahp --host 0.0.0.0
```

The command prints a WebSocket URL with a generated connection token. Replace
`0.0.0.0` in that URL with the machine's LAN or VPN address, while preserving the
port and token.

In Agent Console:

1. Open **Add Host**.
2. Enter a name under **Direct Connection**.
3. Paste the complete WebSocket URL.
4. Tap **Add**.

Keep the token enabled whenever another device can reach the listener. See
[Connections](../connections/#direct-websocket) for network and security guidance.

## Cloud tunnel

For a machine behind NAT or on changing networks, `pi-ahp-tunnel` creates or
reuses a Microsoft Dev Tunnel:

```sh
devtunnel user login
pi-ahp-tunnel
```

The [`devtunnel` CLI](https://aka.ms/devtunnels/download) must be installed.
Keep `pi-ahp-tunnel` running while using the app; it owns both the host process
and tunnel connection.

Then, in Agent Console:

1. Open **Add Host**.
2. Under **Tunnel Connection**, choose **Microsoft Dev Tunnels**.
3. Sign in with the same account used by the `devtunnel` CLI.
4. Select the tunnel created by `pi-ahp-tunnel`.

The tunnel sign-in only authorizes access to the transport. pi continues to
resolve model-provider credentials from its own configuration on the host.

## Supported features

Available features depend on the installed `pi-ahp` version. See its current
[AHP support matrix](https://github.com/Qusic/pi-ahp#ahp-support).
