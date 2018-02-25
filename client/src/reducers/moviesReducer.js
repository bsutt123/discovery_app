import { SET_MOVIES_FILTER, SEARCH_MOVIES } from 'Actions/movieActions'

const initialState = {
  displaySearch:false,
  movies: []
}

export function moviesReducer(state = initialState, action) {
  switch(action.type) {
    case SET_MOVIES_FILTER:
      return {
        ...state,
        displaySearch: false,
        movies: action.movies
      }
    case SEARCH_MOVIES:
      return {
        ...state,
        displaySearch: true,
        movies: action.movies
      }
    default:
      return state
  }
}

export default moviesReducer;