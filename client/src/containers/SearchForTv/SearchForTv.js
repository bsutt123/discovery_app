import { connect } from 'react-redux';
import { setTvBySearch } from 'Actions/tvActions';
import SearchBar from 'Components/SearchBar/SearchBar'; 

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (query) => {
      dispatch(setTvBySearch(query));
    }
  }
}

const SearchForTv = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchForTv;