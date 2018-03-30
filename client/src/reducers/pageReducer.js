import { SET_TV_PAGE, SET_TV_FILTER, SEARCH_TV } from 'Actions/tvActions';
import { SET_MOVIES_PAGE, SET_MOVIES_FILTER, SEARCH_MOVIES } from 'Actions/movieActions';

export default function pageReducer(state = 1, action){
  switch(action.type) {
    case SET_TV_PAGE:
      return action.page
    case SET_TV_FILTER: 
      return action.page
    case SEARCH_TV:
      return action.page
    case SET_MOVIES_PAGE:
      return action.page
    case SET_MOVIES_FILTER:
      return action.page
    case SEARCH_MOVIES:
      return action.page
    default:
      return state
  }
}