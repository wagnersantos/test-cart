import React, { useState } from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

import { alertConfirm } from 'core/utils/alert';

import { StyledCard } from './styled';

const AppCard = ({ products }) => {
  const [actualValue, setActualValue] = useState('0 un');
  const [total, setTotal] = useState(0);
  const isVisibleRemove = total > 0;

  const confirm = () => {
    setActualValue('0 un');
    setTotal(0);
  };

  const removeCart = () => {
    alertConfirm({ confirm });
  };

  return (
    <StyledCard>
      <CardHeader products={products} />

      <CardBody
        products={products}
        value={[actualValue, setActualValue, total, setTotal]}
      />

      <CardFooter products={products} value={[removeCart, isVisibleRemove]} />
    </StyledCard>
  );
};

export default AppCard;
