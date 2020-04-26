import React from 'react';
import PropTypes from 'prop-types';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

import { StyledCard } from './styled';

const Card = ({ children, ...rest }) => {
  return <StyledCard {...rest}>{children}</StyledCard>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
