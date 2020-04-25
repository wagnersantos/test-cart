import React, { useCallback } from 'react';
import { View } from 'react-native';

import { currency } from 'core/utils/currency';

import { Counter } from 'components';

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
  const [
    actualValue,
    setActualValue,
    total,
    setTotal,
    addCart,
    deleteCart,
  ] = value;

  const handleCounter = useCallback(count => {
    const quantity = Number(count);
    const { price, sku } = products;

    const value = Number(price) * quantity;
    setTotal(value);

    count > 0 && addCart({ quantity, sku });
  }, []);

  return (
    <>
      <StyledBody>
        <Left>
          <StyledImage
            source={{
              uri: products.imageURL,
            }}
          />
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
    </>
  );
};

export default Body;
