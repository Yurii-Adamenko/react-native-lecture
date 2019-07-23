import React, { useEffect } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import _ from 'lodash';

import { ThemedInput, ThemedButton, ThemedErrorMessage, ThemedLabel, ThemedLoader } from '../../components';
import { AuthFormValidationSchema } from '../../config/AuthFormValidationSchema';
import { signIn } from '../../store/actions/auth/authActions';

const SignIn = ({ navigation, signIn, loaderStatus }) => {
  useEffect(() => {
    AsyncStorage.getItem('access_token')
      .then(res => {
        if (res) {
          // navigation.navigate("Dashboard")
        }
        return true;
      })
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        _.debounce(() => {
          signIn(values.email, values.password, navigation);
        }, 1000)();
      }}
      // validationSchema={AuthFormValidationSchema}
    >
      {({ values, errors, touched, handleChange, setFieldTouched, handleSubmit }) => (
        <ScrollView style={{ padding: 20 }}>
          {loaderStatus ? (
            <ThemedLoader color={'#8aaede'} size={100} />
          ) : (
            <View>
              <ThemedLabel labelText={'Email:'} />
              <ThemedInput
                value={values.email}
                name="email"
                placeholder={'Email'}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {errors.email && touched.email && <ThemedErrorMessage errorMessage={errors.email} />}
              <ThemedLabel labelText={'Password:'} />
              <ThemedInput
                value={values.password}
                name="password"
                placeholder={'Password'}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                secureTextEntry
              />
              {errors.password && touched.password && <ThemedErrorMessage errorMessage={errors.password} />}
              <View style={{ marginVertical: 20 }}>
                <ThemedButton title="Sign In" onPress={handleSubmit} />
                <ThemedButton title="Create Account" onPress={() => navigation.navigate('SignUp')} />
              </View>
            </View>
          )}
        </ScrollView>
      )}
    </Formik>
  );
};

SignIn.navigationOptions = {
  title: 'Sign In',
};

const mapStateToProps = state => ({
  loaderStatus: state.auth.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, password, navigation) => dispatch(signIn(email, password, navigation))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
