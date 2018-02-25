import React from 'react';
import styles from './navbar.module.css';

import Logo from 'Images/discovr.png';

const Navbar = ({Link}) => {
  return (
    <div className={styles.container} >
      <div className={styles.logoBox}>
        <Link to="/"> <img src={Logo} className={styles.logo}/> </Link>
      </div>
      <div className={styles.navList} >
        <Link to="/movies"> <span className={styles.navItem}> Movies </span> </Link>
        <Link to="/tv"> <span className={styles.navItem}> Television </span> </Link>
      </div>
    </div>
  )
};

export default Navbar;