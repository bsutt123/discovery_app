import {SEARCH_MOVIES} from 'Actions/movieActions';
import {SEARCH_TV} from 'Actions/tvActions';

export default function(state = '', action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return action.query
    case SEARCH_TV:
      return action.query
    default:
      return state
  }
}