export default (url, options = {}) => {
  const userId = sessionStorage.getItem('userId');
  const userToken = sessionStorage.getItem('userToken');

  if (userId && userToken) {
    options.headers = { // eslint-disable-line no-param-reassign
      ...options.headers,
      Authorization: `Bearer ${userToken}`,
    };
  }

  return fetch(url, options);
};
