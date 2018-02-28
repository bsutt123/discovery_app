import { combineReducers } from 'redux';


import movies from './moviesReducer';
import moviesFilter from './moviesFilterReducer';
import tv from './tvReducer';
import tvFilter from './tvFilterReducer';


const rootReducer = combineReducers({
  movies,
  moviesFilter,
  tv,
  tvFilter
})

export default rootReducer;