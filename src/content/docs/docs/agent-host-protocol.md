---
title: Agent Host Protocol
sidebar:
  order: 2
description: How AHP defines the server/client relationship, synchronizes sessions, and negotiates compatibility.
---

The **Agent Host Protocol (AHP)** is the protocol Agent Console uses to communicate with an
agent host. It defines a server/client boundary so that the process running coding agents
can remain independent of the apps used to control them.

AHP is a public project led by Microsoft and released under the MIT License. It is an open
protocol rather than a formal standards-body specification. On the wire, AHP uses
JSON-RPC 2.0 over WebSocket.

## Agent host: the server

In AHP, the agent host is the server side of the connection. It runs on a machine with
access to the project and is responsible for:

- running and configuring coding agents;
- accessing working directories and executing tools;
- maintaining the authoritative session state;
- publishing state updates to connected clients;
- exposing supported resources such as changes, files, and terminals.

The host implementation determines which agents, models, authentication methods, and
capabilities are available.

“Server” describes the process's role in the protocol. It does not imply a dedicated
server machine: the host can run on a developer laptop, desktop, or cloud VM.

## Agent Console: a client

Agent Console is an AHP client. It renders the state published by a host and sends user
input back to it. The app can present conversations, questions, confirmations, files,
diffs, and terminals when the host exposes those capabilities.

The client does not run the agents or require a local copy of the project. Agent Console
also does not need a separate integration for every agent or model provider; it works with
the interface advertised by the host.

AHP is the client-facing synchronization layer. It does not define how a host communicates
with an agent runtime; behind that boundary, a host can use the
[Agent Client Protocol (ACP)](https://microsoft.github.io/agent-host-protocol/guide/ahp-and-acp)
or another agent-specific integration.

## Synchronized sessions

Multiple clients can connect to the same host and observe the same session state. For
state-bearing channels, the host publishes snapshots and ordered actions. Clients can
apply their own actions optimistically, then reconcile them with the authoritative order
returned by the host.

Updates made through one client are published to the others, and a reconnecting client
reconciles with the host instead of maintaining an independent copy.

In practice, a session started on the desktop can be continued on an iPhone or iPad
without transferring the project to the mobile device.

## Capabilities and portability

AHP defines the communication model, but it does not require every host to expose the same
agents or tools. A host advertises its session configuration and capabilities; the client
presents what is available.

Any host implementing a protocol version supported by Agent Console should be compatible
in principle. At present, **Visual Studio Code is the only implementation verified with
Agent Console**. This reflects the current AHP ecosystem, not a VS Code-specific dependency
in the app. See [VS Code](../visual-studio-code/) for setup instructions.

If you are building another AHP host, we would like to hear about it in
[Discussions](https://github.com/Qusic/agent-console/discussions).

## Protocol versions

Agent Console and a host negotiate a protocol version during connection. The version in
use is shown in the host detail screen.

If there is no mutually supported version, the app refuses the connection rather than
continuing with partially compatible behavior. Updating either the app or host is usually
the fix.

## Project and SDKs

The AHP project publishes a specification, source code, and SDKs for Swift, Rust,
TypeScript, Kotlin, and Go. Other clients include the command-line client
[AHPX](https://github.com/TylerLeonhardt/ahpx) and the client built into Visual Studio Code.

- [Specification and guide](https://microsoft.github.io/agent-host-protocol/)
- [Source on GitHub](https://github.com/microsoft/agent-host-protocol)
