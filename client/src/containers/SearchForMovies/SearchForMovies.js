import { connect } from 'react-redux';
import { setMoviesBySearch } from 'Actions/movieActions';

import SearchBar from 'Components/SearchBar/SearchBar';

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    submitForm: query => {
      dispatch(setMoviesBySearch(query))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps, mapDispatchToProps
)(SearchBar)

export default SearchContainer;