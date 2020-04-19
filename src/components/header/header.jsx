import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './header.scss';
import Nav from '../nav/nav';
import Logo from '../../images/logo.png';


const Header = () => {
  const [navValue, setNavValue] = useState(false);
  return <header className={styles.header}>
    <Nav isNavOpen={navValue} onNavChange={setNavValue} />
  </header>
};

export default Header;