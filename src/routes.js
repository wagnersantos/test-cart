import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Cart from 'pages/Cart';
import Home from 'pages/Home';

const Routes = () => (
  <Router gesturesEnabled={false}>
    <Stack key="root">
      <Scene key="cart" component={Cart} hideNavBar />
      <Scene key="home" component={Home} hideNavBar initial />
    </Stack>
  </Router>
);

export default Routes;
