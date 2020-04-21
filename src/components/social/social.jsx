import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './social.scss';

const Social = () => (
    <div className={styles.social}>
        <a className={styles.icon} target="_blank" href="https://www.instagram.com/mattycharlton_/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        <a className={styles.icon} target="_blank" href="https://www.linkedin.com/in/mattycharlton/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        <a className={styles.icon} target="_blank" href="https://twitter.com/mattycharlton_/"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
    </div>
);

export default Social;