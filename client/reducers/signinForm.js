import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
} from 'Actions/signinForm';

const initialState = {
  email: {
    value: 'john.doe@example.com',
    error: null,
  },
  password: {
    value: '123321',
    error: null,
  },
  isLoading: false,
};

const signinForm = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};

export default signinForm;
