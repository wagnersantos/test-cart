import React from 'react';

import { Content, Label, Price, Cents } from './styled';

const ValuesContent = ({ cart, sum }) => {
  const [price, cents] = sum.toString().split('.');

  return (
    <Content>
      <Label>R$ </Label>
      <Price>{price}</Price>
      <Cents>{`,${cents}`}</Cents>
    </Content>
  );
};

export default ValuesContent;
