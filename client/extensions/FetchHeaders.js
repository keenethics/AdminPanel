export default (url, options = {}) => {
  const token = sessionStorage.getItem('jwtToken');

  if (token) {
    options.headers = { // eslint-disable-line no-param-reassign
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(url, options);
};
