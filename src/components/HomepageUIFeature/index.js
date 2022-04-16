import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

export default function HomepageUIFeature() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className="col text--center">User Interface</h1>
        <div className="row">
          <div className="col">
            <CodeBlock language="jsx">
              {`{
    "type": "label",
    "props": {
        "text": "Hello Skima!"
    },
    "constraints": []
}`}
            </CodeBlock>
          </div>
          <div className={clsx("col", styles.descriptionContainer)}>
            <p className="text--center">Declare all the Widgets that compose your user interface from the server. Create your custom UI library and make it Server Driven.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
