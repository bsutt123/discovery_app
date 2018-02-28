import { connect } from 'react-redux';
import TvList from 'Components/TvList/TvList';
import { setTvByFilter } from 'Actions/tvActions';

const mapStateToProps = (state) => {
  return {
    tvShows: state.tv  
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => {
      dispatch(setTvByFilter(filter));
    }
  };
};

const VisibleTvList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TvList);

export default VisibleTvList;