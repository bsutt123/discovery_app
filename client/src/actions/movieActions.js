import request from 'superagent';

//export action types
export const SET_MOVIES_FILTER = 'SET_MOVIES_FILTER';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';

//create actionEmittors
function updateMoviesByFilter(filter, movies) {
  return {
    type: SET_MOVIES_FILTER,
    movies
  };
}

function updateMoviesBySearch(query, movies) {
  return {
    type: SEARCH_MOVIES,
    movies
  };
}

//use functions to make calls to the api
function fetchMoviesByFilter(filter) {
  return request.get('/api/movies/filter').query({ filter }).then(res =>  JSON.parse(res.text).results)
}

function fetchMoviesBySearch(query) {
  return request.get('/api/moves/search').query({ query }).then(res => JSON.parse(res.text).results)
}

//combine 2 in a thunk
export function setMoviesByFilter(filter) {
  return function (dispatch) {
    return fetchMoviesByFilter(filter).then(
      movies => dispatch(updateMoviesByFilter(filter, movies)),
      error => console.log(error)
    )
  }
}

export function setMoviesBySearch(query) {
  return function (dispatch) {
    return fetchMoviesBySearch(query).then(
      movies => dispatch(updateMoviesBySearch(query, movies)),
      error =>  console.log(error)
    )
  }
}