import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label } from './styled';

const Tag = ({ children, color, colorText, ...rest }) => (
  <Container color={color} {...rest}>
    <Label colorText={colorText}>{children}</Label>
  </Container>
);

Tag.defaultProps = {
  children: {},
  color: 'white',
  colorText: 'white',
};

Tag.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  colorText: PropTypes.string,
};

export default Tag;
