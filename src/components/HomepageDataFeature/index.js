import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

export default function HomepageDataFeature() {
    return (
        <section className={styles.features}>
            <div className="container">
                <h1 className="col text--center">Data</h1>
                <div className="row">
                    <div className="col">
                        <CodeBlock language="jsx">
                            {`{
    "type": "manageValue",
    "data": {
        "type": "createOrModify",
        "id": "variable1"
        "value": "This is a variable!"
    }
}`}
                        </CodeBlock>
                    </div>
                    <div className={clsx("col", styles.descriptionContainer)}>
                        <p className="text--center">Through the <b>DataEngine</b> you can create variables in the frontend and manipulate them using Actions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
