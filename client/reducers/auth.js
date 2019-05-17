import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from 'Actions/auth';

const initialState = {
  user: null,
  isLoading: true,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.user,
      };
    case FETCH_AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default user;
