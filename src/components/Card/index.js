import React, { useState } from 'react';
import { Alert } from 'react-native';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

import { StyledCard } from './styled';

const AppCard = ({ products }) => {
  const [actualValue, setActualValue] = useState('0 un');
  const [total, setTotal] = useState(0);
  const isVisibleRemove = total > 0;

  const removeCart = () => {
    Alert.alert(
      '',
      'Deseja remover do carrinho ?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setActualValue('0 un');
            setTotal(0);
          },
        },
      ],
      { cancelable: false },
    );
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
