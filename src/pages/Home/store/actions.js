import { createAction } from 'redux-actions';
import {
  createType,
  createAsyncTypes,
  createAsyncActions,
} from 'core/utils/reduxAsync';

export const types = {
  UPDATE_LOADERS: createType('products', 'UPDATE_LOADERS'),
  FETCH_PRODUCTS: createAsyncTypes('products', 'FETCH_PRODUCTS'),
};

export const actions = {
  fetchProducts: createAsyncActions(types.FETCH_PRODUCTS),
  updateLoaders: createAction(types.UPDATE_LOADERS),
};
