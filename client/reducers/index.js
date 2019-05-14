import { combineReducers } from 'redux';

import signinForm from './signinForm';
import signupForm from './signupForm';
import auth from './auth';

export default combineReducers({
  signinForm,
  signupForm,
  auth,
});
