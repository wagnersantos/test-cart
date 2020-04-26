import React from 'react';
import PropTypes from 'prop-types';
import { CardItem } from 'native-base';

const CardBody = ({ children, ...rest }) => (
  <CardItem bordered cardBody {...rest}>
    {children}
  </CardItem>
);

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardBody;
