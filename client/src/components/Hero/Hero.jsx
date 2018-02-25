import React from 'react';
import styles from './hero.module.css';

const Hero = ( {image, children} ) => {
  return (
    <div className={styles.container} >
      <img src={image} alt="hero image" className={styles.image}/>
      <div className={styles.headingCon}>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Hero;