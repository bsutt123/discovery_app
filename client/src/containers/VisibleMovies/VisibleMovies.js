import { connect } from 'react-redux';

import { setMoviesByFilter, setMoviesBySearch } from 'Actions/movieActions'

import Movies from 'Pages/Movies/Movies'

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMoviesByFilter: filter => {
      dispatch(setMoviesByFilter(filter))
    },
    setMoviesBySearch: query => {
      dispatch(setMoviesBySearch(query))
    }
  }
}

const VisibleMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies)

export default VisibleMovies;