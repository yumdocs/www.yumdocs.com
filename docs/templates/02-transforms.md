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