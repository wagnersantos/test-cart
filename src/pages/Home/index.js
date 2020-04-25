import React, { useState, useCallback } from 'react';
import { Container, Text, Icon, List, Spinner } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';

import { AppHeader } from 'components';

import { selectors } from './store/reducer';
import { actions } from './store/actions';

import CardContent from './CardContent';

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
  const [indexVisible, setIndexVisible] = useState(1);

  const loaders = useSelector(state => selectors.getLoaders(state));
  const products = useSelector(state => selectors.getProducts(state));

  const quantityProducts = products.length;
  const results = `Mostrando ${indexVisible} de ${quantityProducts} produtos`;

  const dispatch = useDispatch();
  const getProducts = () => dispatch(actions.fetchProducts.request());
  React.useEffect(() => {
    getProducts();
  }, []);

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    setIndexVisible(viewableItems[0].index + 1);
  }, []);

  const itemVisiblePercentThreshold = {
    itemVisiblePercentThreshold: quantityProducts,
  };

  return (
    <Container>
      <AppHeader title="produtos" />

      <StyledContent>
        {loaders.productsList && !products.length ? (
          <Spinner color="black" />
        ) : (
          <>
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
            <Results>{results}</Results>
            <List
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={itemVisiblePercentThreshold}
              keyExtractor={item => item.sku}
              dataArray={products}
              renderRow={item => <CardContent products={item} />}
            />
          </>
        )}
      </StyledContent>
    </Container>
  );
}
