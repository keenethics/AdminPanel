export const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const CLEAR = 'CLEAR';

export const fetchAuthRequest = () => ({
  type: FETCH_AUTH_REQUEST,
});

export const fetchAuthSuccess = () => ({
  type: FETCH_AUTH_SUCCESS,
});

export const fetchAuthFailure = () => ({
  type: FETCH_AUTH_FAILURE,
});

export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user,
});

export const fetchUserFailure = () => ({
  type: FETCH_USER_FAILURE,
});

export const clear = () => ({
  type: CLEAR,
});

export const fetchUser = () => (dispatch) => {
  const userId = sessionStorage.getItem('userId');
  const userToken = sessionStorage.getItem('userToken');

  if (userId && userToken) {
    dispatch(fetchUserRequest());

    fetch(`api/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => {
        if (res.status && res.status === 200) return res.json();

        return null;
      })
      .then((user) => {
        if (user && user.id) {
          dispatch(fetchUserSuccess(user));
        }
      });
  } else {
    dispatch(fetchUserFailure());
  }
};

export const signinUser = () => (dispatch, getState) => {
  const { signinForm } = getState();
  const { email, password } = signinForm || {};

  if (email && email.value && password && password.value) {
    dispatch(fetchAuthRequest());

    fetch('api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then((data) => {
        if (data && data.user && data.token) {
          sessionStorage.setItem('userId', data.user.id);
          sessionStorage.setItem('userToken', data.token);

          dispatch(fetchAuthSuccess());
        }
      });
  } else {
    dispatch(fetchAuthFailure());
  }
};
