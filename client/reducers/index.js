import { combineReducers } from 'redux';

import signinForm from './signinForm';
import signupForm from './signupForm';

export default combineReducers({
  signinForm,
  signupForm,
});
