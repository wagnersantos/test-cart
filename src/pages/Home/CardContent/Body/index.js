import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import debounce from 'lodash/debounce';

import { currency } from 'core/utils/currency';

import { Counter, Modal } from 'components';

import ModalContent from './ModalContent';

import {
  StyledBody,
  Left,
  Right,
  StyledImage,
  Price,
  Label,
  Row,
  StyledText,
} from './styled';

const Body = ({ products, value }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [
    actualValue,
    setActualValue,
    total,
    setTotal,
    addCart,
    deleteCart,
  ] = value;

  const handleCounter = debounce(
    useCallback(count => {
      const quantity = Number(count);
      const { price, sku } = products;

      const value = Number(price) * quantity;
      setTotal(value);

      count > 0 && addCart({ quantity, sku });
    }, []),
    300,
  );

  return (
    <>
      <StyledBody>
        <Left>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <StyledImage
              source={{
                uri: products.imageURL,
              }}
            />
          </TouchableOpacity>
          <Price>
            <StyledText bold>R$ </StyledText>
            <StyledText bold>{currency(products.price)}</StyledText>
          </Price>
        </Left>
        <Right>
          <View>
            <Row>
              <Label>fabricante: </Label>
              <StyledText>{products.maker}</StyledText>
            </Row>
            <Row>
              <Label>estoque: </Label>
              <StyledText>{`${products.quantityAvailable} un`}</StyledText>
            </Row>
          </View>
          <Row margin={10}>
            <Counter
              callBack={count => handleCounter(count)}
              actualValue={actualValue}
              setActualValue={setActualValue}
              deleteCart={() => deleteCart(products.sku)}
            />
          </Row>
          <Row>
            {!!total && (
              <>
                <Label>valor total: </Label>
                <StyledText bold>{`R$ ${currency(total)}`}</StyledText>
              </>
            )}
          </Row>
        </Right>
      </StyledBody>
      <Modal modal={[modalVisible, setModalVisible]}>
        <ModalContent products={products} />
      </Modal>
    </>
  );
};

export default Body;
