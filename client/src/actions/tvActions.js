import request from 'superagent';

//export action types
export const SET_TV_FILTER = 'SET_TV_FILTER';
export const SEARCH_TV = 'SEARCH_TV';
export const SET_TV_DETAILS = 'SET_TV_DETAILS';
export const SET_TV_PAGE = 'SET_TV_PAGE'
//create actionEmittors
function updateTvByFilter(filter, tvPage, tv) {
  return {
    type: SET_TV_FILTER,
    filter,
    tv,
    tvPage,
  };
}

function updateTvBySearch(query, page, tv) {
  return {
    type: SEARCH_TV,
    tv,
    page,
    query,
  };
}

function updateTvDetails(tv) {
  return {
    type: SET_TV_DETAILS,
    tv
  }
}

//use functions to make calls to the api
function fetchTvByFilter(filter, page = 1) {
  return request.get('/api/tv/filter').query({ filter, page }).then(res => JSON.parse(res.text).results)
}

function fetchTvBySearch(query, page) {
  return request.get('/api/tv/search').query({ query, page }).then(res => JSON.parse(res.text).results)
}

function fetchTvDetails(id) {
  return request.get(`/api/tv/${id}`).then(res => JSON.parse(res.text))
}

//combine 2 in a thunk
export function setTvByFilter(filter) {
  return function (dispatch) {
    return fetchTvByFilter(filter).then(
      tv => dispatch(updateTvByFilter(filter, 1, tv)),
      error => console.log(error)
    )
  }
}

export function setTvBySearch(query) {
  return function (dispatch) {
    return fetchTvBySearch(query).then(
      tv => dispatch(updateTvBySearch(query, 1, tv)),
      error =>  console.log(error)
    )
  }
}

export function setTvPage(page) {
  return function (dispatch, getState) {
    const {filter} = getState().tvFilter;
    return fetchTvByFilter(filter, page).then(
      tv => dispatch(updateTvByFilter(filter, tv)),
      error => console.log(error)
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