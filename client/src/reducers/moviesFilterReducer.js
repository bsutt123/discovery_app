import { SET_MOVIES_FILTER, SEARCH_MOVIES } from 'Actions/movieActions'

export default function moviesFilterReducer(state = "none", action) {
  switch (action.type) {
    case SET_MOVIES_FILTER:
      return action.filter
    case SEARCH_MOVIES:
      return "none"
    default:
      return state
  }
}