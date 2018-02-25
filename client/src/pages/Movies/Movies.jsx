import React, { Component } from 'react';

import styles from './movies.module.css'

class Movies extends Component {
  componentDidMount() {
    if (this.props.movies)  {
      this.props.setMoviesByFilter("popular");
    }
  }
  render() {
    return(
      <div className={styles.container}>
        I'm in Movies
        {console.log(this.props.movies)}
      </div>
    )
  }
}

export default Movies;