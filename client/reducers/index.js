import { combineReducers } from 'redux';

import signinForm from './signinForm';
import signupForm from './signupForm';
import auth from './auth';
import getData from './getData';

export default combineReducers({
  signinForm,
  signupForm,
  auth,
  getData,
});
