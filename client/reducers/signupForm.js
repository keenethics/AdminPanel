import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
} from 'Actions/signupForm';

const initialState = {
  email: {
    value: '',
    error: null,
  },
  password: {
    value: '',
    error: null,
  },
};

const signupForm = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return Object.assign({}, state, {
        email: action.email,
      });
    case CHANGE_PASSWORD:
      return Object.assign({}, state, {
        password: action.password,
      });
    default:
      return state;
  }
};

export default signupForm;
