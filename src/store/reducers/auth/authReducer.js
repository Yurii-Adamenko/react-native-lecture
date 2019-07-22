import * as types from '../../actions/actionTypes';

const initialState = {
  isLoading: false,
  authErrors: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_LOADING:
      return { ...state, isLoading: true };

    case types.LOGIN_USER:
      return { ...state, authData: action.payload, isLoading: false };

    case types.REGISTER_USER:
      return { ...state, authData: action.payload, isLoading: false };

    case types.GET_AUTH_ERRORS:
      return { ...state, authErrors: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default authReducer;
