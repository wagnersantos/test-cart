import { call, put, all, takeLatest } from 'redux-saga/effects';

import Providers from 'core/providers';
import { actions, types } from './actions';

const typeProducts = 'product';

export function* loadProducts() {
  try {
    yield put(actions.updateLoaders({ productsList: true }));
    const products = yield call(Providers.service, {
      path: `/${typeProducts}`,
    });

    yield put(actions.fetchProducts.receive(products));
  } catch (error) {
    const message = error.response?.data?.message;
    yield put(actions.fetchProducts.error(message));
  } finally {
    yield put(actions.updateLoaders({ productsList: false }));
  }
}

export default function* root() {
  yield all([takeLatest(types.FETCH_PRODUCTS.REQUEST, loadProducts)]);
}
