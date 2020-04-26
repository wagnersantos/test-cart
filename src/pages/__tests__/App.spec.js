import 'react-native';
import AxiosMock from 'axios-mock-adapter';
import { runSaga } from 'redux-saga';
import { cleanup } from '@testing-library/react-native';

import { loadProducts } from 'pages/Home/store/saga';
import { loadCart } from 'pages/Cart/store/saga';

import api from 'core/providers/api';

import { actions as actionsProducts } from 'pages/Home/store/actions';
import { actions as actionsCart } from 'pages/Cart/store/actions';
import { addCart, deleteCart } from '../Cart/store/saga';

const apiMock = new AxiosMock(api);

afterEach(cleanup);

const mockProducts = {
  sku: 'P00020548',
  name: 'CIMEGRIPE C/ 20CPS (PARAC+FENIL+CLOR',
  imageURL:
    'http://images.nexfar.com.br/unsafe/0x800/https://nexfar-static-public.s3-sa-east-1.amazonaws.com/dismed-sap/7896523200576.png',
  category: 'SIMILARES',
  maker: 'CIMED',
  quantityAvailable: 3346,
  price: 4.79,
};

const mockCart = {
  items: [
    {
      product: {
        sku: 'P00020548',
        name: 'CIMEGRIPE C/ 20CPS (PARAC+FENIL+CLOR',
        imageURL:
          'http://images.nexfar.com.br/unsafe/0x800/https://nexfar-static-public.s3-sa-east-1.amazonaws.com/dismed-sap/7896523200576.png',
        category: 'SIMILARES',
        maker: 'CIMED',
        quantityAvailable: 3346,
        price: 4.79,
      },
      quantity: 1,
    },
  ],
};

describe('Tests api', () => {
  it('should to be able to list products', async () => {
    apiMock.onGet('product').reply(200, mockProducts);

    const dispatch = jest.fn();
    await runSaga({ dispatch }, loadProducts).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      actionsProducts.fetchProducts.receive(mockProducts),
    );
  });

  it('should to be able to get cart', async () => {
    apiMock.onGet('cart').reply(200, mockCart);

    const dispatch = jest.fn();
    await runSaga({ dispatch }, loadCart).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      actionsCart.fetchCart.receive(mockCart),
    );
  });

  it('should to be able to add cart', async () => {
    apiMock.onPost('cart/add').reply(200, { sku: 'P00020548', quantity: 1 });

    const dispatch = jest.fn();
    await runSaga({ dispatch }, addCart, {
      payload: { sku: 'P00020548', quantity: 1 },
    }).toPromise();

    expect(dispatch).toBeCalled();
  });

  it('should to be able to delete cart', async () => {
    apiMock.onDelete('cart/remove/P00020548').reply(200);

    const dispatch = jest.fn();
    await runSaga({ dispatch }, deleteCart, {
      payload: { sku: 'P00020548' },
    }).toPromise();

    expect(dispatch).toBeCalled();
  });
});
