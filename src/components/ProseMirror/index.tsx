import React from 'react';
// import clsx from 'clsx';
import {EditorState} from 'prosemirror-state';
import {EditorView} from 'prosemirror-view';
import {Schema, DOMParser as Parser} from 'prosemirror-model';
import {schema} from 'prosemirror-schema-basic';
import {addListNodes} from 'prosemirror-schema-list';
import {exampleSetup} from 'prosemirror-example-setup';

import 'prosemirror-view/style/prosemirror.css';
import 'prosemirror-menu/style/menu.css';
import styles from './styles.module.css';

interface Props {
    height?: '200px',
    onChange?(e:any): void;
    value: string;
}

/**
 * ProseMirror
 * @param value
 * @param onChange
 * @param ref
 * @constructor
 */
function ProseMirror({ height = '200px', onChange = undefined, value = '<p>Hello</p>' }: Props, ref) {
    // TODO height and onChange
    const proseMirrorElement = React.useRef<HTMLDivElement>();

    const mySchema = new Schema({
        nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
        marks: schema.spec.marks
    });
    const dom = new DOMParser().parseFromString(value, 'text/html');
    const state = EditorState.create({
        doc: Parser.fromSchema(mySchema).parse(dom),
        plugins: exampleSetup({schema: mySchema})
    });
    const view = new EditorView(
        proseMirrorElement.current,
        { state }
    )

    // React.useEffect(() => {});

    React.useImperativeHandle(ref, () => ({
        value() {
            // return state.doc; not updated!
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