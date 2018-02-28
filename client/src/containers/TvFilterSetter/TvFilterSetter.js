import { connect } from 'react-redux';
import { setTvByFilter } from 'Actions/tvActions';
import FilterSetter from 'Components/FilterSetter/FilterSetter';


const mapStateToProps = (state) => {
  return {
    currentFilter: state.tvFilter,
    setterType: 'tv'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (event) => {
      event.preventDefault()
      dispatch(setTvByFilter(event.target.name))
    }
  }
}

const TvFilterSetter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSetter)

export default TvFilterSetter;