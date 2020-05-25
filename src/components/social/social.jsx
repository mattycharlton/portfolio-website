import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './social.scss';

const Social = ({theme, size}) => (
    <div className={styles.social}>
        <a className={theme == 'light' ? styles.icon : styles.iconDark} target="_blank" href="https://www.instagram.com/mattycharlton_/"><FontAwesomeIcon icon={faInstagram} size={size} /></a>
        <a className={theme == 'light' ? styles.icon : styles.iconDark} target="_blank" href="https://www.linkedin.com/in/mattycharlton/"><FontAwesomeIcon icon={faLinkedin} size={size} /></a>
        <a className={theme == 'light' ? styles.icon : styles.iconDark} target="_blank" href="https://twitter.com/mattycharlton_/"><FontAwesomeIcon icon={faTwitter} size={size} /></a>
    </div>
);

export default Social;