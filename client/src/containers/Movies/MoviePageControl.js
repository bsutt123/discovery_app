import { connect } from 'react-redux';
import PageControl from 'Components/PageControl/PageControl';
import { setMoviePage } from 'Actions/movieActions'

const mapStateToProps = (state) => {
  return {
    page: state.page,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page, event) => {
      event.preventDefault();
      dispatch(setMoviePage(page))
    }
  }
}

const MoviePageControl = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageControl)

export default MoviePageControl;