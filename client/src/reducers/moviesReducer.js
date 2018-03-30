import { SET_MOVIES_FILTER, SEARCH_MOVIES, SET_MOVIES_PAGE } from 'Actions/movieActions'


export function moviesReducer(state = [], action) {
  switch(action.type) {
    case SET_MOVIES_FILTER:
      return action.movies
    case SEARCH_MOVIES:
      return action.movies
    case SET_MOVIES_PAGE:
      return action.movies
    default:
      return state
  }
}

export default moviesReducer;