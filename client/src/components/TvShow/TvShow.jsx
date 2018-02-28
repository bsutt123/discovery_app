import React from 'react';
import styles from './tv-show.module.css';
import { Link } from 'react-router-dom';

const TvShow = ({ tvShow }) => {
  const prePosterPath = 'https://image.tmdb.org/t/p/w500'
  return(
    <div className={styles.container} >
      <div className={styles.imageBox} >
        <Link to={`/tv/${tvShow.id}`} > 
          <img src={`${prePosterPath}${tvShow.poster_path}`} alt={`poster for ${tvShow.title}`} className={styles.image} /> 
        </Link>
      </div>
      <div className={styles.contentBox} >
        <h1 className={styles.title} > { tvShow.name } </h1>
        <p className={styles.description}> {tvShow.overview} </p>
      </div>
    </div>
  )
}

export default TvShow;