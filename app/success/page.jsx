'use client';

import Button from "../../components/button";
import styles from "../../style.module.scss"

export default function SuccessPage({email,dismiss}) {

    return (
        <div className={styles.success}>
            <div>
                <img src='/icon-success.svg' alt='image'/>
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <b> {email}.</b> Please open it and click the button inside to confirm
                    your
                    subscription </p>
            </div>
            <Button title={'Dismiss message'} handler={dismiss} />
        </div>
    )
}