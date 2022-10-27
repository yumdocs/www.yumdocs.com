import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/easy_to_use.svg').default,
        description: (
            <>
                Yumdocs empowers your Word, PowerPoint and Excel documents with a template engine, which automatically generates Office documents with merged data.
            </>
        ),
    },
    {
        title: 'Saves Time',
        Svg: require('@site/static/img/saves_time.svg').default,
        description: (
            <>
                Yumdocs spares the chores and errors of copy-pasting and filling repetitive documents. Name the placeholders and Yumdocs does the filling.
            </>
        ),
    },
    {
        title: 'Powered by JavaScript',
        Svg: require('@site/static/img/powered_by.svg').default,
        description: (
            <>
                Yumdocs is coded, tested and packaged to run in Javascript environments including nodeJS and web browsers.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
