import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className="indexCtas">
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Technology
          </Link>
          <Link
            className="button button--info button--lg"
            to="/gallery">
            Gallery
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="section">
          <div className="container text--center">
            <div className="row text--center">
              <div className="col col--6 col--offset-3">
                <h2>Software is beautiful!</h2>
                <div className='text--left'>
                  <p>It is said that 'beauty is in the eye of the beholder'.</p>
                  <p>As an engineer I can see the beauty in well crafted <code>code</code>.</p>
                  <p>However, the real beauty is when you, the user, get to see the code surface as a <code>button</code> that you click to submit a web form, or when see the <code>result</code> of a previously manual process.</p>
                  <p>Or, when you see the <code>code</code> displayed as a website, just like this one!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
