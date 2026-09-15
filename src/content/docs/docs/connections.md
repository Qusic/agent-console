---
title: Connections
description: Connect Agent Console to a host directly over WebSocket or through a supported cloud tunnel.
sidebar:
  order: 3
---

Agent Console reaches a host in one of two ways. Both end with an AHP connection to the
same host; they differ in how the app reaches the machine.

| | Direct WebSocket | Cloud tunnel |
| --- | --- | --- |
| Direct route from device to host | Required | Not required |
| Works across the internet | Only if you expose it | Yes |
| Tunnel-provider sign-in | No | Yes |
| Best for | Same LAN, VPN, or an exposed VM | A machine behind NAT or changing networks |

Whichever route you use, the host process and its machine must remain running. If the
connection drops, Agent Console reconnects when the host becomes reachable again.

## Direct WebSocket

Use a direct connection when your device already has a route to the host: on the same
Wi-Fi network, through a VPN, or to a cloud VM with an open port.

In Agent Console, open **Add Host**, use **Direct Connection**, and enter the WebSocket URL
printed by the host:

```text
ws://192.168.1.42:31546?tkn=secret
```

Use `wss://` when the host terminates TLS.

:::caution
A direct URL can contain an access token; URLs printed by the current VS Code host include
one. Treat the complete URL like a password: anyone who has it receives whatever access
the host grants. Prefer a VPN, a trusted local network, `wss://`, or a tunnel over exposing
an unencrypted WebSocket to the internet.
:::

## Cloud tunnel

A cloud tunnel gives a host behind NAT a reachable address without opening a router port.
The host registers with a tunnel provider, and Agent Console resolves the tunnel when it
connects.

Agent Console currently supports **Microsoft Dev Tunnels**. This is a transport choice,
not a requirement of AHP. Other providers are not yet integrated.

For host-specific startup and tunnel commands, see
[Host setup](../overview/#host-setup). Microsoft also publishes
[Dev Tunnels documentation](https://learn.microsoft.com/azure/developer/dev-tunnels/).

## Sign-ins are separate

A tunnel and an agent can each require authentication, but they authorize different
services:

- **Tunnel sign-in** lets the app list and reach tunnels owned by your provider account.
- **Agent sign-in** supplies credentials requested by an agent through the host.

With the current VS Code and Dev Tunnels setup, both flows can display a GitHub device
code. They still use separate OAuth applications, tokens, and account bindings. Signing
out of one does not sign you out of the other.

Tokens are stored in the iOS Keychain and sent only to the host or provider they belong
to.

## Multiple hosts

Hosts are independent. You can add direct and tunnel connections together, then switch
between a laptop, desktop, or cloud VM from the host menu. A saved tunnel is resolved
again when connecting, so its current address does not need to be edited in the app.
