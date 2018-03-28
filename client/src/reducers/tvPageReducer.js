import { SET_TV_PAGE } from 'Actions/tvActions';

export default function tvPageReducer(state = 1, action){
  switch(action.type) {
    case SET_TV_PAGE:
      return action.page
    default:
      return state
  }
}