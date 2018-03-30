import React from 'react';
import styles from './tv-shows.module.css';

import SearchForTv from 'Containers/Tv/SearchForTv';
import TvFilterSetter from 'Containers/Tv/TvFilterSetter';
import VisibleTvList from 'Containers/Tv/VisibleTvList';
import TvPageControl from 'Containers/Tv/TvPageControl';

const TvShows = () => {
  return (
    <div className={styles.container} >
      <div className={styles.headingBox} >
        <h2 className={styles.heading}> All the best shows </h2>
        <div className={styles.tvSelect}>
          <SearchForTv />
          <TvFilterSetter />
        </div>
        <TvPageControl />
        <VisibleTvList />
      </div>
    </div>
  )
}


export default TvShows;