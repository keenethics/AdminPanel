export const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchAuthRequest = () => ({
  type: FETCH_AUTH_REQUEST,
});

export const fetchAuthSuccess = user => ({
  type: FETCH_AUTH_SUCCESS,
  user,
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

export const logout = () => (dispatch) => {
  sessionStorage.removeItem('userId');
  sessionStorage.removeItem('userToken');

  dispatch(fetchUserFailure());
};

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
        if (res.ok) return res.json();

        throw res.status;
      })
      .then((user) => {
        if (user && user.id) {
          dispatch(fetchUserSuccess(user));
        }
      })
      .catch((error) => {
        if (error === 401) dispatch(logout());
      });
  } else {
    dispatch(fetchUserFailure());
  }
};

export const signinUser = () => async (dispatch, getState) => {
  const { signinForm } = getState();
  const { email, password } = signinForm || {};

  if (email && email.value && password && password.value) {
    dispatch(fetchAuthRequest());

    try {
      const res = await fetch('api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      if (res.status !== 201) {
        throw data;
      } else {
        const { user, token } = data;

        if (user && user.id && token) {
          sessionStorage.setItem('userId', user.id);
          sessionStorage.setItem('userToken', token);

          dispatch(fetchAuthSuccess(user));
        }
      }
    } catch (error) {
      dispatch(fetchAuthFailure());
    }
  } else {
    dispatch(fetchAuthFailure());
  }
};

export const signupUser = () => async (dispatch, getState) => {
  const { signinForm } = getState();
  const { email, password } = signinForm || {};

  if (email && email.value && password && password.value) {
    dispatch(fetchAuthRequest());

    try {
      const res = await fetch('api/user', {
        method: 'POST',
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      if (res.status !== 201) {
        throw data;
      } else {
        const { user, token } = data;

        if (user && user.id && token) {
          sessionStorage.setItem('userId', user.id);
          sessionStorage.setItem('userToken', token);

          dispatch(fetchAuthSuccess(user));
        }
      }
    } catch (error) {
      dispatch(fetchAuthFailure());
    }
  } else {
    dispatch(fetchAuthFailure());
  }
};
