import React from 'react';
import { render } from 'react-dom';

import Routes from './routing/Routes';

const App = () => <Routes />;

render(<App />, document.getElementById('root'));
