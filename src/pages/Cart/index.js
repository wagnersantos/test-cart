import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Container } from 'native-base';

import { selectors } from './store/reducer';

import { AppHeader } from 'components';

import CardContent from './CardContent';
import ProductsContent from './ProductsContent';

import {
  StyledContent,
  ValuesContent,
  Label,
  Price,
  Cents,
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
  const totalCart = cart?.items?.length || 0;

  return (
    <Container>
      <AppHeader title="carrinho" total={totalCart} />
      <StyledContent>
        <CardContent title="produtos">
          <ProductsContent cart={cart} total={totalCart} />
        </CardContent>

        <CardContent title="valores totais">
          <ValuesContent>
            <Label>R$ </Label>
            <Price>305</Price>
            <Cents>,00</Cents>
          </ValuesContent>
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
