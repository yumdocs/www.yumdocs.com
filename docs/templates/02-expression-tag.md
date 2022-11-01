---
sidebar_position: 2
---

import YumdocsPlayground from '@site/src/components/YumdocsPlayground';
import {stringData, stringInput} from '@site/src/data/02-expression-tag.ts'

# Expression Tag

> Learn how to write Yumdocs templates with expression tags.

:::tip Tip

Make sure you [understand expressions](./01-expressions.md) before experimenting with expression tags.

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

An expression tag is simply an expression between delimiters `{{` and `}}`, i.e. `{{<expression>}}`.
The delimiters tell **Yumdocs** to evaluate the expression in-between the delimiters.
Yumdocs then replaces the expression tag, including the delimiters, with the resulting value of evaluating the expression.

In the following example, `{{person.salutation + ' ' + person.firstName|substr(0, 1) + '. ' + person.lastName|upper}}`
is replaced with `Mr J. BLOGGS`. Notice the use of the transformers `substr`and `upper`.

<YumdocsPlayground data={stringData} input={stringInput}></YumdocsPlayground>
