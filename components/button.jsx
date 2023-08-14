'use client';

import styles from "../style.module.scss";


export default function Button({title,handler}) {
    return (
        <button className={`${styles.form__btn} ${styles.form}`}
                type='submit'
                onClick={handler}
        >{title}</button>
    )
}