import React from 'react';
import styles from './home.module.css'

//import components
import Hero from 'Components/Hero/Hero';

//import images
import HeroImage from 'Images/home/hero.jpg'


const Home = (props) => {
  return (
    <div className={styles.container}>
      <Hero image={HeroImage}>
        <div className={styles.headingBox}>
          <h1 className={styles.heroMainHeading} > Discover your <br /> next show ... </h1>
          <h3 className={styles.heroSubHeading} > Browse ... </h3>
          <h3 className={styles.heroSubHeading} > Binge ... </h3>
          <h3 className={styles.heroSubHeading} > Repeat </h3>
        </div>
      </Hero>
    </div>
  )
}

export default Home;