import { UPDATE_MOVIE_DETAILS } from 'Actions/movieActions';

export default function movieDetailsReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_MOVIE_DETAILS:
      return action.movie
    default:
      return state
  }
}