import { connect } from 'react-redux';
import { setTvPage } from 'Actions/tvActions';
import PageControl from 'Components/PageControl/PageControl';

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page, event) => {
      event.preventDefault()
      dispatch(setTvPage(page))
    }
  }
}

const TvPageControl = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageControl)

export default TvPageControl;