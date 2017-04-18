import React from 'react'
import styles from './Loader.css'
const Loader = () => (
    <div className={styles.loader} >
        <svg viewBox="0 0 32 32" width="32" height="32">
            <circle id="spinner" className={styles.spinner} cx="16" cy="16" r="14" fill="none"></circle>
        </svg>
    </div>
);
export default  Loader;