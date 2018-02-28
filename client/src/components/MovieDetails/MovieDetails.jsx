import React, { Component } from 'react';
import styles from './movie-details.module.css';

class MovieDetails extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    if (this.props.movieDetails.id !== id) {
      this.props.fetchDetails(id);
    }
  }

  render() {
    const backdropPrePath = "https://image.tmdb.org/t/p/w1280"
    const { movieDetails } = this.props
    console.log(movieDetails);
    return (
      <div className={styles.container}>
        <div className={styles.heroBox}>
          <img className={styles.heroImage} src={`${backdropPrePath}${movieDetails.backdrop_path}`} />
        </div>
        <div className={styles.information} >
          <div className={styles.title} >
            <h1> {movieDetails.title} </h1>
          </div>
          <div className={styles.overview} >
            <h2> Overview </h2>
            {movieDetails.overview}
          </div>
          <div className={styles.producers}>
            <h2> Production Companies </h2>
            <ul className={styles.producerList} >
              {
                (movieDetails.production_companies) && movieDetails.production_companies.map((producer, index) => {
                  return <li key={index} className={styles.producerItem}> {producer.name} </li>
                })
              }
            </ul>
          </div>
          <div className={styles.gridList} >
            <div className={styles.releasedOn}>
              <h2> Release Date </h2>
              <p> {movieDetails.release_date} </p>
            </div>
            <div className={styles.runtime} >
              <h2> Runtime </h2>
              <p> {movieDetails.runtime} minutes</p>
            </div>
            <div className={styles.homepage}>
                <h2> Homepage </h2>
                <a href={movieDetails.homepage} target="_blank"> Visit</a>
            </div>
            <div className={styles.imdb}>
              <h2> IMDB Link </h2>
              <a href={`http://imdb.com/title/${movieDetails.imdb_id}/`} target='_blank'> Visit </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails;