---
sidebar_position: 1
---

# YumTemplate

> YumTemplate is the main entry point to Yumdocs

A typical use involves the following:

```js showLineNumbers title=index.mjs
import {YumTemplate} from '@yumdocs/yumdocs';
const t = new YumTemplate();
await t.load('./input.docx');
await t.render({field: 'Anything you see fit'});
await t.saveAs('./output.docx');
```
For more advanced uses, requiring custom configuration, [check extensions](../extensions/01-design.md).

## `constructor(options: Object)`

After importing YumTemplate, you first need to create a new instance, as in:

```js showLineNumbers title=index.mjs
const t = new YumTemplate();
```

You can pass an options object to set tag delimiters and locale. 

```js showLineNumbers title=index.mjs
const t = new YumTemplate({
    delimiters: {
        start: '{',
        end: '}'
    },
    locale: 'fr-FR'
});
```

The default options are:

```js showLineNumbers title=index.mjs
{
    delimiters: {
        start: '{{',
        end: '}}'
    },
    locale: 'en-US'
}
```

## `load(template: Blob|Buffer|File|string)`

Then you need to load your Microsoft Office template, as in:

```js showLineNumbers title=index.mjs
await t.load('./input.docx');
```

A template can be loaded from:

- a [Blob object](https://developer.mozilla.org/en-US/docs/Web/API/Blob),
- a [nodeJS Buffer](https://nodejs.org/api/buffer.html),
- a [File object](https://developer.mozilla.org/en-US/docs/Web/API/File), or
- a string, i.e. a url starting with http(s):// or a file path.

## `render(data: Object|Blob|Buffer|File|string)`

```js showLineNumbers title=index.mjs
await t.render({field: 'Anything you see fit'});
```



## `saveAs(options: Object|string)`


```js showLineNumbers title=index.mjs
await t.saveAs('./output.docx');
```