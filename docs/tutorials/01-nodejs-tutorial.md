---
sidebar_position: 1
---

import TerminalWindow from '@site/src/components/TerminalWindow';
import WordWindow from '@site/src/components/WordWindow';

# NodeJS Tutorial

> Only 5 lines of code to merge an Office document with a JSON object.

:::tip Tip

[Download a Zip of tutorial files](./assets/01-nodejs-tutorial.zip).

::: 

## Prerequisites

Download and install nodeJS v16+ from https://nodejs.org/.

:::tip Tip

run `node --version` from a terminal window to confirm installation.

:::

## Installation

Create a project directory, make it your working directory, and run from a terminal window:

<TerminalWindow>
npm init -y<br/>
npm i @yumdocs/yumdocs
</TerminalWindow>

## Getting started

1) Create a Word document named `input.docx`, type `{{field}}` and save it in the project directory.

<WordWindow title="input.docx">
{'{{field}}'}
</WordWindow>

2) In the same project directory, create a file named `index.mjs` and copy-paste:

```js showLineNumbers title=index.mjs
import {YumTemplate} from '@yumdocs/yumdocs';
const t = new YumTemplate();
await t.load('./input.docx');
await t.render({field: 'Anything you see fit'});
await t.saveAs('./output.docx');
```

3) Open a terminal window in this project directory and run:

<TerminalWindow>
node index.mjs
</TerminalWindow>

:::tip Tip

Change the value of **"main"** for `index.mjs` in `package.json` to run `node .` instead.

:::

4) `output.docx` has been generated and the `{{field}}` placeholder has been replaced with `Anything you see fit`.

<WordWindow title="output.docx">
Anything you see fit
</WordWindow>