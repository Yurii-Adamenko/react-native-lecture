import React, { useState, useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { AsyncStorage } from 'react-native';
import { connect } from "react-redux";
import Spinner from 'react-native-spinkit';

import { ThemedInput, ThemedButton } from "../../components";
import { logIn } from '../../store/actions/auth/authActions';

const Login = ({ navigation, logIn, loaderStatus, errorMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AsyncStorage.getItem('access_token')
      .then(res => {
        if (res) {
          // navigation.navigate("Dashboard")
        } else return;
      })
      .catch(err => {
        console.log(err);
      })
  });

  loginClick = () => {
    let objForm = {
      email, 
      password
    }

    console.log('login');
    console.log('objForm', objForm)
    // console.log(email, password);
  
    logIn(objForm, navigation);
  }
 
  return (
    <ScrollView style={{padding: 10}}>
      <Spinner
        isVisible={true}
        size={50}
        type={'Bounce'}
        color={'#ffffff'}
      />
      <Text>Login</Text>
      <ThemedInput value={email} onChangeText={value => setEmail(value)} />

      <ThemedInput
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry
      />
  
      <ThemedButton
        title="Login"
        onPress={this.loginClick}
      />
    </ScrollView>
  );
};

Login.navigationOptions = {
  title: "Login",
  headerStyle: {
    backgroundColor: '#8aaede',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
};

const mapStateToProps = state => ({
  loaderStatus: state.auth.isLoading,
  errorMessage: state.auth.authErrors
});

const mapDispatchToProps = dispatch => {
  return {
    logIn: (obj, navigation) => dispatch(logIn(obj, navigation))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
