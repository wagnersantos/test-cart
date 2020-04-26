import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'native-base';

import { actions } from './store/actions';
import { selectors } from './store/reducer';

import { AppHeader } from 'components';

import CardContent from './CardContent';
import ProductsContent from './ProductsContent';
import ValuesContent from './ValuesContent';

import {
  StyledContent,
  Bottom,
  Error,
  InfoMain,
  InfoSecondary,
  StyledIcon,
  StyledText,
  StyledButton,
} from './styled';

export default function Cart() {
  const cart = useSelector(state => selectors.getCart(state));

  const dispatch = useDispatch();
  const getCart = () => dispatch(actions.fetchCart.request());

  const totalCart = cart?.items?.length || 0;

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
          <ValuesContent cart={cart} />
        </CardContent>

        <Bottom>
          <Error>
            <StyledIcon
              type="MaterialCommunityIcons"
              name="alert-circle-outline"
              color="red"
              fontSize={23}
            />
            <InfoMain>pedido mínimo não alcançado</InfoMain>
          </Error>
          <InfoSecondary>falta R$ 45,00</InfoSecondary>

          <StyledButton>
            <StyledIcon
              type="MaterialCommunityIcons"
              name="trash-can-outline"
              color="black"
              fontSize={18}
            />
            <StyledText>limpar carrinho</StyledText>
          </StyledButton>
        </Bottom>
      </StyledContent>
    </Container>
  );
}
