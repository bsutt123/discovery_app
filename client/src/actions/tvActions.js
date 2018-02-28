import request from 'superagent';

//export action types
export const SET_TV_FILTER = 'SET_TV_FILTER';
export const SEARCH_TV = 'SEARCH_TV';
export const SET_TV_DETAILS = 'SET_TV_DETAILS';
//create actionEmittors
function updateTvByFilter(filter, tv) {
  return {
    type: SET_TV_FILTER,
    filter,
    tv
  };
}

function updateTvBySearch(query, tv) {
  return {
    type: SEARCH_TV,
    tv
  };
}

function updateTvDetails(tv) {
  return {
    type: SET_TV_DETAILS,
    tv
  }
}

//use functions to make calls to the api
function fetchTvByFilter(filter) {
  return request.get('/api/tv/filter').query({ filter }).then(res => JSON.parse(res.text).results)
}

function fetchTvBySearch(query) {
  return request.get('/api/tv/search').query({ query }).then(res => JSON.parse(res.text).results)
}

function fetchTvDetails(id) {
  return request.get(`/api/tv/${id}`).then(res => JSON.parse(res.text))
}

//combine 2 in a thunk
export function setTvByFilter(filter) {
  return function (dispatch) {
    return fetchTvByFilter(filter).then(
      tv => dispatch(updateTvByFilter(filter, tv)),
      error => console.log(error)
    )
  }
}

export function setTvBySearch(query) {
  return function (dispatch) {
    return fetchTvBySearch(query).then(
      tv => dispatch(updateTvBySearch(query, tv)),
      error =>  console.log(error)
    )
  }
}

export function setTvDetails(id) {
  return function (dispatch) {
    return fetchTvDetails(id).then(
      tv => dispatch(updateTvDetails(tv)),
      error =>  console.log(error)
    )
  }
}