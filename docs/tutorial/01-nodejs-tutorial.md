---
sidebar_position: 1
---

# NodeJS Tutorial

> Only 5 lines of code to merge an Office document with a JSON object. 

### Prerequisites

Download and install nodeJS v16+ from https://nodejs.org/.

### Installation

Create a project directory, make it your working directory, and run:

```shell
npm init -y
npm i @yumdocs/yumdocs
```

### Getting started

1) Create a Word document named `input.docx`, type `{{dummy}}` and save it in the project directory.

2) Create a file named `index.mjs` and copy paste:

```js
import OpenXMLTemplate from '@yumdocs/yumdocs';
const t = new OpenXMLTemplate();
await t.load('./input.docx');
await t.render({dummy: 'Anything you see fit'});
await t.saveAs('./output.docx');
```

3) Run `node index.mjs`.

4) `output.docx` has been generated and the `{{dummy}}` placeholder has been replaced with `Anything you see fit`.