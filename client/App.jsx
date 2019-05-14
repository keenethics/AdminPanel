import React from 'react';
import { render } from 'react-dom';

import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { StoreContext } from 'redux-react-hook';

import api from 'Middleware/api';
import reducers from 'Reducers';

import Routes from './routing/Routes';

const devtool = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
const composeEnhancers = typeof window === 'object' && window[devtool] ? window[devtool]({}) : compose;

const middlewares = composeEnhancers(applyMiddleware(thunk, api));

const store = createStore(reducers, middlewares);

const App = () => (
  <StoreContext.Provider value={store}>
    <Routes />
  </StoreContext.Provider>
);

render(<App />, document.getElementById('root'));
