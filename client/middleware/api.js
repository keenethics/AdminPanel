export const API_ROOT = 'http://localhost:3000/api/';

export const callApi = (url, options = {}) => {
  const token = sessionStorage.getItem('jwtToken');

  if (token) {
    options.headers = { // eslint-disable-line no-param-reassign
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(url, options);
};

export const CALL_API = Symbol('Call API');

export default () => next => (action) => {
  console.log(action);
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') return next(action);

  const {
    endpoint,
    types,
  } = callAPI;

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [
    requestType,
    successType,
    failureType,
  ] = types;

  next(actionWith({ type: requestType }));

  return callApi(endpoint).then(
    response => next(actionWith({
      response,
      type: successType,
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Error!',
    })),
  );
};
