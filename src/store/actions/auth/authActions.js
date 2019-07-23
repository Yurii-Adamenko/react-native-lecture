import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { showMessage } from "react-native-flash-message";

import { requestStart, requestSuccess, requestError } from './authActionCreators';
import { LOG_IN, SIGN_UP } from '../../../https/endpoints';

export const signIn = (email, password, navigation) => dispatch => {
  dispatch(requestStart());

  axios
    .post(LOG_IN, { email: 'qwer@qwer.qwer', password: 'qwer123' })
    .then(res => {
      AsyncStorage.setItem('access_token', res.data.idToken);
      dispatch(requestSuccess(res.data));
      showMessage({
        message: "You have successfully logged in!",
        type: "success",
        icon: 'auto'
      });
      navigation.navigate("Dashboard")
    })
    .catch(error => {
      showMessage({
        message: "Incorrect email or password!",
        type: "danger",
        icon: 'auto'
      });
      dispatch(requestError(error))
    });
};

export const signUp = (email, password, navigation) => dispatch => {
  dispatch(requestStart());

  axios
    .post(SIGN_UP, { email: 'sdfsdf', password: 'asdasdasd' })
    .then(res => {
      dispatch(requestSuccess(res.data));
      showMessage({
        message: "You have successfully registered!",
        type: "success",
        icon: 'auto'
      });
      navigation.navigate("SignIn")
    })
    .catch(error => {
      showMessage({
        message: "Incorrect email or password!",
        type: "danger",
        icon: 'auto'
      });
      dispatch(requestError(error))
    });
};
