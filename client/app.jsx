import React from 'react';
import { render } from 'react-dom';

import Routing from './routing';

const App = () => <Routing />;

render(<App />, document.getElementById('root'));
