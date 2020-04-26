import { combineReducers } from 'redux';

import cart from 'pages/Cart/store/reducer';
import products from 'pages/Home/store/reducer';
import snackbars from 'components/Snackbar/store/reducer';

const reducers = combineReducers({ products, cart, snackbars });

export default reducers;
