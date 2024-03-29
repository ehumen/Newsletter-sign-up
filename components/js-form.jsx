'use client';

import styles from "../style.module.scss";
import {useState} from "react";
import Button from "./button";

export default function SubmitForm({onEnteringEmail, onSubscribed, state}) {
    const pattern='[a-zA-Z0-9_\\.-]*@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}';
    const [error, setError] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!state.email.match(pattern)){
            return setError(true)
        }
        state.email ? onSubscribed(): setError(true);
    }
    if (error) {
        const input = document.getElementById("email");
        input.style.backgroundColor = 'hsl(4, 100%, 95%)';
        input.style.border = '2px solid hsl(4, 100%, 67%)';
        input.style.color = 'hsl(4, 100%, 67%)';
    }
    return (
        <form onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor='email'>Email address </label>
            {error && <span className={styles.error}>Valid email required</span>}
            <input className={`${styles.form__email} ${styles.form} `}
                   type='email'
                   id='email'
                   name='email'
                   required
                   pattern='[a-zA-Z0-9_\.-]*@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}'
                   placeholder='email@company.com'
                   onInvalid={() => setError(true)}
                   onChange={e => onEnteringEmail(e.target.value)}
            />
            <Button title='Subscribe to monthly newsletter'/>
        </form>
    )
}
