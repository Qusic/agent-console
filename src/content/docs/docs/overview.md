---
title: Overview
description: How Agent Console connects your iPhone and iPad to coding agents running on another machine.
sidebar:
  order: 1
---

Agent Console is a native iPhone and iPad client for remote AI coding agents. The agents
run on a Mac, PC, or cloud VM that has access to your project; the app gives you a view of
their sessions while you are away from that machine.

The machine does not need to be a dedicated server. An **agent host** is simply the server
process that runs there and communicates with clients such as Agent Console.

## How it fits together

1. An agent host runs coding agents and project tools on the remote machine.
2. Agent Console reaches that host [directly or through a supported cloud tunnel](../connections/).
3. The app and host communicate over the [Agent Host Protocol](../agent-host-protocol/).
4. Session state stays synchronized across connected clients.

Your project does not need to be copied to the iPhone or iPad, and Agent Console does not
operate a backend between the app and your host.

## What you can do

From Agent Console, you can:

- send tasks and follow tool activity;
- answer questions and approve actions;
- review diffs, browse files, and make edits;
- open terminals exposed by the host;
- move between hosts and synchronized sessions.

The exact agents, models, and tools available depend on the host implementation. Setup
instructions are currently available for [VS Code](../visual-studio-code/).
