import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Home from 'pages/Home';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} title="home" hideNavBar />
    </Stack>
  </Router>
);

export default Routes;
