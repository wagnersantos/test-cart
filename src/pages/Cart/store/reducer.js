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
  },
  initialState,
);

export const selectors = {
  getLoaders: state => state.cart.loaders,
};
