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
provided by the host:

```text
ws://192.168.1.42:31546
```

If the URL includes query parameters, such as a connection token, paste the complete URL
exactly as provided. Use `wss://` when the host terminates TLS.

:::caution
A direct URL can contain a connection token. Treat the complete URL like a password: anyone
who has it receives whatever access the host grants. Prefer a VPN, a trusted local network,
`wss://`, or a tunnel over exposing an unencrypted WebSocket to the internet.
:::

## Cloud tunnel

A cloud tunnel gives a host behind NAT a reachable address without opening a router port.
The host registers with a tunnel provider, and Agent Console resolves the tunnel when it
connects.

Agent Console currently supports **Microsoft Dev Tunnels**. This is a transport choice,
not a requirement of AHP. Other providers are not yet integrated.

For host-specific startup and tunnel commands, see
[Setup guides](../overview/#setup-guides). Microsoft also publishes
[Dev Tunnels documentation](https://learn.microsoft.com/azure/developer/dev-tunnels/).

## Sign-ins are separate

Tunnel and agent or model access can require separate sign-ins:

- **Tunnel sign-in** lets the app list and reach tunnels owned by your provider account.
- **Agent sign-in** provides credentials requested through the host for agent or model
  access.

Whether an agent sign-in is needed depends on the host. Some hosts request model-provider
authorization through AHP, while others use credentials already configured on the host.
Even when tunnel and agent sign-ins use the same identity, they authorize different
services. Signing in to or out of one does not affect the other.

Tokens obtained through these sign-in flows are stored in the iOS Keychain and sent only
to the host or provider they belong to.

## Multiple hosts

Hosts are independent. You can add direct and tunnel connections together, then switch
between a laptop, desktop, or cloud VM from the host menu. A saved tunnel is resolved
again when connecting, so its current address does not need to be edited in the app.
