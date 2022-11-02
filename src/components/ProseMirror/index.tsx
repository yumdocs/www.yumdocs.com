import React from 'react';
// import clsx from 'clsx';
import {EditorState} from 'prosemirror-state';
import {EditorView} from 'prosemirror-view';
import { NodeType, Schema, DOMParser as Parser} from 'prosemirror-model';
import {inputRules, wrappingInputRule, textblockTypeInputRule} from "prosemirror-inputrules"
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
 * buildInputRules
 * Note: we need to rebuild input rules to disable smart quotes
 * @see https://github.com/ProseMirror/prosemirror-example-setup/blob/master/src/inputrules.ts
 * @param schema
 */
/// A set of input rules for creating the basic block quotes, lists,
/// code blocks, and heading.
function buildInputRules(schema: Schema) {
    /// Given a list node type, returns an input rule that turns a number
    /// followed by a dot at the start of a textblock into an ordered list.
    function orderedListRule(nodeType: NodeType) {
        return wrappingInputRule(/^(\d+)\.\s$/, nodeType, match => ({order: +match[1]}),
            (match, node) => node.childCount + node.attrs.order == +match[1])
    }

    /// Given a list node type, returns an input rule that turns a bullet
    /// (dash, plush, or asterisk) at the start of a textblock into a
    /// bullet list.
    function bulletListRule(nodeType: NodeType) {
        return wrappingInputRule(/^\s*([-+*])\s$/, nodeType)
    }

    /// Given a node type and a maximum level, creates an input rule that
    /// turns up to that number of `#` characters followed by a space at
    /// the start of a textblock into a heading whose level corresponds to
    /// the number of `#` signs.
    function headingRule(nodeType: NodeType, maxLevel: number) {
        return textblockTypeInputRule(new RegExp("^(#{1," + maxLevel + "})\\s$"),
            nodeType, match => ({level: match[1].length}))
    }


    // let rules = smartQuotes.concat(ellipsis, emDash), type
    let rules = [], type
    // if (type = schema.nodes.blockquote) rules.push(blockQuoteRule(type))
    if (type = schema.nodes.ordered_list) rules.push(orderedListRule(type))
    if (type = schema.nodes.bullet_list) rules.push(bulletListRule(type))
    // if (type = schema.nodes.code_block) rules.push(codeBlockRule(type))
    if (type = schema.nodes.heading) rules.push(headingRule(type, 6))
    return inputRules({rules})
}

/**
 * ProseMirror
 * @param height
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

    const plugins = exampleSetup({schema: mySchema, menuBar: false });
    plugins[0] = buildInputRules(mySchema); // Disable smartQuotes

    const [view/*, setView*/] = React.useState<EditorView>(new EditorView(
        undefined,
        // proseMirrorElement.current,
        {
            state: EditorState.create({
                doc: Parser.fromSchema(mySchema).parse(doc),
                plugins
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