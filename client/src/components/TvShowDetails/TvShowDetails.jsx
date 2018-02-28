import React, {Component} from 'react';
import styles from './tv-show-details.module.css';

class TvShowDetails extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    if (this.props.tvDetails.id !== id) {
      this.props.fetchDetails(id);
    }
  }  

  render() {
    const backdropPrePath = "https://image.tmdb.org/t/p/w1280"
    const prePosterPath = "https://image.tmdb.org/t/p/w342"
    const profilePrePath = "https://image.tmdb.org/t/p/h632"
    const { tvDetails } = this.props
    return (
      <div className={styles.container} >
        <div className={styles.heroBox}>
          <img className={styles.heroImage} src={`${backdropPrePath}${tvDetails.backdrop_path}`} />
        </div>
        <div className={styles.information} >
          <div className={styles.title}>
            <h1> {tvDetails.name} </h1>
          </div>
          <div className={styles.overview} >
            <h1> Overview </h1>
            <p> {tvDetails.overview} </p>
          </div>
          <div className={styles.seasons}>
              {
                (tvDetails.seasons) && tvDetails.seasons.map((season, index) => {
                  return (
                    <div>
                      <h3> Season {season.season_number} </h3>
                      <div className={styles.seasonGrid} >
                        <p> Episode Count: {season.episode_count} </p>
                        <p> Air Date: {season.air_date} </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          <div className={styles.grid} > 
            <div className={styles.createBy} >
              <h2> Created By: </h2>
              <ul className={styles.gridList} >
                {
                  (tvDetails.created_by) && tvDetails.created_by.map( (creator,index) => {
                    return <li className={styles.gridItem}> {creator.name} </li>
                  })
                }
              </ul>
            </div>
            <div className={styles.genres} >
              <h2> Genres: </h2>
              <ul className={styles.gridList} >
                {
                  (tvDetails.genres) && tvDetails.genres.map( (genre,index) => {
                    return <li className={styles.gridItem}> {genre.name} </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TvShowDetails;