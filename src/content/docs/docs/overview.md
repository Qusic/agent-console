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
2. Agent Console connects to the host over the [Agent Host Protocol](../agent-host-protocol/),
   [directly or through a supported cloud tunnel](../connections/).
3. Session state stays synchronized across connected clients.

Your project does not need to be copied to your iPhone or iPad.

## Setup guides

The following setups are tested with Agent Console:

- [Pi Coding Agent](../pi-coding-agent/) through the open-source `pi-ahp` host
- [VS Code Agent Host](../visual-studio-code/), included with Visual Studio Code and
  supporting multiple agent harnesses, including GitHub Copilot and Claude

Other compatible AHP hosts may also work.

## What you can do

From Agent Console, you can:

- send tasks and follow tool activity;
- answer questions and approve actions;
- review diffs, browse files, and make edits;
- open terminals exposed by the host;
- move between hosts and synchronized sessions;
- receive [notifications](../webhooks-and-notifications/) from supported hosts, if you opt in;
- open hosts, sessions, and folders with [deep links](../deep-links/).

The exact agents, models, and tools available depend on the host implementation.
