import React from 'react';
import { Provider } from 'react-redux';

import { Bar, SafeArea } from 'components';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <SafeArea>
      <Bar />
    </SafeArea>
  </Provider>
);

export default App;
