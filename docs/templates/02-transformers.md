---
sidebar_position: 2
---

import ExpressionPlayground from '@site/src/components/ExpressionPlayground';
import {stringData, stringExpression} from '@site/src/data/02-transformers.ts'

# Transformers

> Learn how to use transformers in expressions.

:::tip Tip

Make sure you [understand expressions](./01-expressions.md) before experimenting with transformers.

:::

:::note About the Playground

The examples below are live to allow you to experiment.

The playground is based on [ProseMirror](https://prosemirror.net/) to edit the input template,
[CodeMirror](https://codemirror.net/) to edit json data,
[docx.js](https://docx.js.org/) to serialize the content of ProseMirror into a Word file,
and **Yumdocs** to merge this file, `input.docx` with `data.json`, and produce `output.docx`.
All these files can be downloaded by clicking the respective buttons at the bottom of the playground.

Most limitations come from the fact that ProseMirror has limited editing capabilities compared to Microsoft Word.
But note that you can modify `input.docx` in Word and run `yumdocs input.docx data.json output.docx` in a terminal window as explained in our [CLI Tutorial](../tutorials/04-cli-tutorial.md).

:::

TODO Syntax

## String

The following transformers are available on strings of characters:

| Transformer          | Description                                                            |
|----------------------|------------------------------------------------------------------------|
| `lower`              | Converts the expression before the <code>&vert;</code> to lower case   |
| `substr(start, end)` | Extracts a substring of the expression before the <code>&vert;</code>  |
| `upper`              | Converts the expression before the <code>&vert;</code> to upper case   |

<ExpressionPlayground data={stringData} expression={stringExpression} height="260px"></ExpressionPlayground>

## Boolean

<ExpressionPlayground data={stringData} expression={stringExpression} height="260px"></ExpressionPlayground>

## Number

<ExpressionPlayground data={stringData} expression={stringExpression} height="260px"></ExpressionPlayground>

## Date

<ExpressionPlayground data={stringData} expression={stringExpression} height="260px"></ExpressionPlayground>

## Array

<ExpressionPlayground data={stringData} expression={stringExpression} height="260px"></ExpressionPlayground>