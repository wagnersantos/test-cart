import { handleActions } from 'redux-actions';
import { types } from './actions';

export const initialState = {
  itemsCart: [],
  loaders: {
    itemsCartList: true,
  },
};

export default handleActions(
  {
    [types.UPDATE_LOADERS]: (state, { payload }) => ({
      ...state,
      loaders: { ...state.loaders, ...payload },
    }),
    [types.FETCH_CART.SUCCESS]: (state, { payload }) => ({
      ...state,
      itemsCart: payload,
    }),
  },
  initialState,
);

export const selectors = {
  getLoaders: state => state.cart.loaders,
  getCart: state => state.cart.itemsCart,
};
