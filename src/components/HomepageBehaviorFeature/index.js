import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';

export default function HomepageBehaviorFeature() {
    return (
        <section className={styles.features}>
            <div className="container">
                <h1 className="col text--center">Behavior</h1>
                <div className="row">
                    <div className={clsx("col", styles.descriptionContainer)}>
                        <p className={clsx("text--center", styles.description)}>Create Actions that represent different behaviors on your app. From navigation to Widget manipulation, even API calls. They can be as complex as you need!</p>
                    </div>
                    <div className="col">
                        <CodeBlock language="jsx">
                            {`{
    "type": "navigation",
    "data": {
        "type": "deep_link",
        "value": "skima://home"
    }
}`}
                        </CodeBlock>
                    </div>
                </div>
            </div>
        </section>
    );
}
