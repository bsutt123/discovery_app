import React, { Component } from 'react';

import styles from './movies.module.css'

import SearchForMovies from 'Containers/SearchForMovies/SearchForMovies';

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
        <SearchForMovies />
        {console.log(this.props.movies)}
      </div>
    )
  }
}

export default Movies;