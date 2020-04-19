import React, { Fragment } from 'react';
import styles from './banner.scss';
import Social from '../social/social';

const Banner = ({ title, subTitle, image }) => {
    const backgroundImage = {
        backgroundImage: 'url(' + image + ')',
    };

    return <section className={styles.banner} style={backgroundImage}>
        <div className={styles.content}>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <Social />
        </div>
    </section>
};

export default Banner;