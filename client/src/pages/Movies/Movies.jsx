import React, { Component } from 'react';

import styles from './movies.module.css'

import SearchForMovies from 'Containers/Movies/SearchForMovies';
import VisibleMoviesList from 'Containers/Movies/VisibleMoviesList';
import MoviesFilterSetter from 'Containers/Movies/MovieFilterSetter';
import MoviePageControl from '../../containers/Movies/MoviePageControl';

class Movies extends Component {
  componentDidMount() {
    if (this.props.movies.length === 0)   {
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
        <MoviePageControl />
        <VisibleMoviesList />
      </div>
    )
  }
}

export default Movies;