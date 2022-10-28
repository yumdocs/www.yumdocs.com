---
sidebar_position: 5
---

import TerminalWindow from '@site/src/components/TerminalWindow';
import WordWindow from '@site/src/components/WordWindow';

# ExpressJS Tutorial

> Post data to a web server to automate your Office documents.

:::tip Tip

[Download a Zip of tutorial files](./assets/05-expressjs-tutorial.zip).

:::

### Prerequisites

Download and install nodeJS v16+ from https://nodejs.org/.

:::tip Tip

run `node --version` from a terminal window to confirm installation.

:::

### Installation

Create a project directory, make it your working directory, and run from a terminal window:

<TerminalWindow>

```
npm init -y
npm i express
npm i @yumdocs/yumdocs
```

</TerminalWindow>

### Getting started

1) Create a Word document named `input.docx`, type `{{field}}` and save it in the project directory.

<WordWindow title="input.docx">
{'{{field}}'}
</WordWindow>

2) In the same project directory, create a file named `index.mjs` and copy-paste:

```js showLineNumbers title=index.mjs
import path from 'node:path';
import express from 'express';
import {YumTemplate} from '@yumdocs/yumdocs';

const INPUT = './input.docx';
const OUTPUT = './output.docx';

// Create an express app with a JSON parser
const app = express();
app.use(express.json());

// Handle posts to /yumdocs
app.post("/yumdocs", async(req, res, next) => {
    try {
        const t = new YumTemplate();
        const i = path.resolve(process.cwd(), INPUT);
        const o = path.resolve(process.cwd(), OUTPUT);
        await t.load(i);
        await t.render(req.body);
        await t.saveAs(o);
        // res.download(o);
        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
});

// Launch the web app
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

3) Open a terminal window in this project directory and run:

<TerminalWindow>

```
node index.mjs
```

</TerminalWindow>

:::tip Tip

Change the value of **"main"** for `index.mjs` in `package.json` to run `node .` instead.

:::

4) Open another terminal window (keep the server running) and run the following request to simulate a browser:

<TerminalWindow>

```text
curl -X POST http://localhost:3000/yumdocs -H 'Content-Type: application/json' -d '{"field":"Anything you see fit"}'
```

</TerminalWindow>

5) `output.docx` has been generated and the `{{field}}` placeholder has been replaced with `Anything you see fit`.

<WordWindow title="output.docx">
Anything you see fit
</WordWindow>
