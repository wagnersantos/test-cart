import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CardItem } from 'native-base';

import Tag from '../../Tag';

import { RemoveButton, ButtonIcon } from './styled';

const CardFooter = ({ products, value }) => {
  const [removeCart, isVisibleRemove] = value;

  return (
    <CardItem bordered cardBody>
      <Tag color="black">{`sku ${products.sku}`}</Tag>
      <Tag color="green">{products.category}</Tag>
      <TouchableOpacity>
        <ButtonIcon type="MaterialCommunityIcons" name="information-outline" />
      </TouchableOpacity>
      <TouchableOpacity>
        <ButtonIcon
          type="MaterialCommunityIcons"
          name="clipboard-text-outline"
        />
      </TouchableOpacity>
      {isVisibleRemove && (
        <RemoveButton onPress={removeCart}>
          <ButtonIcon type="MaterialCommunityIcons" name="trash-can-outline" />
        </RemoveButton>
      )}
    </CardItem>
  );
};

export default CardFooter;
