import { combineReducers } from 'redux';

import addCart from 'pages/Cart/store/reducer';
import products from 'pages/Home/store/reducer';
import snackbars from 'components/Snackbar/store/reducer';

const reducers = combineReducers({ products, addCart, snackbars });

export default reducers;
