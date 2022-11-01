import React from 'react';
import clsx from "clsx";
import jexl from 'jexl';
import CodeMirror from '@site/src/components/CodeMirror';

import styles from './styles.module.css';

interface Props {
    data: string;
    expression: string;
    height: string;
    title: string;
}

export default function ExpressionPlayground({
   data = '{"field":"Anything you see fit"}',
   expression = 'field',
   height = '200px',
   title = 'Expression Playground'
}: Props): JSX.Element {
    const [expValue, setExpValue] = React.useState(expression);
    let json;
    try {
        json = JSON.stringify(JSON.parse(data), null, 2); // prettify
    } catch (err) {
        json = err.message;
    }
    const [cmValue, setCmValue] = React.useState(json);
    const alertElement = React.useRef<HTMLPreElement>();
    React.useEffect(() => {
        const evaluate = async() => {
            const context = JSON.parse(cmValue);
            const val = await jexl.eval(expValue, context)
            return JSON.stringify(val, null, 2); // prettify
        }
        evaluate()
            .then((res) => {
                const {current} = alertElement;
                current.textContent = res;
                current.parentElement.classList.remove('alert--danger');
                current.parentElement.classList.add('alert--success');
            })
            .catch((err) => {
                const {current} = alertElement;
                current.textContent = err.message;
                current.parentElement.classList.remove('alert--success');
                current.parentElement.classList.add('alert--danger');
            })

        }, [expValue, cmValue]);

    return (
        <div className={styles.expressionPlayground}>
            <div className={styles.expressionPlaygroundHeader}>
                <div className={styles.buttons}>
                    <span className={styles.dot} style={{background: '#f25f58'}} />
                    <span className={styles.dot} style={{background: '#fbbe3c'}} />
                    <span className={styles.dot} style={{background: '#58cb42'}} />
                </div>
                <div className={clsx(styles.expressionPlaygroundTitle, 'text--truncate')}>
                    {title}
                </div>
                {/*
                <div className={styles.expressionPlaygroundMenuIcon}>
                  <div>
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                  </div>
                </div>
                */}
            </div>
            <div className={styles.expressionPlaygroundBody}>
                <div className={styles.expressionPlaygroundContent}>
                    <div className={styles.expressionPlayGroundSectionTitle}>Json Data:</div>
                    <CodeMirror
                        value={cmValue}
                        height={height}
                        onChange={(e: { value: string }) => { setCmValue(e.value); }} />
                    <div className={styles.expressionPlayGroundSectionTitle}>Expression:&nbsp;</div>
                    <input className={styles.expressionPlayGroundInput} type="text" value={expValue} onChange={(evt) => { setExpValue(evt.target.value); }}/>
                    <div className={styles.expressionPlayGroundSectionTitle}>Result:</div>
                    <div className={"alert alert--success"} role="alert">
                        <pre ref={alertElement} className={styles.expressionPlayGroundResult}></pre>
                    </div>
                </div>
            </div>
        </div>
    );
}