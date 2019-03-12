import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  FETCH_REQUEST,
} from 'Actions/signinForm';

const initialState = {
  email: {
    value: '',
    error: null,
  },
  password: {
    value: '',
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
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default signinForm;
