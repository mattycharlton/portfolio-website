import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './social.scss';

const Social = ({theme, size}) => (
    <div className={styles.social}>
        <a className={theme == 'light' ? styles.icon : styles.iconDark} target="_blank" href="https://www.linkedin.com/in/mattycharlton/"><FontAwesomeIcon icon={faLinkedin} size={size} /></a>
        <a className={theme == 'light' ? styles.icon : styles.iconDark} target="_blank" href="https://twitter.com/mattycharlton_/"><FontAwesomeIcon icon={faTwitter} size={size} /></a>
        <a className={theme == 'light' ? styles.icon : styles.iconDark} target="_blank" href="https://github.com/mattycharlton/"><FontAwesomeIcon icon={faGithub} size={size} /></a>
        <a className={theme == 'light' ? styles.icon : styles.iconDark} target="_blank" href="https://stackoverflow.com/users/12885512/matthew"><FontAwesomeIcon icon={faStackOverflow} size={size} /></a>
    </div>
);

export default Social;