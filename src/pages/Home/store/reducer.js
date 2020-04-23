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
