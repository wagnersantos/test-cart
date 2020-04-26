/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'native-base';

import { AppHeader } from 'components';
import { actions } from './store/actions';
import { selectors } from './store/reducer';

import CardContent from './CardContent';
import ProductsContent from './ProductsContent';
import ValuesContent from './ValuesContent';
import BottomContent from './BottomContent';

import { StyledContent, Bottom, EmptyCart, StyledText } from './styled';

export default function Cart() {
  const cart = useSelector(state => selectors.getCart(state));

  const dispatch = useDispatch();
  const getCart = () => dispatch(actions.fetchCart.request());
  const deleteCart = sku => dispatch(actions.deleteCart.request(sku));

  const totalCart = cart?.items?.length || 0;

  const sum =
    (!!totalCart &&
      cart.items
        .map(({ product, quantity }) => product.price * quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue)) ||
    0;

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
        {totalCart ? (
          <>
            <CardContent title="produtos">
              <ProductsContent cart={cart} total={totalCart} />
            </CardContent>

            <CardContent title="valores totais">
              <ValuesContent cart={cart} sum={sum} />
            </CardContent>

            <Bottom>
              <BottomContent sum={sum} removeAllCart={removeAllCart} />
            </Bottom>
          </>
        ) : (
          <EmptyCart>
            <StyledText>o carrinho está vazio!</StyledText>
            <StyledText>adicione produtos!</StyledText>
          </EmptyCart>
        )}
      </StyledContent>
    </Container>
  );
}
