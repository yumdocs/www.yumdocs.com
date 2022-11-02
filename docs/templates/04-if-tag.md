---
sidebar_position: 4
---

import YumdocsPlayground from '@site/src/components/YumdocsPlayground';
import {ifData, ifInput} from '@site/src/data/04-if-tag.ts'

# If Tag

> Learn how to write Yumdocs templates with if tags.

:::tip Tip

Make sure you [understand expressions](./01-expressions.md) before experimenting with if tags.

:::

:::note About the Playground

The examples below are live to allow you to experiment.

The playground is based on [ProseMirror](https://prosemirror.net/) to edit the input template,
[CodeMirror](https://codemirror.net/) to edit json data,
[docx.js](https://docx.js.org/) to serialize the content of ProseMirror into a Word file,
and **Yumdocs** to merge this file, `input.docx` with `data.json`, and produce `output.docx`.
All these files can be downloaded by clicking the respective buttons at the bottom of the playground.

Most limitations come from the fact that ProseMirror has limited editing capabilities compared to Microsoft Word.
But note that you can modify `input.docx` in Word and run `yumdocs input.docx data.json output.docx`
in a terminal window as explained in our [CLI Tutorial](../tutorials/04-cli-tutorial.md).

:::

The if tag is a statement (or instruction) followed by a condition, i.e. `{{#if <condition>}}`.
In Yumdocs, statements are prefixed with a hash `#`. The condition is an expression which value is truthy or falsy
(for example, 1 is truthy and 0 is falsy. Also empty strings are falsy whereas non-empty strings are truthy).
The `#if` tag is an opening tag, which requires a closing tag, i.e. `{{#endif}}`.
Yumdocs includes the content between the opening tag and the closing tag if the condition is met.
If the condition is not met, the content is discarded.

The if tag is also associated with an optional tag, i.e. {{#else}},
which allows for alternate content if the condition is not met. 

Considering the condition `year3 > year2` is met in the following example,
`We are doing great!`is included and `We should improve!` is discarded.

<YumdocsPlayground data={ifData} input={ifInput}></YumdocsPlayground>
