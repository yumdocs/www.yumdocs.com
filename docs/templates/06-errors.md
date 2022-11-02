---
sidebar_position: 6
---

import YumdocsPlayground from '@site/src/components/YumdocsPlayground';
import {delimitersData, delimitersInput, unknownData, unknownInput, mismatchedData, misplacedInput, misplacedData, mismatchedInput, malformedData, malformedInput} from '@site/src/data/06-errors.ts'

# Errors

> Learn how to troubleshoot errors in Yumdocs templates.

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

## Template Errors

> Template errors refer to improper syntax in templates

### Incomplete delimiters

All tags should be enclosed between the delimiters `{{` and `}}`, or those you have configured.
These are sufficiently unusual not to be expected in static content (as opposed to the dynamic tags Yumdocs processes).
The following will simply be ignored and interpreted as static text to avoid false positives:

- `{<statement? expression?>}`
- `{{<statement? expression?>} }`
- `{<statement? expression?>}}`

By design, Yumdocs is permissive and ignores without raising errors any tag in-between incomplete delimiters
as if it was intended static content, which you can experiment in the following playground:

<YumdocsPlayground data={delimitersData} input={delimitersInput} height="136px"></YumdocsPlayground>

### Unknown (or misspelled) statements

In order to make Yumdocs as configurable as possible, starting statements with `#` is only a convention,
which principally avoids collisions with json properties in expressions.
Tag statements, like `#if` and `#each` could be registered with Yumdocs under any name.
If a name is registered as a statement, it is identified as such, otherwise the name is considered an expression.
Starting object property names with `#` is
[not authorized in JavaScript](https://www.tutorialspoint.com/What-characters-are-valid-for-JavaScript-variable-names),
so an unknown or misspelled statement will raise the error `Invalid expression token: #`

<YumdocsPlayground data={unknownData} input={unknownInput} height="136px"></YumdocsPlayground>

### Missing or mismatched opening and closing tags

<YumdocsPlayground data={mismatchedData} input={mismatchedInput} height="136px"></YumdocsPlayground>

### Misplaced tags

<YumdocsPlayground data={misplacedData} input={misplacedInput} height="136px"></YumdocsPlayground>

### Malformed expressions

In the following example, `{{a b c}}` is an [expression tag](./03-expression-tag.md) containing a malformed expression.
This expression tag actually contains 3 expressions, namely `a`, `b` and `c`, which will raise an error.

In order to display `6`, an [addition](./01-expressions.md#calculations) should be used: `{{a + b + c}}`.

In order to display `123`, a [concatenation](./01-expressions.md#concatenation) should be used: `{{a + "" + b + "" + c}}`,
with `""` to prevent additions between numbers.

<YumdocsPlayground data={malformedData} input={malformedInput} height="136px"></YumdocsPlayground>

## Processing Errors

> Processing errors refer to errors that occur during merging data.

### File errors

There are 3 types of file errors which cannot be reproduced in the playground:

- A file not found (incorrect path).
- A corrupted file (the file cannot be opened by [JSZip](https://stuk.github.io/jszip/)).
- A zip file which is not an [OpenXML](http://officeopenxml.com/anatomyofOOXML.php) file (`[Content_Types].xml` is missing or malformed).

### Missing data in an expression tag

<YumdocsPlayground data={malformedData} input={malformedInput} height="136px"></YumdocsPlayground>

### Missing data in other tags (statements)

<YumdocsPlayground data={malformedData} input={malformedInput} height="136px"></YumdocsPlayground>

### Data type errors