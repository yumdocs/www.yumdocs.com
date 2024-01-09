---
sidebar_position: 2
---

import TerminalWindow from '@site/src/components/TerminalWindow';
import WordWindow from '@site/src/components/WordWindow';

# TypeScript Tutorial

> The [previous nodeJS tutorial](./01-nodejs-tutorial.md), but in TypeScript.

:::tip Tip

[Download a Zip of tutorial files](./assets/02-typescript-tutorial.zip).

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
npm i typescript<br/>
npm i ts-node<br/>
npm i @yumdocs/yumdocs
</TerminalWindow>

:::tip Tip

Besides transpilers, an alternative to **ts-node** on top of NodeJS, is [Deno](https://deno.land).

Also note that you do not have to install type declarations, which are packaged with @yumdocs/yumdocs. 

:::

## Getting started

1) Create a Word document named `input.docx`, type `{{field}}` and save it in the project directory.

<WordWindow title="input.docx">
{'{{field}}'}
</WordWindow>

2) In the same project directory, create a file named `index.ts` and copy-paste:

```js showLineNumbers title=index.ts
import {YumTemplate} from '@yumdocs/yumdocs';
const t = new YumTemplate();
await t.load('./input.docx');
await t.render({field: 'Anything you see fit'});
await t.saveAs('./output.docx');
```

3) In the same project directory, create a file named `tsconfig.json` and copy-paste:

```json showLineNumbers title=tsconfig.json
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "node",
    "target": "es2017"
  }
}
```

4) Open `package.json` with a text editor and add a type:

```json
{
  ...
  "type": "module",
  ...
}
```

5) Open a terminal window in this project directory and run:

<TerminalWindow>
node --loader ts-node/esm index.ts
</TerminalWindow>

6) `output.docx` has been generated and the `{{field}}` placeholder has been replaced with `Anything you see fit`.

<WordWindow title="output.docx">
Anything you see fit
</WordWindow>