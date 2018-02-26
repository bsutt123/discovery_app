import { combineReducers } from 'redux';


import movies from './moviesReducer';
import moviesFilter from './moviesFilterReducer';


const rootReducer = combineReducers({
  movies,
  moviesFilter
})

export default rootReducer;