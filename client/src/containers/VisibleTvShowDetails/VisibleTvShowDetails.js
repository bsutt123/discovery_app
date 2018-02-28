import { connect } from 'react-redux';

import { setTvDetails } from 'Actions/tvActions';

import TvShowDetails from 'Components/TvShowDetails/TvShowDetails';

const mapStateToProps = (state) => {
  return {
    tvDetails: state.tvDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (id) => {
      dispatch(setTvDetails(id))
    }
  }
}

const VisibleTvShowDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(TvShowDetails)

export default VisibleTvShowDetails;