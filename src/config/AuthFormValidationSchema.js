import * as yup from 'yup';

export const AuthFormValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters!')
    .max(20, 'Password must be no more than 8 characters!')
    .required('Password is required')
});
