import { createAction } from 'redux-actions';
import {
  createType,
  createAsyncTypes,
  createAsyncActions,
} from 'core/utils/reduxAsync';

export const types = {
  UPDATE_LOADERS: createType('posts', 'UPDATE_LOADERS'),
  ADD_CART: createAsyncTypes('posts', 'ADD_CART'),
  DELETE_CART: createAsyncTypes('posts', 'DELETE_CART'),
};

export const actions = {
  updateLoaders: createAction(types.UPDATE_LOADERS),
  addCart: createAsyncActions(types.ADD_CART),
  deleteCart: createAsyncActions(types.DELETE_CART),
};
