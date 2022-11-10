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

| Transform                              | Description                                                                               |
|----------------------------------------|-------------------------------------------------------------------------------------------|
| `format(fmt: string, locale?: string)` | Formats a number according to a pattern and an ISO [locale](../extensions/04-cultures.md) |

The patterns available for `fmt` are:

| Pattern | Description                                                                                                                                                 |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `n#`    | Formats a number with `#` decimals (by default, 2) based on designated locale, e.g. format("n2", "fr-FR") for 2 decimals in French.                         |
| `c#`    | Formats a number as a **currency** with `#` decimals (by default, 2) based on designated locale, e.g. `format("c4", "ja-JP")` for 4 decimals in Japanese.   |
| `p#`    | Formats a number as a **percentage** with `#` decimals (by default, 2) based on designated locale, e.g. `format("p0", "es-ES")` for 0 decimals in Spanish.  |
| `e#`    | Formats a number as an **exponential** with `#` decimals (by default, 2) based on designated locale, e.g. `format("e2", "de-DE")` for 2 decimals in German. |

Custom patterns can be composed with placeholders, like in Microsoft Excel:

| Placeholder | Description                                                                             |
|-------------|-----------------------------------------------------------------------------------------|
| `0`         | A digit placeholder, where zero is displayed by default.                                |
| `#`         | A digit placeholder, where nothing is displayed by default.                             |
| `.`         | The decimal placeholder, which will be converted in non-US locales.                     |
| `,`         | The thousand placeholder, which will be converted in non-US locales.                    |
| `$`         | The currency placeholder, which will be converted in non-US locales.                    |
| `e`         | The exponential placeholder.                                                            |
| `;`         | The section separator, for formatting respectively positive, negative and zero numbers. |

For example, `On sale for $0.00`. You can experiment in the following playground:

<ExpressionPlayground data={numberData} expression={numberExpression} height="100px"></ExpressionPlayground>

## Date

The following transforms are available for dates:

| Transform                              | Description                                                                             |
|----------------------------------------|-----------------------------------------------------------------------------------------|
| `format(fmt: string, locale?: string)` | Formats a data according to a pattern and an ISO [locale](../extensions/04-cultures.md) |

The patterns available for `fmt` are:

| Pattern    | Description                                                                |
|------------|----------------------------------------------------------------------------|
| `d`        | The short date pattern, like in 10/6/2000.                                 |
| `D`        | The long date pattern, like in Monday, November 06, 2000.                  |
| `F`        | The long date/time pattern, like in Monday, November 06, 2000 12:00:00 AM. |
| `g`        | The general date/time pattern, like in 11/6/2000 12:00 AM.                 |
| `G`        | The general date/time pattern with seconds, like in 11/6/2000 12:00:00 AM. |
| `M` or `m` | The month/day pattern, like in November 06.                                |
| `t`        | The short time pattern, like in 2:30 PM.                                   |
| `T`        | The long time pattern, like in 2:30:45 PM.                                 |
| `s`        | The universal sortable local pattern, like in 2000-11-06 00:00:00.         |
| `u`        | The universal sortable utc pattern, like in 2000-11-06 00:00:00Z.          |
| `Y` or `y` | The year/month pattern, like in November, 2000.                            |

Custom patterns can be composed with placeholders, like in Microsoft Excel:

| Placeholder | Description                                                                        |
|-------------|------------------------------------------------------------------------------------|
| `d`         | A placeholder for the day of the month from 1 to 31.                               |
| `dd`        | A placeholder for the day of the month from 01 to 31.                              |
| `ddd`       | A placeholder for the abbreviated name of the day.                                 |
| `dddd`      | A placeholder for the full name of the day.                                        |
| `f`         | A placeholder for the tenths of a second in a date and time value.                 |
| `ff`        | A placeholder for the hundredths of a second in a date and time value.             |
| `fff`       | A placeholder for the milliseconds in a date and time value.                       |
| `M`         | A placeholder for the month, from 1 through 12.                                    |
| `MM`        | A placeholder for the month, from 01 through 12.                                   |
| `MMM`       | A placeholder for the abbreviated name of the month.                               |
| `MMMM`      | A placeholder for the full name of the month.                                      |
| `h`         | A placeholder for the hour, using a 12-hour clock from 1 to 12.                    |
| `hh`        | A placeholder for the hour, using a 12-hour clock from 01 to 12.                   |
| `H`         | A placeholder for the hour, using a 24-hour clock from 1 to 23.                    |
| `HH`        | A placeholder for the hour, using a 24-hour clock from 01 to 23.                   |
| `m`         | A placeholder for the minute, from 0 through 59.                                   |
| `mm`        | A placeholder for the minute, from 00 through 59.                                  |
| `s`         | A placeholder for the second, from 0 through 59.                                   |
| `ss`        | A placeholder for the second, from 00 through 59.                                  |
| `tt`        | A placeholder for the AM/PM designator.                                            |
| `yy`        | A placeholder for the last two characters from the year value.                     |
| `yyyy`      | A placeholder for the year full value.                                             |
| `zzz`       | A placeholder for the local timezone when using formats to parse UTC date strings. |

For example, `dd MMM yyyy`. You can experiment in the following playground:

<ExpressionPlayground data={dateData} expression={dateExpression} height="100px"></ExpressionPlayground>

## Array

The following transforms are available for arrays:

| Transform                                        | Description                                                                               |
|--------------------------------------------------|-------------------------------------------------------------------------------------------|
| `join(separator?: string)`                       | Concatenates the items in the array, separated by a separator like a comma.               |
| `orderBy(expression: string, reverse?: boolean)` | Sorts the items of an array of objects according to the property specified in expression. |

You can experiment in the following playground:

<ExpressionPlayground data={arrayData} expression={arrayExpression} height="260px"></ExpressionPlayground>