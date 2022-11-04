---
sidebar_position: 5
---

import YumdocsPlayground from '@site/src/components/YumdocsPlayground';
import {eachData, eachInput} from '@site/src/data/05-each-tag.ts'

# Each Tag

> Learn how to write Yumdocs templates with each tags.

:::tip Tip

Make sure you [understand expressions](./01-expressions.md) before experimenting with each tags.

:::

:::note About the Playground

The examples below are live to allow you to experiment. Most limitations come from the fact that the web editor
for `input.docx` has few capabilities compared to Microsoft Word. But note that you can download `input.docx`,
improve layouts in Word and run `yumdocs input.docx data.json output.docx` in a terminal window as explained
in our [CLI Tutorial](../tutorials/04-cli-tutorial.md).

:::

The each tag is a statement (or instruction) followed by an array between delimiters `{{` and `}}`, i.e. `{{#each <array>}}`.
In Yumdocs, statements are prefixed with a hash `#`, unless configured otherwise.
The array is a actually an expression which value is an array.
The `#each` tag is an opening tag, which requires a closing tag, i.e. `{{#endeach}}`.
Yumdocs repeats the content between the opening tag and the closing tag for each item in the array.

In the following example, `organization.members` is an array of three persons and
the expression `{{firstName + " " + lastName}}` is repeated for each person.

<YumdocsPlayground data={eachData} input={eachInput}></YumdocsPlayground>
