import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import { alertConfirm } from 'core/utils/alert';

import { actions as actionsCart } from 'pages/Cart/store/actions';

import { Card } from 'components';

const CardContent = ({ products }) => {
  const [actualValue, setActualValue] = useState('0 un');
  const [total, setTotal] = useState(0);
  const isVisibleRemove = total > 0;

  const dispatch = useDispatch();
  const addCart = payload => dispatch(actionsCart.addCart.request(payload));
  const deleteCart = sku => dispatch(actionsCart.deleteCart.request(sku));

  const confirm = () => {
    deleteCart(products.sku);
    setActualValue('0 un');
    setTotal(0);
  };

  const removeCart = () => {
    alertConfirm({ confirm });
  };

  return (
    <Card>
      <Card.Header style={{ justifyContent: 'space-between' }}>
        <Header products={products} />
      </Card.Header>

      <Card.Body>
        <Body
          products={products}
          value={[
            actualValue,
            setActualValue,
            total,
            setTotal,
            addCart,
            deleteCart,
          ]}
        />
      </Card.Body>

      <Card.Footer>
        <Footer products={products} value={[removeCart, isVisibleRemove]} />
      </Card.Footer>
    </Card>
  );
};

export default memo(CardContent);
