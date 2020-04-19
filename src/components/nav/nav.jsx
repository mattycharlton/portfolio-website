import React, { Fragment } from 'react';
import { A } from 'hookrouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './nav.scss';


const Nav = ({ isNavOpen, onNavChange }) => {
    const icon = isNavOpen ? faTimes : faBars;
    const navStyles = isNavOpen ? styles.navigationContainerOpen : styles.navigationContainer;
    const onMenuClick = () => onNavChange(isNavOpen ? false : true);

    return <Fragment>
        <a className={styles.menu} onClick={onMenuClick}><FontAwesomeIcon icon={icon} size="2x" /></a>
        <nav className={navStyles}>
            <ul className={styles.navigationItems}>
                <li><A onClick={onMenuClick} href="/">About</A></li>
                <li><A onClick={onMenuClick} href="/skills">Skills</A></li>
                <li><A onClick={onMenuClick} href="/contact">Contact</A></li>
            </ul>
        </nav>
    </Fragment>
};

export default Nav;