import React, { Fragment } from 'react';
import styles from './focusAreas.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faPencilAlt, faServer, faHeadset} from '@fortawesome/free-solid-svg-icons';
import Button from '../button/button';

const FocusAreas = () => {
    const focusAreasData = [
        {
            title: 'Design',
            icon: faPencilAlt,
            description: 'A passion for designing beautiful and functional applications.'
        }, {
            title: 'Build',
            icon: faCode,
            description: 'Coding clean, user-friendly & fast websites using the latest tools.'
        }, {
            title: 'Hosting',
            icon: faServer,
            description: 'Hosting your website using the best in class providers.'
        },
        {
            title: 'Support',
            icon: faHeadset,
            description: 'Providing quality website support after the inital go-live.'
        }
    ];

    const areasOfFocus = focusAreasData.map((area, i) => {
        return <div key={i}>
            <FontAwesomeIcon icon={area.icon} size="4x" />
            <h3>{area.title}</h3>
            <p>{area.description}</p>
        </div>
    });

    return <section className={styles.section} id="scroll-too">
        <h2>Specialities</h2>
        <div className={styles.focusItems}>
        {areasOfFocus}
        </div>
        <Button link='#contact-section' type='light' label='Contact me'/>
    </section>
};

export default FocusAreas;