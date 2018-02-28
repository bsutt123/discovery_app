import {SET_TV_DETAILS} from 'Actions/tvActions';

export default function tvDetailsReducer(state = {}, action) {
  switch (action.type) {
    case SET_TV_DETAILS:
      return action.tv
    default:
      return state
  }
}