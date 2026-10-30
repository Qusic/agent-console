---
title: Deep Links
description: Open hosts, sessions, terminals, and folders in Agent Console from Shortcuts and other apps.
sidebar:
  order: 7
---

Agent Console opens `agent-console://` links from other apps, such as Shortcuts with its
**Open URLs** action. Links only open pages or prefilled forms; nothing is created or
changed without your confirmation. Each link has the form
`agent-console://<action>?<parameters>`:

| Action | Required | Optional | Opens |
| --- | --- | --- | --- |
| `open-host` | `host` | — | Host |
| `open-session` | `host`, `session` | — | Session |
| `open-terminal` | `host`, `terminal` | — | Terminal |
| `open-files` | `host` | `path` | File browser |
| `new-session` | `host` | `provider`, `cwd` | New Session form |
| `new-terminal` | `host` | `cwd` | New Terminal form |
| `add-host` | — | `url`, `name` | Add Host form |

- `host`: the ID of a host saved on this device.
- `session`, `terminal`: a URI assigned by the host.
- `path`, `cwd`: an absolute directory on the host, such as `/Users/me/project`,
  `C:/Users/me/project`, or a `file://` URI.
- `provider`: an agent's provider ID, shown after its name in **New Session**.
- `url`, `name`: the connection URL and name, as in **Add Host**. If the URL contains a
  connection token, treat the link like a password.

Percent-encode spaces and special characters in values, using `%20` for a space rather
than `+`. For example, this link opens **New Session** in `/Users/me/My Project`:

```text
agent-console://new-session?host=<host-id>&cwd=/Users/me/My%20Project
```

:::tip
To get IDs and URIs, touch and hold a session, terminal, folder, or a host in
**Settings**, then choose **Copy Link**. Host IDs are created on each device, so a copied
link works only on that device.
:::
