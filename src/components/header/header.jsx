import React from 'react';
import { A } from 'hookrouter';
import styles from './header.scss';

const Header = () => (
  <nav className={styles.header}>
  <ul>
      <li><A href="/">Home</A></li>
      <li><A href="/about">About</A></li>
      <li><A href="/contact">Contact</A></li>
      <li><A href="/skills">Skills</A></li>
  </ul>
  </nav>
);

export default Header;