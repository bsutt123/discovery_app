import React from 'react';
import styles from './hero.module.css';

const Hero = ( {image, children} ) => {
  return (
    <div className={styles.container} >
      <img src={image} alt="hero" className={styles.image}/>
      <div className={styles.headingCon}>
          {children}
      </div>
    </div>
  )
}

export default Hero;