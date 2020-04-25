import { all, fork } from 'redux-saga/effects';

import { makeRestartable } from 'core/utils/saga';
import addCartSaga from 'pages/Cart/store/saga';
import productsSaga from 'pages/Home/store/saga';

const root = makeRestartable(function* run() {
  yield all([fork(productsSaga), fork(addCartSaga)]);
});

export default root;
