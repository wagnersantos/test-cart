import React from 'react';
import PropTypes from 'prop-types';
import { CardItem } from 'native-base';

const CardFooter = ({ children, ...rest }) => (
  <CardItem bordered cardBody {...rest}>
    {children}
  </CardItem>
);

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardFooter;
