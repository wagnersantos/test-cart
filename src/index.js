import React from 'react';
import { Provider } from 'react-redux';

import { Bar } from 'components';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <Bar />
  </Provider>
);

export default App;
