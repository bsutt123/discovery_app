import React, { Component } from 'react';
import styles from './tv-shows.module.css';

import SearchForTv from 'Containers/SearchForTv/SearchForTv';
import TvFilterSetter from 'Containers/TvFilterSetter/TvFilterSetter';
import VisibleTvList from 'Containers/VisibleTvList/VisibleTvList';

const TvShows = () => {
  return (
    <div className={styles.container} >
      <div className={styles.headingBox} >
        <h2 className={styles.heading}> All the best shows </h2>
        <div className={styles.tvSelect}>
          <SearchForTv />
          <TvFilterSetter />
        </div>
        <VisibleTvList />
      </div>
    </div>
  )
}


export default TvShows;