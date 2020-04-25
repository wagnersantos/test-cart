import { call, put, all, takeLatest } from 'redux-saga/effects';

import Providers from 'core/providers';
import { actions, types } from './actions';

const typeProducts = 'cart';

export function* addCart() {
  try {
    yield put(actions.updateLoaders({ itemsCartList: true }));
    const product = yield call(Providers.service, {
      path: `/${typeProducts}/add`,
    });

    // yield put(actions.addCart.receive(product));
  } catch (error) {
    const message = error.response?.data?.message;
    yield put(actions.addCart.error(message));
  } finally {
    yield put(actions.updateLoaders({ itemsCartList: false }));
  }
}

export default function* root() {
  yield all([takeLatest(types.ADD_CART.REQUEST, addCart)]);
}
