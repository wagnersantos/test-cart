import React from 'react';

import { Content, Label, Price, Cents } from './styled';

const ValuesContent = ({ cart }) => {
  const sum = cart.items
    .map(({ product, quantity }) => product.price * quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

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
