import { combineReducers } from 'redux';
import movies from './moviesReducer';
import tv_shows from './tvShowsReducer';


const rootReducer = combineReducers({
  movies
})

export default rootReducer;