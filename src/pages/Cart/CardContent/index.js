import React from 'react';
import PropTypes from 'prop-types';

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

CardContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CardContent;
