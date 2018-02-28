import request from 'superagent';

//export action types
export const SET_MOVIES_FILTER = 'SET_MOVIES_FILTER';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const UPDATE_MOVIE_DETAILS = 'UPDATE_MOVIE_DETAILS';

//create actionEmittors
function updateMoviesByFilter(filter, movies) {
  return {
    type: SET_MOVIES_FILTER,
    filter,
    movies
  };
}

function updateMoviesBySearch(query, movies) {
  return {
    type: SEARCH_MOVIES,
    movies
  };
}

function updateMovieDetails(movie) {
  return {
    type: UPDATE_MOVIE_DETAILS,
    movie
  }
}

//use functions to make calls to the api
function fetchMoviesByFilter(filter) {
  return request.get('/api/movies/filter').query({ filter }).then(res => JSON.parse(res.text).results)
}

function fetchMoviesBySearch(query) {
  return request.get('/api/movies/search').query({ query }).then(res => JSON.parse(res.text).results)
}

function fetchMovieDetails(id) {
  return request.get(`/api/movies/${id}`).then(res => JSON.parse(res.text))
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

export function getMovieDetails(id) {
  return function (dispatch) {
    return fetchMovieDetails(id).then(
      movie => dispatch(updateMovieDetails(movie)),
      error =>  console.log(error)
    )
  }
}
