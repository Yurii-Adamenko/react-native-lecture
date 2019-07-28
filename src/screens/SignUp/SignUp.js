import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import _ from 'lodash';

import { ThemedInput, ThemedButton, ThemedErrorMessage, ThemedLabel, ThemedLoader } from '../../components';
import { AuthFormValidationSchema } from '../../config/AuthFormValidationSchema'
import { signUp } from '../../store/actions/auth/authActions';

const SignUp = ({ navigation, signUp, loaderStatus }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        _.debounce(() => {
          signUp(values.email, values.password, navigation);
        }, 1000)();
      }}
      validationSchema={AuthFormValidationSchema}
    >
      {({ values, errors, touched, handleChange, setFieldTouched, handleSubmit }) => (
        <ScrollView style={{ padding: 20 }}>
          {loaderStatus ? (
            <ThemedLoader color='#8aaede' size={100} />
          ) : (
            <View>
              <ThemedLabel labelText='Email:' />
              <ThemedInput
                value={values.email}
                name="email"
                placeholder='Email'
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {errors.email && touched.email && <ThemedErrorMessage errorMessage={errors.email} />}
              <ThemedLabel labelText='Password:' />
              <ThemedInput
                value={values.password}
                name="password"
                placeholder='Password'
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                secureTextEntry
              />
              {errors.password && touched.password && <ThemedErrorMessage errorMessage={errors.password} />}
              <ThemedButton title="Sign Up" onPress={handleSubmit} />
            </View>
          )}
        </ScrollView>
      )}
    </Formik>
  );
};

SignUp.navigationOptions = {
  title: 'Sign Up'
};

const mapStateToProps = state => ({
  loaderStatus: state.auth.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    signUp: (email, password, navigation) => dispatch(signUp(email, password, navigation))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
