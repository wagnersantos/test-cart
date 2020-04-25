import { combineReducers } from 'redux';

import addCart from 'pages/Cart/store/reducer';
import products from 'pages/Home/store/reducer';

const reducers = combineReducers({ products, addCart });

export default reducers;
