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
  // sessionStorage.removeItem('userId');
  // sessionStorage.removeItem('userToken');
  localStorage.removeItem('userToken');
  localStorage.removeItem('googleAccessToken');
  localStorage.removeItem('googleIdToken');

  dispatch(fetchUserFailure());
};

export const fetchUser = () => (dispatch) => {
  // const userId = sessionStorage.getItem('userId');
  // const userToken = sessionStorage.getItem('userToken');
  const userToken = localStorage.getItem('userToken');
  const accessToken = localStorage.getItem('googleAccessToken');
  const idToken = localStorage.getItem('googleIdToken');

  if (idToken && accessToken) {
    dispatch(fetchUserRequest());

    const tokens = JSON.stringify({ idToken, accessToken });
    fetch(`api/user/${tokens}`, {
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

export const signinUserWithGoogle = code => async (dispatch) => {
  dispatch(fetchAuthRequest());

  try {
    const res = await fetch('api/auth/OAuth', {
      method: 'POST',
      body: JSON.stringify({
        code,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    if (res.status !== 201) {
      throw data;
    } else {
      const {
        user,
        token,
        idToken,
        accessToken,
      } = data;

      if (user && user.id && token) {
        localStorage.setItem('userToken', token);
        localStorage.setItem('googleAccessToken', accessToken);
        localStorage.setItem('googleIdToken', idToken);

        dispatch(fetchAuthSuccess(user));
      }
    }
  } catch (error) {
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
