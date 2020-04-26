import { call, put, all, takeLatest } from 'redux-saga/effects';

import { actions as actionsSnackbar } from 'components/Snackbar/store/actions';

import Providers from 'core/providers';
import { actions, types } from './actions';

const typeCart = 'cart';
const { showSnackbar } = actionsSnackbar;

export function* loadCart() {
  try {
    yield put(actions.updateLoaders({ itemsCartList: true }));
    const cart = yield call(Providers.service, {
      path: `/${typeCart}`,
    });

    yield put(actions.fetchCart.receive(cart));
  } catch (error) {
    const message = error.response?.data?.message;
    yield put(actions.fetchCart.error(message));
  } finally {
    yield put(actions.updateLoaders({ itemsCartList: false }));
  }
}

export function* addCart({ payload }) {
  try {
    yield put(actions.updateLoaders({ itemsCartList: true }));
    yield call(Providers.service, {
      method: 'POST',
      path: `/${typeCart}/add`,
      params: payload,
    });

    yield put(actions.fetchCart.request());
    yield put(showSnackbar('Produto adicionado com sucesso'));
  } catch (error) {
    const message = error.response?.data?.message;

    yield put(showSnackbar('Erro ao adicionar produto!'));

    yield put(actions.addCart.error(message));
  } finally {
    yield put(actions.updateLoaders({ itemsCartList: false }));
  }
}

export function* deleteCart({ payload }) {
  try {
    yield put(actions.updateLoaders({ itemsCartList: true }));
    yield call(Providers.service, {
      method: 'DELETE',
      path: `/${typeCart}/remove/${payload}`,
    });
    yield put(actions.fetchCart.request());
    yield put(showSnackbar('Produto deletado com sucesso!'));
  } catch (error) {
    const message = error.response?.data?.message;
    yield put(actions.deleteCart.error(message));

    yield put(showSnackbar('Erro ao deleter produto!'));
  } finally {
    yield put(actions.updateLoaders({ itemsCartList: false }));
  }
}

export default function* root() {
  yield all([takeLatest(types.FETCH_CART.REQUEST, loadCart)]);
  yield all([takeLatest(types.ADD_CART.REQUEST, addCart)]);
  yield all([takeLatest(types.DELETE_CART.REQUEST, deleteCart)]);
}
