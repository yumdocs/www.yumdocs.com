/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  minHeight: number;
  title: string;
}

export default function WordWindow({
  children,
  minHeight,
  title = 'Word',
}: Props): JSX.Element {
  return (
    <div className={styles.wordWindow} style={{minHeight}}>
      <div className={styles.wordWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{background: '#f25f58'}} />
          <span className={styles.dot} style={{background: '#fbbe3c'}} />
          <span className={styles.dot} style={{background: '#58cb42'}} />
        </div>
        <div className={clsx(styles.wordWindowTitle, 'text--truncate')}>
          {title}
        </div>
        {/*
        <div className={styles.wordWindowMenuIcon}>
          <div>
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </div>
        </div>
        */}
      </div>
      <div className={styles.wordWindowBody}>
        <div className={styles.wordWindowContent}>{children}</div>
      </div>
    </div>
  );
}
