import React from 'react';
import PropTypes from 'prop-types';

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

ValuesContent.propTypes = {
  cart: PropTypes.instanceOf(Object).isRequired,
  sum: PropTypes.number.isRequired,
};

export default ValuesContent;
