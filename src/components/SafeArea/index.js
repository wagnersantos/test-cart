import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

export default function SafeArea({ children }) {
  return <Container>{children}</Container>;
}

SafeArea.propTypes = {
  children: PropTypes.node.isRequired,
};
