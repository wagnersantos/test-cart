import React from 'react';

import { Card } from 'components';

import { Title, StyledBody, StyledCard } from './styled';

const CardContent = ({ title, children }) => (
  <StyledCard>
    <Card.Header>
      <Title>{title}</Title>
    </Card.Header>
    <StyledBody>{children}</StyledBody>
  </StyledCard>
);

export default CardContent;
