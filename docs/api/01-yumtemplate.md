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
- a string, i.e. a local file path, but not a remote url.

:::tip http url

You can use [axios](https://github.com/axios/axios) to load a template from a remote url as follows:

```js
import axios from 'axios';
const response = await axios({
    method: 'get',
    responseType: 'blob',
    url: 'https://templates/input.docx'
});
await t.load(response.data);
```

:::

For more information about available options, refer to [zip.loadAsync](https://stuk.github.io/jszip/documentation/api_jszip/load_async.html)
since most options are forwarded, except a string is evaluated as a file path in nodeJS.

## `render(data: Object|Blob|Buffer|File|string)`

```js showLineNumbers title=index.mjs
await t.render({field: 'Anything you see fit'});
```



## `saveAs(options: Object|string)`


```js showLineNumbers title=index.mjs
await t.saveAs('./output.docx');
```