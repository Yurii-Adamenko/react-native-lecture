import * as types from '../actionTypes';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

import { LOG_IN } from '../../../https/endpoints'

export const requestStart = () => {
  return {
    type: types.SET_AUTH_LOADING
  }
}

export const requestSuccess = data => {
  return {
    type: types.LOGIN_USER,
    payload: data
  }
}

export const requestError = error => {
  return {
    type: types.GET_AUTH_ERRORS,
    payload: error
  }
}

export const logIn = (obj, navigation) => dispatch => {
  dispatch(requestStart());
  console.log('action logIn')
  
  return axios.post(LOG_IN, { email: 'qwer@qwer.qwer', password: 'qwer123' })
    .then(res => {
      console.log(res);
  
      AsyncStorage.setItem('access_token', res.data.idToken)
      dispatch(requestSuccess(res.data))

      // navigation.navigate("Dashboard")
    })
    .catch(error => {
      console.log('error', error),
      dispatch(requestError(error))
    })
};

// export const signUp = (obj, navigation) => dispatch => {
//   dispatch(requestStart());
  
//   return axios.post(SIGN_UP, { email: 'qwer123@qwer123.qwer', password: 'qwer123!' })
//     .then(res => {
  
//       AsyncStorage.setItem('access_token', res.data.idToken)
//       dispatch(requestSuccess(res.data))

//       navigation.navigate("Login")
//     })
//     .catch(error => {
//       console.log('error', error),
//       dispatch(requestError(error))
//     })
// };


// export const signUp = () => dispatch => {
//   // Api call logic
// };
