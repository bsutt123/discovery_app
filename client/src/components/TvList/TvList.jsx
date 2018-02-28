import React, {Component} from 'react';

import TvShow from 'Components/TvShow/TvShow';

import styles from './tv-list.module.css';


class TvList extends Component {
  componentDidMount() {
    if (this.props.tvShows.length === 0) {
      this.props.setFilter("popular");
    }
  }

  render() {
    const { tvShows } = this.props
    return(
      <div className={styles.container}>
        { tvShows.length === 0 && <div> There are now Shows for that search </div>}
        { tvShows.length !== 0 && tvShows.map((tvShow,index ) => {
          return (<TvShow key={index} tvShow={tvShow} />)
        })}
      </div>
    )
  }
}

export default TvList;