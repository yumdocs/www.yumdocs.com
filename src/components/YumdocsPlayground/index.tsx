import React from 'react';
import clsx from "clsx";
import { defaultDocxSerializer } from 'prosemirror-docx';
import { Packer } from 'docx';
import { saveAs } from 'file-saver';
import BrowserOnly from "@docusaurus/BrowserOnly";
import { YumError, YumTemplate } from '@yumdocs/yumdocs';
import CodeMirror from '@site/src/components/CodeMirror';
import ProseMirror from "@site/src/components/ProseMirror";

import styles from './styles.module.css';

interface Props {
    // children: typeof React.Children;
    height?: string;
    data: string;
    input: string;
    // title: string;
}

export default function YumdocsPlayground({
   // children,
   // expression = 'field',
   height = '200px',
   data = '{}',
   input = '<p>Hello World</p>',
   // title = 'Expression Playground'
}: Props): JSX.Element {
    const codeMirrorElement = React.useRef<typeof CodeMirror>();
    const proseMirrorElement = React.useRef<typeof ProseMirror>();
    const alertElement = React.useRef<HTMLDivElement>();
    let to;
    const clearError = () => {
        const {current} = alertElement;
        current.innerHTML = '';
        current.parentElement.style.display = 'none';
        if (to) clearTimeout(to);
    };
    const onError = (err) => {
        const {current} = alertElement;
        current.innerHTML = err instanceof YumError && err.originalError instanceof Error ?
            `${err.message}<br/>${err.originalError.message}` :
            err.message;
        current.parentElement.style.display = 'block';
        to = setTimeout(clearError, 5000);
    };
    const onInputClick = async () => {
        try {
            clearError();
            // @ts-expect-error TS2339: Property 'save' does not exist on type 'ForwardRefExoticComponent  >'.
            const input = proseMirrorElement.current.value();
            // alert(input.toString());
            // Create a doc in memory, and then write it to disk
            // @ts-expect-error TS2345: Argument of type '{}' is not assignable to parameter of type 'Options'.
            const wordDocument = defaultDocxSerializer.serialize(input, {});
            const blob = await Packer.toBlob(wordDocument);
            saveAs(blob, 'input.docx');
        } catch(err) {
            onError(err);
        }
    };
    const onDataClick = () => {
        try {
            clearError();
            // @ts-expect-error TS2339: Property 'save' does not exist on type 'ForwardRefExoticComponent  >'.
            const data = codeMirrorElement.current.value();
            // alert(data);
            const blob = new Blob([data], {type: 'application/json;charset=utf-8'});
            saveAs(blob, 'data.json');
        } catch(err) {
            onError(err);
        }
    };
    const onOutputClick = async () => {
        try {
            clearError();
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
        } catch(err) {
            onError(err);
        }
    };

    return (
        <BrowserOnly fallback={<div>Loading...</div>}>{() =>
            <div className={styles.yumdocsPlayground}>
                <div className={styles.yumdocsPlaygroundRow}>
                    <div className={styles.yumdocsPlaygroundCol}>
                        {/* Word Editor */}
                        <div className={styles.yumdocsPlaygroundWord}>
                            <div className={styles.yumdocsPlaygroundWordHeader}>
                                <div className={styles.buttons}>
                                    <span className={styles.dot} style={{background: '#f25f58'}}/>
                                    <span className={styles.dot} style={{background: '#fbbe3c'}}/>
                                    <span className={styles.dot} style={{background: '#58cb42'}}/>
                                </div>
                                <div className={clsx(styles.yumdocsPlaygroundWordTitle, 'text--truncate')}>input.docx
                                </div>
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
                                    <ProseMirror ref={proseMirrorElement} value={input} height={height}></ProseMirror>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.yumdocsPlaygroundCol}>
                        {/* JSON Editor */}
                        <div className={styles.yumdocsPlaygroundJson}>
                            <div className={styles.yumdocsPlaygroundJsonHeader}>
                                <div className={styles.buttons}>
                                    <span className={styles.dot} style={{background: '#f25f58'}}/>
                                    <span className={styles.dot} style={{background: '#fbbe3c'}}/>
                                    <span className={styles.dot} style={{background: '#58cb42'}}/>
                                </div>
                                <div className={clsx(styles.yumdocsPlaygroundJsonTitle, 'text--truncate')}>data.json
                                </div>
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
                                <div className={styles.yumdocsPlaygroundJsonContent}>
                                    <CodeMirror ref={codeMirrorElement} value={data} height={height}></CodeMirror>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.yumdocsPlaygroundRow}>
                    <div className={"alert alert--danger"} role="alert" style={{display: 'none'}}>
                        <div ref={alertElement} className={styles.expressionPlayGroundAlert}></div>
                    </div>
                </div>
                <div className={styles.yumdocsPlaygroundRow}>
                    {/* buttons */}
                    <button className={clsx("button button--secondary", styles.yumdocsPlaygroundInputButton)}
                            onClick={onInputClick}>input.docx
                    </button>
                    <button className={clsx("button button--secondary", styles.yumdocsPlaygroundDataButton)}
                            onClick={onDataClick}>data.json
                    </button>
                    <button className={clsx("button button--primary", styles.yumdocsPlaygroundOutputButton)}
                            onClick={onOutputClick}>output.docx
                    </button>
                </div>
            </div>
        }</BrowserOnly>
    );
}