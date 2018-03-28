import { connect } from 'react-redux';
import { setTvByPage } from 'Actions/tvActions';
import PageControl from 'Components/PageControl/PageControl';

const mapStateToProps = (state) => {
  return {
    page: state.tvPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page, event) => {
      event.preventDefault()
      dispatch(setTvByPage(page))
    }
  }
}