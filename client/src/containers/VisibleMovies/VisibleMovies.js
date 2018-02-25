import { connect } from 'react-redux';

import { setMoviesByFilter, setMoviesBySearch } from 'Actions/movieActions'

import Movies from 'Pages/Movies/Movies'

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMoviesByFilter: filter => {
      dispatch(setMoviesByFilter(filter))
    }
  }
}

const VisibleMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies)

export default VisibleMovies;