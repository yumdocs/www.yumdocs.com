import React from 'react';
// import clsx from 'clsx';
import {EditorState} from 'prosemirror-state';
import {EditorView} from 'prosemirror-view';
import { Schema, DOMParser as Parser} from 'prosemirror-model';
import {schema} from 'prosemirror-schema-basic';
import {addListNodes} from 'prosemirror-schema-list';
import {exampleSetup} from 'prosemirror-example-setup';

import 'prosemirror-view/style/prosemirror.css';
import 'prosemirror-menu/style/menu.css';
import styles from './styles.module.css';

interface Props {
    height?: string,
    onChange?(e: {value: any}): void;
    value: string;
}

/**
 * ProseMirror
 * @param value
 * @param onChange
 * @param ref
 * @constructor
 */
function ProseMirror({ height = '200px', onChange = undefined, value = '<p>Hello World</p>' }: Props, ref) {
    const proseMirrorElement = React.useRef<HTMLDivElement>();

    // Add ordered and unordered lists
    const mySchema = new Schema({
        nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
        marks: schema.spec.marks
    });

    let doc;
    try {
        doc = new DOMParser().parseFromString(value, 'text/html');
    } catch(err) {
        doc = `<p>${err.message}</p>`
    }

    const [view/*, setView*/] = React.useState<EditorView>(new EditorView(
        undefined,
        // proseMirrorElement.current,
        {
            state: EditorState.create({
                doc: Parser.fromSchema(mySchema).parse(doc),
                plugins: exampleSetup({schema: mySchema, menuBar: false})
            }),
            // onChange event
            // https://discuss.prosemirror.net/t/event-when-editor-updated-used-to-be-onaction/607
            dispatchTransaction(tr) {
                view.updateState(view.state.apply(tr));
                if (tr.docChanged && typeof onChange === 'function') {
                    onChange({value: view.state.doc});
                }
            }
        }
    ));

    function setHeight(dom: HTMLElement, height: string) {
        if (dom.classList.contains('ProseMirror')) {
            dom.style.height = height;
            dom.style.overflow = 'auto';
        }
    }

    React.useEffect(() => {
        // console.log('useEffect');
        // This ensures there is only one ProseMirror there
        if (!proseMirrorElement.current.hasChildNodes()) {
            setHeight(view.dom, height);
            proseMirrorElement.current.append(view.dom);
        }

        return () => { view.destroy(); }
    }, [view]);

    React.useImperativeHandle(ref, () => ({
        value() {
            // Without this design, view.state.doc might not be updated
            // as if changes where made on a different view
            return view.state.doc;
        }
    }));

    return (
        <div ref={proseMirrorElement} className={styles.proseMirrorElement} />
    );
}

/**
 * Default export
 */
export default React.forwardRef(ProseMirror);