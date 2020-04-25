import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { CardItem } from 'native-base';

import Tag from '../Tag';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

import { StyledCard, RemoveButton, ButtonIcon } from './styled';

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

      <CardItem bordered cardBody>
        <Tag color="black">{`sku ${products.sku}`}</Tag>
        <Tag color="green">{products.category}</Tag>
        <TouchableOpacity>
          <ButtonIcon
            type="MaterialCommunityIcons"
            name="information-outline"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ButtonIcon
            type="MaterialCommunityIcons"
            name="clipboard-text-outline"
          />
        </TouchableOpacity>
        {isVisibleRemove && (
          <RemoveButton onPress={removeCart}>
            <ButtonIcon
              type="MaterialCommunityIcons"
              name="trash-can-outline"
            />
          </RemoveButton>
        )}
      </CardItem>
    </StyledCard>
  );
};

export default AppCard;
