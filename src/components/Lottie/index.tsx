import React from 'react';
// import clsx from 'clsx';
import lottie from 'lottie-web';

import styles from './styles.module.css';

interface Props {
    path: string;
}

export default function Lottie({path}: Props) {
    const lottieElement = React.useRef<HTMLDivElement>();
    React.useEffect(() => {
        lottie.loadAnimation({
            container: lottieElement.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path // the path to the animation json
        });
    });

    return (
        <div ref={lottieElement} className={styles.lottieElement} />
    );
}
