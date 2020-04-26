import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'native-base';

import { actions } from './store/actions';
import { selectors } from './store/reducer';

import { AppHeader } from 'components';

import CardContent from './CardContent';
import ProductsContent from './ProductsContent';
import ValuesContent from './ValuesContent';
import BottomContent from './BottomContent';

import { StyledContent, Bottom } from './styled';

export default function Cart() {
  const cart = useSelector(state => selectors.getCart(state));

  const dispatch = useDispatch();
  const getCart = () => dispatch(actions.fetchCart.request());
  const deleteCart = sku => dispatch(actions.deleteCart.request(sku));

  const totalCart = cart?.items?.length || 0;

  const sum = cart.items
    .map(({ product, quantity }) => product.price * quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  const removeAllCart = () => {
    cart.items.map(({ product }) => deleteCart(product.sku));
  };

  React.useEffect(() => {
    getCart();
  }, []);

  return (
    <Container>
      <AppHeader title="carrinho" total={totalCart} />
      <StyledContent>
        <CardContent title="produtos">
          <ProductsContent cart={cart} total={totalCart} />
        </CardContent>

        <CardContent title="valores totais">
          <ValuesContent cart={cart} sum={sum} />
        </CardContent>

        <Bottom>
          <BottomContent sum={sum} removeAllCart={removeAllCart} />
        </Bottom>
      </StyledContent>
    </Container>
  );
}
