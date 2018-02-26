import React from 'react';
import styles from './movies-list.module.css';
import Movie from 'Components/Movie/Movie'

const MoviesList = ({ movies }) => {
  return (
    <div className={styles.container} >
      {
        (movies.length === 0) && <div> No Movies Found.</div>
      }
      { (movies.length !== 0) && movies.map((movie, index) => {
        return <Movie key={index} movie={movie}/>
      })}
    </div>
  )
}

export default MoviesList;