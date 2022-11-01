import React from 'react';
import clsx from "clsx";
import { defaultDocxSerializer } from 'prosemirror-docx';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import { YumTemplate } from '@yumdocs/yumdocs';
import CodeMirror from '@site/src/components/CodeMirror';
import ProseMirror from "@site/src/components/ProseMirror";

import styles from './styles.module.css';

interface Props {
    // children: typeof React.Children;
    height?: string;
    json: string;
    word: string;
    // title: string;
}

export default function YumdocsPlayground({
   // children,
   // expression = 'field',
   height = '200px',
   json = '{}',
   word = '<p>Hello World</p>',
   // title = 'Expression Playground'
}: Props): JSX.Element {
    const codeMirrorElement = React.useRef<typeof CodeMirror>();
    const proseMirrorElement = React.useRef<typeof ProseMirror>();
    const alertElement = React.useRef<HTMLPreElement>();

    const onInputClick = async () => {
        // @ts-expect-error TS2339: Property 'save' does not exist on type 'ForwardRefExoticComponent  >'.
        const input = proseMirrorElement.current.value();
        // alert(input.toString());
        // Create a doc in memory, and then write it to disk
        // @ts-expect-error TS2345: Argument of type '{}' is not assignable to parameter of type 'Options'.
        const wordDocument = defaultDocxSerializer.serialize(input, {});
        const blob = await Packer.toBlob(wordDocument);
        saveAs(blob, 'input.docx');
    };
    const onDataClick = () => {
        // @ts-expect-error TS2339: Property 'save' does not exist on type 'ForwardRefExoticComponent  >'.
        const data = codeMirrorElement.current.value();
        // alert(data);
        const blob = new Blob([data], {type: 'application/json;charset=utf-8'});
        saveAs(blob, 'data.json');
    };
    const onOutputClick = async () => {
        // @ts-expect-error TS2339: Property 'save' does not exist on type 'ForwardRefExoticComponent  >'.
        const input = proseMirrorElement.current.value();
        // @ts-expect-error TS2339: Property 'save' does not exist on type 'ForwardRefExoticComponent  >'.
        const data = codeMirrorElement.current.value();
        // @ts-expect-error TS2345: Argument of type '{}' is not assignable to parameter of type 'Options'.
        const wordDocument = defaultDocxSerializer.serialize(input, {});
        const blob = await Packer.toBlob(wordDocument);
        const doc = new YumTemplate();
        // @ts-expect-error
        await doc.load(blob);
        await doc.render(JSON.parse(data));
        await doc.saveAs('output.docx');
    };

    return (
        <div className={styles.yumdocsPlayground}>
            <div className={styles.yumdocsPlaygroundRow}>
                <div className={styles.yumdocsPlaygroundCol}>
                    {/* Word Editor */}
                    <div className={styles.yumdocsPlaygroundWord}>
                        <div className={styles.yumdocsPlaygroundWordHeader}>
                            <div className={styles.buttons}>
                                <span className={styles.dot} style={{background: '#f25f58'}} />
                                <span className={styles.dot} style={{background: '#fbbe3c'}} />
                                <span className={styles.dot} style={{background: '#58cb42'}} />
                            </div>
                            <div className={clsx(styles.yumdocsPlaygroundWordTitle, 'text--truncate')}>input.docx</div>
                            {/*
                            <div className={styles.yumdocsPlaygroundWordMenuIcon}>
                              <div>
                                <span className={styles.bar} />
                                <span className={styles.bar} />
                                <span className={styles.bar} />
                              </div>
                            </div>
                            */}
                        </div>
                        <div className={styles.yumdocsPlaygroundWordBody}>
                            <div className={styles.yumdocsPlaygroundWordContent}>
                                <ProseMirror ref={proseMirrorElement} value={'<p>More Info</p>'}></ProseMirror>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.yumdocsPlaygroundCol}>
                    {/* JSON Editor */}
                    <div className={styles.yumdocsPlaygroundJson}>
                        <div className={styles.yumdocsPlaygroundJsonHeader}>
                            <div className={styles.buttons}>
                                <span className={styles.dot} style={{background: '#f25f58'}} />
                                <span className={styles.dot} style={{background: '#fbbe3c'}} />
                                <span className={styles.dot} style={{background: '#58cb42'}} />
                            </div>
                            <div className={clsx(styles.yumdocsPlaygroundJsonTitle, 'text--truncate')}>data.json</div>
                            {/*
                            <div className={styles.yumdocsPlaygroundMenuIcon}>
                              <div>
                                <span className={styles.bar} />
                                <span className={styles.bar} />
                                <span className={styles.bar} />
                              </div>
                            </div>
                            */}
                        </div>
                        <div className={styles.yumdocsPlaygroundJsonBody}>
                            <div className={styles.yumdocsPlaygroundContent}>
                                <CodeMirror ref={codeMirrorElement} value={'{"name": "John"}'}></CodeMirror>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.yumdocsPlaygroundRow}>
                <div className={"alert alert--success"} role="alert">
                    <pre ref={alertElement} className={styles.expressionPlayGroundAlert}></pre>
                </div>
            </div>
            <div className={styles.yumdocsPlaygroundRow}>
                {/* buttons */}
                <button className="button button--secondary" onClick={onInputClick}>input.docx</button>
                <button className="button button--secondary" onClick={onDataClick}>data.json</button>
                <button className="button button--primary" onClick={onOutputClick}>output.docx</button>
            </div>
        </div>
    );
}