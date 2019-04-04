import fetchHeaders from '../extensions/FetchHeaders'

export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const FETCH_REQUEST = 'FETCH_REQUEST';

export const changeEmail = email => ({
  type: CHANGE_EMAIL,
  email,
});

export const changePassword = password => ({
  type: CHANGE_PASSWORD,
  password,
});

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

export const submitForm = () => (dispatch, getState) => {
  const { signinForm } = getState();
  const { email, password } = signinForm || {};

  dispatch(fetchRequest());

  fetchHeaders('api/auth/login', {
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
    .then(data => {
      if (data.token)
        sessionStorage.setItem('jwtToken', data.token);
      console.log(data);
    });
};
