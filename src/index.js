import React from 'react';
import { Provider } from 'react-redux';

import { Snackbar } from 'components';
import store from 'store';
import Routes from 'routes';

const App = () => (
  <Provider store={store}>
    <Routes />
    <Snackbar />
  </Provider>
);

export default App;
