---
sidebar_position: 2
---

import ExpressionPlayground from '@site/src/components/ExpressionPlayground';
import {stringData, stringExpression, booleanData, booleanExpression, numberData, numberExpression, dateData, dateExpression, arrayData, arrayExpression} from '@site/src/data/02-transforms.ts'

# Transforms

> Learn how to use transforms in expressions.

:::tip Tip

Make sure you [understand expressions](./01-expressions.md) before experimenting with transforms.

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

Transforms are functions which apply to expressions in tags. The syntax is `{{<statement?> <expression>|<transform(options>}}`.
Especially note the `|` between the expression and the transform. Transforms can be chained using `|`.

## String

The following transforms are available for strings of characters:

| Transform                                      | Description                            |
|------------------------------------------------|----------------------------------------|
| `lower`                                        | Converts the expression to lower case  |
| `substr(start: number, end: number)`           | Extracts a substring of the expression |
| `replace(search: string, replacement: string)` | Replaces a substring of the expression |
| `upper`                                        | Converts the expression to upper case  |

You can experiment in the following playground:

<ExpressionPlayground data={stringData} expression={stringExpression} height="260px"></ExpressionPlayground>

## Boolean

There are no transforms specifically available for booleans, but other transforms may apply, which you can experiment in the following playground:

<ExpressionPlayground data={booleanData} expression={booleanExpression} height="80px"></ExpressionPlayground>

## Number

The following transforms are available for numbers:

| Transform                                  | Description                            |
|--------------------------------------------|----------------------------------------|
| `TODO`                                     | TODO                                   |

You can experiment in the following playground:

<ExpressionPlayground data={numberData} expression={numberExpression} height="260px"></ExpressionPlayground>

## Date

The following transforms are available for dates:

| Transform                                  | Description                            |
|--------------------------------------------|----------------------------------------|
| `TODO`                                     | TODO                                   |

You can experiment in the following playground:

<ExpressionPlayground data={dateData} expression={dateExpression} height="260px"></ExpressionPlayground>

## Array

The following transforms are available for arrays:

| Transform                                  | Description                            |
|--------------------------------------------|----------------------------------------|
| `TODO`                                     | TODO                                   |

You can experiment in the following playground:

<ExpressionPlayground data={arrayData} expression={arrayExpression} height="260px"></ExpressionPlayground>