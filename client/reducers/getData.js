import {
  FETCH_URL_REQUEST,
  FETCH_URL_SUCCESS,
  FETCH_URL_FAILURE,
} from 'Actions/getData';

const initialState = {
  authUrl: null,
  isLoading: true,
};

const authUrl = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_URL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_URL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        authUrl: action.authUrl,
      };
    case FETCH_URL_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authUrl;
