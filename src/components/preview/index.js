import React from 'react';
import styles from './preview.module.css';

function sanitizeOutput(input) {
  if (typeof input === 'object') {
    return JSON.stringify(input) + ' ';
  }

  return input + ' ';
}

const Preview = ({ value, error, logs }) => {
  return (
    <div className={styles.previewWrapper} id="preview">
      <h4>Output</h4>
      <div className={`${styles.preview} ${error ? styles.error : ''}`}>
        {logs.length === 0 ? (
          <pre className={styles.pre}>{JSON.stringify(value)}</pre>
        ) : null}

        <div>
          {logs.map((logArray, index) => (
            <p key={index}>
              Logger:
              {logArray.map((logItem, index) => (
                <span key={index}> {sanitizeOutput(logItem)}</span>
              ))}
            </p>
          ))}
        </div>
        {logs.length !== 0 ? (
          <pre className={styles.pre}>{JSON.stringify(value)}</pre>
        ) : null}
      </div>
    </div>
  );
};

export default Preview;
