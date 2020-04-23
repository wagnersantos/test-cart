import React from 'react';

import { Container, Label } from './styled';

const Tag = ({ children, color, ...rest }) => (
  <Container color={color} {...rest}>
    <Label>{children}</Label>
  </Container>
);

export default Tag;
