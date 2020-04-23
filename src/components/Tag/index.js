import React from 'react';

import { Container, Label } from './styled';

const Tag = ({ children, color }) => (
  <Container color={color}>
    <Label>{children}</Label>
  </Container>
);

export default Tag;
