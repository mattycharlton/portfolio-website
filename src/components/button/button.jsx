import React from 'react';
import styles from './button.scss';

const Button = ({label, type, link, target}) => {
const buttonType = type == 'dark' ? styles.buttonDark : styles.buttonLight;

  return  <a href={link} target={target} className={buttonType}>{label}</a>
};

export default Button;
