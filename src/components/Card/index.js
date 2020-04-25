import React from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

import { StyledCard } from './styled';

const Card = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
