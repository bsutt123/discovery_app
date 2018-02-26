import FilterSetter from 'Components/FilterSetter/FilterSetter';
import { connect } from 'react-redux';

import { setMoviesByFilter } from 'Actions/movieActions';

const mapStateToProps = (state) => {
  return {
    currentFilter: state.moviesFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (event) => {
      event.preventDefault();
      dispatch(setMoviesByFilter(event.target.name));
    }
  }
}

const MovieFilterSetter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSetter)

export default MovieFilterSetter;
