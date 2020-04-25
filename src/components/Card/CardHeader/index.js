import React from 'react';
import { CardItem } from 'native-base';

const CardHeader = ({ children, ...rest }) => {
  return (
    <CardItem bordered cardBody {...rest}>
      {children}
    </CardItem>
  );
};

export default CardHeader;
