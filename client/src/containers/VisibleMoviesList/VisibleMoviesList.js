import { connect } from 'react-redux';
import MoviesList from 'Components/MoviesList/MoviesList';

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const VisibleMoviesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList)

export default VisibleMoviesList;