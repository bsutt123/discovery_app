import { combineReducers } from 'redux';


import movies from './moviesReducer';
import moviesFilter from './moviesFilterReducer';
import movieDetails from './movieDetailsReducer';

import tv from './tvReducer';
import tvFilter from './tvFilterReducer';
import tvDetails from './tvDetailsReducer';
import page from './pageReducer'

import displayType from './displayReducer';
import query from './queryReducer';


const rootReducer = combineReducers({
  movies,
  moviesFilter,
  movieDetails,
  tv,
  tvFilter,
  tvDetails,
  page,
  displayType,
  query,
});

export default rootReducer;