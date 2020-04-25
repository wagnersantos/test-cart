import React from 'react';
import { CardItem } from 'native-base';

const CardFooter = ({ children, ...rest }) => (
  <CardItem bordered cardBody {...rest}>
    {children}
  </CardItem>
);

export default CardFooter;
