import React from 'react';
import styles from './index.module.css'




function Button({onclick, title}) {
    return (
        <button onClick={onclick} className={styles.buttonWrapper}>{title}</button>
    );
}


export default Button;