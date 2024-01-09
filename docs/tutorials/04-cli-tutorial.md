---
sidebar_position: 4
---

import TerminalWindow from '@site/src/components/TerminalWindow';
import WordWindow from '@site/src/components/WordWindow';

# CLI Tutorial

> Merge Office documents with data from the command line with zero code.

:::tip Tip

[Download a Zip of tutorial files](./assets/04-cli-tutorial.zip).

:::

## Prerequisites

Download and install nodeJS v16+ from https://nodejs.org/.

:::tip Tip

run `node --version` from a terminal window to confirm installation.

:::

## Installation

Open a terminal window and run:

<TerminalWindow>
npm i -g @yumdocs/yumdocs-cli
</TerminalWindow>

## Getting started

1) Create a Word document named `input.docx`, type `{{field}}` and save it in the project directory.

<WordWindow title="input.docx">
{'{{field}}'}
</WordWindow>

2) In the same project directory, create a file named `data.json`, and copy-paste:

```json showLineNumbers title=data.json
{
  "field": "Anything you see fit"
}
```

3) Open a terminal window in the project directory and run:

<TerminalWindow>
yumdocs input.docx data.json output.docx
</TerminalWindow>

4) `output.docx` has been generated and the `{{field}}` placeholder has been replaced with `Anything you see fit`.

<WordWindow title="output.docx">
Anything you see fit
</WordWindow>