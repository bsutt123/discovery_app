//This is the reducer for what is being displayed (query or a filter)

import { SET_TV_FILTER, SEARCH_TV } from 'Actions/tvActions';
import { SET_MOVIES_FILTER, SEARCH_MOVIES } from 'Actions/movieActions';

export default function displayInfoReducer(state = '', action) {
  switch (action.type) {
    case SET_TV_FILTER:
      return 'filter'
    case SEARCH_TV:
      return 'search'
    case SET_MOVIES_FILTER:
      return 'filter'
    case SEARCH_MOVIES:
      return 'search'
    default:
      return state
  }
}
