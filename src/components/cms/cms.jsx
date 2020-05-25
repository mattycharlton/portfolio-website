import React, { Fragment } from 'react';
import styles from './cms.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faPencilAlt, faServer, faHeadset} from '@fortawesome/free-solid-svg-icons';
import Button from '../button/button';
import kentico from '../../images/kentico-logo.png';
import wordpress from '../../images/wordpress-logo.png';
import drupal from '../../images/drupal-logo.png';


const CMS = () => {
    const cmsData = [drupal, wordpress, kentico];

    const contentManagementSystemsUsed = cmsData.map((cms, i) => {
        return <div key={i}>
            <img src={cms}></img>
        </div>
    });

    return <section className={styles.section} id="scroll-too">
        <h2>I'm experienced with</h2>
        <div className={styles.focusItems}>
            {contentManagementSystemsUsed}
        </div>
       {/*  <Button type='dark' label='See Skills & Experience'/> */}
    </section>
};

export default CMS;