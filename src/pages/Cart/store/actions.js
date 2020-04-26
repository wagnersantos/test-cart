import { createAction } from 'redux-actions';
import {
  createType,
  createAsyncTypes,
  createAsyncActions,
} from 'core/utils/reduxAsync';

export const types = {
  UPDATE_LOADERS: createType('cart', 'UPDATE_LOADERS'),
  FETCH_CART: createAsyncTypes('cart', 'FETCH_CART'),
  ADD_CART: createAsyncTypes('cart', 'ADD_CART'),
  DELETE_CART: createAsyncTypes('cart', 'DELETE_CART'),
};

export const actions = {
  updateLoaders: createAction(types.UPDATE_LOADERS),
  fetchCart: createAsyncActions(types.FETCH_CART),
  addCart: createAsyncActions(types.ADD_CART),
  deleteCart: createAsyncActions(types.DELETE_CART),
};
