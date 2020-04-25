import React from 'react';
import { CardItem } from 'native-base';

import Tag from '../../Tag';

import { Title, LastUnits } from './styled';

const CardHeader = ({ products }) => {
  const isUnavailable = products.quantityAvailable === 0;
  const isLastUnits = products.quantityAvailable <= 10;

  const fullWidth = isUnavailable || isLastUnits;

  return (
    <CardItem bordered cardBody style={{ justifyContent: 'space-between' }}>
      <Title fullWidth={fullWidth} numberOfLines={1}>
        {products.name}
      </Title>
      {isUnavailable ? (
        <Tag color="black">sem estoque</Tag>
      ) : (
        isLastUnits && <LastUnits color="red">últimas unidades</LastUnits>
      )}
    </CardItem>
  );
};
export default CardHeader;
