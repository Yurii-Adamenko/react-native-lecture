const FIREBASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';
const API_KEY = 'AIzaSyD3wQALVLf0LA2i6hLgO616oGPlPRqotH4';

// https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
export const SIGN_UP = `${FIREBASE_URL}:signUp?key=${API_KEY}`;

// https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
export const LOG_IN = `${FIREBASE_URL}:signInWithPassword?key=${API_KEY}`;
