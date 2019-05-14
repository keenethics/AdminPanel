export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const changeEmail = email => ({
  type: CHANGE_EMAIL,
  email,
});

export const changePassword = password => ({
  type: CHANGE_PASSWORD,
  password,
});
