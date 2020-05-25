import React, { Fragment, useEffect, useState } from 'react';
import { A } from 'hookrouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './nav.scss';
import { faBluetooth } from '@fortawesome/free-brands-svg-icons';


const Nav = ({ isNavOpen, onNavChange }) => {
    const icon = isNavOpen ? faTimes : faBars;
    const navStyles = isNavOpen ? styles.navigationContainerOpen : styles.navigationContainer;
    const onMenuClick = () => onNavChange(isNavOpen ? false : true);
    //const [menuStyle, setMenuStyle] = useState(styles.menuLight);
/* 
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const navIcon = document.querySelector('#menu-button').getBoundingClientRect();
        window.addEventListener('scroll', function(e) {
            sections.forEach(section => {
                const sectionOffset = section.getBoundingClientRect();
                const position = sectionOffset.top - window.scrollY;
                
                if (position < navIcon.top && position + section.offsetHeight > 0){
                    section.classList.contains('light') ? setMenuStyle(styles.menuDark) : setMenuStyle(styles.menuLight);
                }
            })
          });
    }); */

    return <Fragment>
        <a className={styles.menu} id='menu-button' onClick={onMenuClick}><FontAwesomeIcon icon={icon} size="2x" /></a>
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