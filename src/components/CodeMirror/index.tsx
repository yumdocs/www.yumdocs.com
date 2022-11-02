import React from 'react';
// import clsx from 'clsx';
import { EditorView, basicSetup } from 'codemirror';
import { linter, lintGutter } from "@codemirror/lint";
import { json, jsonParseLinter } from '@codemirror/lang-json';

import styles from './styles.module.css';

interface Props {
    height?: string;
    onChange?(e: { value: string } | undefined): void;
    value: string;
}

/**
 * Code Mirror
 * @param code
 * @param ref
 * @constructor
 */
function CodeMirror({ height = '200px', onChange = undefined, value = '{}' }: Props, ref) {
    const codeMirrorElement = React.useRef<HTMLDivElement>();
    let doc;
    try {
        doc = JSON.stringify(JSON.parse(value), null, 2); // prettify
    } catch(err) {
        doc = err.message;
    }

    const [view /*, setView */] = React.useState(
        new EditorView({
            doc,
            extensions: [
                basicSetup,
                EditorView.updateListener.of((update) => {
                    if (update.docChanged && typeof onChange === 'function') {
                        // Handle the event here
                        onChange({
                            value: update.state.doc.toString()
                        });
                    }
                }),
                json(),
                linter(jsonParseLinter()),
                lintGutter()
            ]
            // Setting parent here multiplies CodeMirror instances
            // parent: codeMirrorElement.current
        })
    );

    function setHeight(dom: HTMLElement, height: string) {
        // see https://discuss.codemirror.net/t/how-to-set-max-height-of-the-editor/2882
        // .cm-editor { height: 100% }
        // .cm-scroller { overflow: auto }
        if (dom.classList.contains('cm-editor') &&
            dom.children.length > 0 &&
            dom.children[1].classList.contains('cm-scroller')
        ) {
            dom.style.height = height;
            (dom.children[1] as HTMLElement).style.overflow = 'auto';
        }
    }

    React.useEffect(() => {
        // console.log('useEffect');
        // This ensures there is only one CodeMirror there
        if (!codeMirrorElement.current.hasChildNodes()) {
            setHeight(view.dom, height);
            codeMirrorElement.current.append(view.dom);
        }

        return () => { view.destroy() };
    }, [view]); // useEffect is bound to the state of view, to ensure only one view

    React.useImperativeHandle(ref, () => ({
        value() {
            // Without this design, view.state.doc might not be updated
            // as if changes where made on a different view
            // i.e. I could not make the following example work with onChange and useImperativeHandle
            // https://www.codiga.io/blog/implement-codemirror-6-in-react/
            return view.state.doc.toString();
        }
    }));

    return (
        <div ref={codeMirrorElement} className={styles.codeMirrorElement} />
    );
}

/**
 * Default export
 */
export default React.forwardRef(CodeMirror);