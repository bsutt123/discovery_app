import { combineReducers } from 'redux';


import movies from './moviesReducer';
import moviesFilter from './moviesFilterReducer';
import movieDetails from './movieDetailsReducer';

import tv from './tvReducer';
import tvFilter from './tvFilterReducer';
import tvDetails from './tvDetailsReducer';


const rootReducer = combineReducers({
  movies,
  moviesFilter,
  movieDetails,
  tv,
  tvFilter,
  tvDetails
})

export default rootReducer;