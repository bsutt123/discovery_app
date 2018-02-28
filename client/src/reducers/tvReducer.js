import { SEARCH_TV, SET_TV_FILTER } from 'Actions/tvActions';

export default function tvReducer(state = [], action) {
  switch (action.type) {
    case SEARCH_TV:
      return action.tv
    case SET_TV_FILTER:
      return action.tv
    default:
      return state
  }
}