---
sidebar_position: 1
---

# NodeJS Tutorial

> Only 5 lines of code to merge an Office document with a JSON object. 

### Prerequisites

Download and install nodeJS v16+ from https://nodejs.org/.

### Installation

Create a project directory, make it your working directory, and run from a terminal window:

```shell
npm init -y
npm i @yumdocs/yumdocs
```

### Getting started

1) Create a Word document named `input.docx`, type `{{field}}` and save it in the project directory.

2) In the same project directory, create a file named `index.mjs` and copy-paste:

```js
import {YumTemplate} from '@yumdocs/yumdocs';
const t = new YumTemplate();
await t.load('./input.docx');
await t.render({field: 'Anything you see fit'});
await t.saveAs('./output.docx');
```

3) Open a terminal window in this project directory and run `node index.mjs`.

4) `output.docx` has been generated and the `{{field}}` placeholder has been replaced with `Anything you see fit`.