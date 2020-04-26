/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from 'react';
import { Container, List, Spinner } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';

import { AppHeader } from 'components';

import { selectors as selectorsCart } from 'pages/Cart/store/reducer';
import { actions as actionsCart } from 'pages/Cart/store/actions';
import { selectors } from './store/reducer';
import { actions } from './store/actions';

import CardContent from './CardContent';
import SearchLine from './SearchLine';

import { StyledContent, Results } from './styled';

export default function Home() {
  const [indexVisible, setIndexVisible] = useState(1);

  const loaders = useSelector(state => selectors.getLoaders(state));
  const products = useSelector(state => selectors.getProducts(state));
  const cart = useSelector(state => selectorsCart.getCart(state));

  const dispatch = useDispatch();
  const getProducts = () => dispatch(actions.fetchProducts.request());
  const getCart = () => dispatch(actionsCart.fetchCart.request());

  const quantityProducts = products.length;
  const results = `Mostrando ${indexVisible} de ${quantityProducts} produtos`;
  const totalCart = cart?.items?.length || 0;

  React.useEffect(() => {
    getProducts();
    getCart();
  }, []);

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    setIndexVisible(viewableItems[0].index + 1);
  }, []);

  const itemVisiblePercentThreshold = {
    itemVisiblePercentThreshold: quantityProducts,
  };

  return (
    <Container>
      <AppHeader title="produtos" total={totalCart} />

      <StyledContent>
        {loaders.productsList && !products.length ? (
          <Spinner color="black" />
        ) : (
          <>
            <SearchLine />
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
