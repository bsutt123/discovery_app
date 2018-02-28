import { connect } from 'react-redux';
import { getMovieDetails } from 'Actions/movieActions';
import MovieDetails from 'Components/MovieDetails/MovieDetails';

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movieDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (id) => {
      dispatch(getMovieDetails(id))
    }
  }
}

const VisibleMovieDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails)

export default VisibleMovieDetails;