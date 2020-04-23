import React from 'react';
import { View } from 'react-native';
import { Container, Text, Icon, List, ListItem } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';

import { AppHeader, Card } from 'components';

import { selectors } from './store/reducer';
import { actions } from './store/actions';

import {
  StyledSearch,
  StyledContent,
  Wrapper,
  StyledLeft,
  StyledRight,
  StyledCheckBox,
  Results,
} from './styled';

export default function Home() {
  const products = useSelector(state => selectors.getProducts(state));
  const dispatch = useDispatch();
  const getProducts = () => dispatch(actions.fetchProducts.request());

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <AppHeader title="produtos" />

      <StyledContent>
        <Wrapper>
          <StyledLeft>
            <StyledSearch />
          </StyledLeft>
          <StyledRight>
            <StyledCheckBox />
            <Text>A Filtrar </Text>
            <Icon type="MaterialCommunityIcons" name="chevron-down" />
          </StyledRight>
        </Wrapper>
        <Results>Mostrando 2 de 320 produtos</Results>
        <List
          keyExtractor={item => item.sku}
          dataArray={products}
          renderRow={item => <Card products={item} />}
        />
      </StyledContent>
    </Container>
  );
}
