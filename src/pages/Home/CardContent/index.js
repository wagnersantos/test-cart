import React, { useState } from 'react';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import { alertConfirm } from 'core/utils/alert';

import { Card } from 'components';

const CardContent = ({ products }) => {
  const [actualValue, setActualValue] = useState('0 un');
  const [total, setTotal] = useState(0);
  const isVisibleRemove = total > 0;

  const confirm = () => {
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
          value={[actualValue, setActualValue, total, setTotal]}
        />
      </Card.Body>

      <Card.Footer>
        <Footer products={products} value={[removeCart, isVisibleRemove]} />
      </Card.Footer>
    </Card>
  );
};

export default CardContent;
