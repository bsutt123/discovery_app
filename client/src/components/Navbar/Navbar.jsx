import React from 'react';
import styles from './navbar.module.css';

const Navbar = (props) => {
  return (
    <div className={styles.container} >
      <div className={styles.logoBox}>
        <div className={styles.logo}> Discovery <br /> App </div>
      </div>
      <div className={styles.navList} >
        <span className={styles.navItem}> Movies </span>
        <span className={styles.navItem}> Television </span>
      </div>
    </div>
  )
};

export default Navbar;