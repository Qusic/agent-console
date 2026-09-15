---
title: VS Code Agent Host
description: Start VS Code Agent Host and connect Agent Console directly or through Microsoft Dev Tunnels.
sidebar:
  order: 5
---

VS Code Agent Host is included with Visual Studio Code and verified with Agent Console.
It supports multiple agent harnesses, including GitHub Copilot and Claude; availability
depends on the installed VS Code version and account configuration. Agent Console connects
to it through the [Agent Host Protocol](../agent-host-protocol/).

:::note
Use a recent VS Code release. Agent Console negotiates protocol compatibility at
connection time, so no fixed VS Code version is documented here.
:::

## Check the available options

Make Visual Studio Code's `code` command available in your shell, then run:

```sh
code agent host --help
```

The output for your installed version lists the available host modes and options.

## Direct connection

To make the host reachable from another device on the same local network or VPN, run:

```sh
code agent host --host 0.0.0.0
```

This binds the host to all network interfaces. The host uses a connection token unless
you explicitly disable that behavior. It prints a WebSocket URL containing the token.
Use `--help` to choose a specific interface or port instead.

In Agent Console:

1. Open **Add Host**.
2. Enter a name under **Direct Connection**.
3. Paste the complete WebSocket URL.
4. Tap **Add**.

The app probes the URL before saving it. Keep the complete URL private because its token
grants access to the host.

See [Connections](../connections/#direct-websocket) for network and TLS guidance.

## Cloud tunnel

To publish the host through Microsoft Dev Tunnels, run:

```sh
code agent host --tunnel
```

Then, in Agent Console:

1. Open **Add Host**.
2. Under **Tunnel Connection**, choose **Microsoft Dev Tunnels**.
3. Sign in with the GitHub account that owns the tunnel.
4. Select the tunnel created for the agent host.

Agent Console resolves the tunnel address when it connects. Offline hosts remain visible
and can reconnect without editing a saved URL.

## Agent and tunnel accounts

The Microsoft Dev Tunnels sign-in authorizes access to the tunnel. An agent using a model
provided through GitHub Copilot can request a separate sign-in through the host. Both use
GitHub device flow, but Agent Console treats them as separate sign-ins and stores separate
tokens, even when you use the same GitHub identity.

## Protocol compatibility

If Agent Console reports an unsupported protocol version, update VS Code and try again.
The negotiated AHP version for a connected host is available in its detail screen.
