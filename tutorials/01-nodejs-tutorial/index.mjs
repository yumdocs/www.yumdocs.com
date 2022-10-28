import {YumTemplate} from '@yumdocs/yumdocs';
const t = new YumTemplate();
await t.load('./input.docx');
await t.render({field: 'Anything you see fit'});
await t.saveAs('./output.docx');