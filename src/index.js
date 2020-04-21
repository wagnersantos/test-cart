import React from 'react';
import { Provider } from 'react-redux';

import { AppHeader, Bar, SafeArea } from 'components';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <SafeArea>
      <Bar />
      <AppHeader />
    </SafeArea>
  </Provider>
);

export default App;
