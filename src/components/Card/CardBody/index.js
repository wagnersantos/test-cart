import React from 'react';
import { CardItem } from 'native-base';

const CardBody = ({ children, ...rest }) => (
  <CardItem bordered cardBody {...rest}>
    {children}
  </CardItem>
);

export default CardBody;
