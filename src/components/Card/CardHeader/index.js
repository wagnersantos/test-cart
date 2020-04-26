import React from 'react';
import PropTypes from 'prop-types';
import { CardItem } from 'native-base';

const CardHeader = ({ children, ...rest }) => {
  return (
    <CardItem bordered cardBody {...rest}>
      {children}
    </CardItem>
  );
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardHeader;
