'use client';

import styles from '../style.module.scss'
import SubmitForm from "../components/js-form";
import {useReducer} from "react";
import reducer from "./reducer";
import SuccessPage from "./success/page";

const initialState = {
    email: '',
    isValid: false,
    subscribe: false
}
export default function Page() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleEmail(text) {
        dispatch({
            type: 'newEmail',
            email: text
        });
    }

    const refresh = () => {
        dispatch(
            {
                type: 'refresh',
                unSubscribe: false,
            }
        )
    }
    const handleSubscribe = () => {
        dispatch(
            {
                type: 'subscribed',
                subscribe: true,
            }
        )
    }

    if (state.subscribe) {
        return <SuccessPage email={state.email} dismiss={refresh}/>
    } else
        return (
            <main className={styles.mainBlock}>

                    <picture className={styles.picture}>
                        <source srcSet='/illustration-sign-up-mobile.svg' media="(max-width: 375px)"/>
                        <img src="/illustration-sign-up-desktop.svg" alt="picture"/>
                    </picture>

                <div className={styles.formBlock}>
                    <h1> Stay updated!</h1>

                    <p>Join 60,000+ product managers receiving monthly updates on:</p>

                    <ul className={styles.list}>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>
                    <SubmitForm
                        onEnteringEmail={handleEmail}
                        onSubscribed={handleSubscribe}
                        state={state}
                    />
                </div>
            </main>
        )
}

