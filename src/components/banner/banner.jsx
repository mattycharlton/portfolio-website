import React, { Fragment } from 'react';
import styles from './banner.scss';
import Social from '../social/social';
import logo from '../../images/tertiary-logo.png';

const Banner = ({ title, subTitle, image }) => {
    const backgroundImage = {
        backgroundImage: 'url(' + image + ')',
    };

    const onClickScroll = (e) => {
        document.querySelector('#scroll-too').scrollIntoView({
            behavior: 'smooth'
        });
    }

    return <section className={`${styles.banner} dark`} style={backgroundImage}>
        <div className={styles.content}>
            <img src={logo}></img>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <Social theme='light' size="2x" />
            <a className={styles.scrollButton} onClick={(e) => onClickScroll()}><span></span></a>
        </div>
    </section>
};

export default Banner;