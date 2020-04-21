import React from 'react';
import { Provider } from 'react-redux';

import { Bar } from 'components';
import store from 'store';
import Routes from 'routes';

const App = () => (
  <Provider store={store}>
    <Bar />
    <Routes />
  </Provider>
);

export default App;
