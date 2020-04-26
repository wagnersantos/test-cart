import React from 'react';

import { Content, Label, Price, Cents } from './styled';

const ValuesContent = ({ cart, sum }) => {
  const [price = 0, cents = '00'] = sum.toString().split('.');

  return (
    <Content>
      <Label>R$ </Label>
      <Price>{price}</Price>
      <Cents>{`,${cents}`}</Cents>
    </Content>
  );
};

export default ValuesContent;
