import request from 'superagent';

//export action types
export const SET_MOVIES_FILTER = 'SET_MOVIES_FILTER';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const UPDATE_MOVIE_DETAILS = 'UPDATE_MOVIE_DETAILS';
export const SET_MOVIES_PAGE = 'SET_MOVIES_PAGE';

//create actionEmittors
function updateMoviesByFilter(filter, page, movies) {
  return {
    type: SET_MOVIES_FILTER,
    filter,
    movies,
    page
  };
}

function updateMoviesBySearch(query, page, movies) {
  return {
    type: SEARCH_MOVIES,
    movies,
    query,
    page
  };
}

function updateMovieDetails(movie) {
  return {
    type: UPDATE_MOVIE_DETAILS,
    movie
  }
}

function updateMovieByPage(page, movies) {
  return {
    type: SET_MOVIES_PAGE,
    page,
    movies
  }
}

//use functions to make calls to the api
function fetchMoviesByFilter(filter, page) {
  return request.get('/api/movies/filter').query({ filter, page }).then(res => JSON.parse(res.text).results)
}

function fetchMoviesBySearch(query, page) {
  return request.get('/api/movies/search').query({ query, page }).then(res => JSON.parse(res.text).results)
}

function fetchMovieDetails(id) {
  return request.get(`/api/movies/${id}`).then(res => JSON.parse(res.text))
}

//combine 2 in a thunk
export function setMoviesByFilter(filter) {
  return function (dispatch) {
    return fetchMoviesByFilter(filter).then(
      movies => dispatch(updateMoviesByFilter(filter, 1, movies)),
      error => console.log(error)
    )
  }
}

export function setMoviesBySearch(query) {
  return function (dispatch) {
    return fetchMoviesBySearch(query, 1).then(
      movies => dispatch(updateMoviesBySearch(query, 1, movies)),
      error =>  console.log(error)
    )
  }
}

export function setMoviePage(page) {
  return function (dispatch, getState) {
    console.log(page);
    const { displayType, moviesFilter, query } = getState();
    if (displayType === 'filter') {
      return fetchMoviesByFilter(moviesFilter, page).then(
        movies =>  dispatch(updateMovieByPage(page, movies)),
        error => console.log(error)
      )
    } else {
      return fetchMoviesBySearch(query, page).then(
        movies => dispatch(updateMovieByPage(page, movies)),
        error => console.log(error)
      )
    }
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
