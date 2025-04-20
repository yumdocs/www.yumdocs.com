import React, { JSX } from 'react';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
          <div className="row">
              <div className="col col--6">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                  <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                      ⏱️ 5-min Tutorials
                  </Link>
                </div>
              </div>
              <div className="col col--6">
                  <div className="lottie-wrapper">
                      <BrowserOnly>
                          {() => {
                              // It's safe to require and render Lottie here - only runs in browser
                              const Lottie = require('@site/src/components/Lottie').default;
                              const lottiePath = require('@site/static/img/lottie.png').default;
                              return <Lottie path={lottiePath} />;
                          }}
                      </BrowserOnly>
                  </div>
              </div>
          </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
        title={siteConfig.title}
        description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
