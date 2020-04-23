import { handleActions } from 'redux-actions';
import { types } from './actions';

export const initialState = {
  products: [],
  loaders: {
    productsList: true,
  },
};

export default handleActions(
  {
    [types.UPDATE_LOADERS]: (state, { payload }) => ({
      ...state,
      loaders: { ...state.loaders, ...payload },
    }),
    [types.FETCH_PRODUCTS.SUCCESS]: (state, { payload }) => ({
      ...state,
      products: payload,
    }),
  },
  initialState,
);

export const selectors = {
  getLoaders: state => state.products.loaders,
  getProducts: state => state.products.products,
};
