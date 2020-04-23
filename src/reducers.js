import { combineReducers } from 'redux';

import products from 'pages/Home/store/reducer';

const reducers = combineReducers({ products });

export default reducers;
