import { SEARCH_TV, SET_TV_FILTER } from 'Actions/tvActions';


export default function tvFilterReducer(state = 'none', action) {
  switch(action.type) {
    case SET_TV_FILTER:
      return action.filter
    case SEARCH_TV:
      return 'none'
    default: 
      return state
  }
}