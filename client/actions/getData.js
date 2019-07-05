export const FETCH_URL_REQUEST = 'FETCH_URL_REQUEST';
export const FETCH_URL_SUCCESS = 'FETCH_URL_SUCCESS';
export const FETCH_URL_FAILURE = 'FETCH_URL_FAILURE';

export const fetchUrlRequest = () => ({
  type: FETCH_URL_REQUEST,
});

export const fetchUrlSuccess = authUrl => ({
  type: FETCH_URL_SUCCESS,
  authUrl,
});

export const fetchUrlFailure = () => ({
  type: FETCH_URL_FAILURE,
});


export const getAuthUrl = () => async (dispatch) => {
  dispatch(fetchUrlRequest());
  try {
    const res = await fetch('api/data/getAuthUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (res.status !== 201) {
      throw data;
    } else {
      const { authUrl } = data;
      dispatch(fetchUrlSuccess(authUrl));
    }
  } catch (error) {
    dispatch(fetchUrlFailure());
  }
};
