import React from 'react';

import { currency } from 'core/utils/currency';

import { Tag } from 'components';

import {
  Title,
  MainContent,
  Quantity,
  PPrice,
  Left,
  Right,
  FooterContent,
} from './styled';

const ProductsContent = ({ cart, total }) => {
  const more = total - 2 || 0;

  return (
    <>
      {cart.items.map(({ product, quantity, sku }, index) => {
        if (index < 2) {
          return (
            <MainContent key={sku}>
              <Left>
                <Title numberOfLines={1}>{product.name}</Title>
              </Left>
              <Right>
                <Quantity>{`${quantity} un`}</Quantity>
                <PPrice>R$ {currency(product.price * quantity)}</PPrice>
              </Right>
            </MainContent>
          );
        }
      })}

      <FooterContent>
        <Title>{`+ ${more} produtos`}</Title>
        <Tag color="green">ver todos</Tag>
      </FooterContent>
    </>
  );
};
export default ProductsContent;
