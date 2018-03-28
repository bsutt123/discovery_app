import { combineReducers } from 'redux';


import movies from './moviesReducer';
import moviesFilter from './moviesFilterReducer';
import movieDetails from './movieDetailsReducer';

import tv from './tvReducer';
import tvFilter from './tvFilterReducer';
import tvDetails from './tvDetailsReducer';
import tvPage from './tvPageReducer'


const rootReducer = combineReducers({
  movies,
  moviesFilter,
  movieDetails,
  tv,
  tvFilter,
  tvDetails,
  tvPage,
});

export default rootReducer;