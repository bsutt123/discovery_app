import React from 'react';
import styles from './navbar.module.css';

import Logo from 'Images/discovr.png';

const Navbar = (props) => {
  return (
    <div className={styles.container} >
      <div className={styles.logoBox}>
        <img src={Logo} className={styles.logo}/>
      </div>
      <div className={styles.navList} >
        <span className={styles.navItem}> Movies </span>
        <span className={styles.navItem}> Television </span>
      </div>
    </div>
  )
};

export default Navbar;