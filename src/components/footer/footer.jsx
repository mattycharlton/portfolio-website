import React, { Component, Fragment } from 'react';
import styles from './footer.scss';
import logo from '../../images/secondary-logo-full.png';

const Footer = () => (
    <footer className={styles.footer}>
        <p>2020 © Designed & Developed by Matty. Built using React. Hosted on AWS.</p>
        <img src={logo}></img>
    </footer>
);

export default Footer;