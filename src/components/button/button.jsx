import React from 'react';
import styles from './button.scss';

const Button = ({label, type}) => {
const buttonType = type == 'dark' ? styles.buttonDark : styles.buttonLight;

  return  <a className={buttonType}>{label}</a>
};

export default Button;
