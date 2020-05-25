import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './contact.scss';
import Button from '../button/button';
import Social from '../social/social';


const Contact = () => {

    return <section className={styles.section} id="scroll-too">
        <h2>Contact</h2>
        <div className={styles.content}>
            <div>
                <form action="https://getform.io/f/0134c25d-f4b8-4d60-ac09-43d822225d23" method="POST">

                    <input placeholder="Name" required type="text" name="name" />
                    <input placeholder="Email" required type="email" name="email" />
                    <textarea placeholder="How can I help?" type="text" name="message" required></textarea>
                    <button className={styles.button} type="submit">Send</button>
                </form>
            </div>
            <div className={styles.content}>
            <Social theme='dark' size="3x"/>
            </div>
        </div>
    </section>
};

export default Contact;