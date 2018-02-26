import React from 'react';
import styles from './movie.module.css';

const Movie = ({ movie }) => {
  const prePosterPath = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className={styles.container} >
      <div className={styles.imageBox} >
        <img src={`${prePosterPath}${movie.poster_path}`} alt={`poster for ${movie.title}`}className={styles.image} />
      </div>
      <div className={styles.contentBox} >
        <h1 className={styles.title} > { movie.title } </h1>
        <p className={styles.description}> {movie.overview} </p>
      </div>
    </div>
  )
}

export default Movie;