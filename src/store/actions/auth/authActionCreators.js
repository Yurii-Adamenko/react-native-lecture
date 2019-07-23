import * as types from '../actionTypes';

export const requestStart = () => {
  return {
    type: types.SET_AUTH_LOADING
  };
};

export const requestSuccess = data => {
  return {
    type: types.LOGIN_USER,
    payload: data
  };
};

export const requestError = error => {
  return {
    type: types.GET_AUTH_ERRORS,
    payload: error
  };
};
