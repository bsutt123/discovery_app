import React, { Component } from 'react';

import styles from './movies.module.css'

import SearchForMovies from 'Containers/SearchForMovies/SearchForMovies';
import VisibleMoviesList from 'Containers/VisibleMoviesList/VisibleMoviesList';
import MoviesFilterSetter from 'Containers/MovieFilterSetter/MovieFilterSetter';

class Movies extends Component {
  componentDidMount() {
    if (this.props.movies)  {
      this.props.setMoviesByFilter("popular");
    }
  }
  render() {
    return(
      <div className={styles.container}>
        <div className={styles.headingBox}>
          <h1 className={styles.heading}> Find Movies you Love </h1>
        </div>
        <div className={styles.movieSelect} >
          <SearchForMovies />
          <MoviesFilterSetter />
        </div>
        <VisibleMoviesList />
      </div>
    )
  }
}

export default Movies;