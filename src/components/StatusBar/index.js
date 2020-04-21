import React from 'react';
import { StatusBar } from 'react-native';

import { colors } from 'core/assets/styles';

const Bar = () => (
  <StatusBar barStyle="dark-content" backgroundColor={colors.green} />
);

export default Bar;
