import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { CardItem } from 'native-base';

import { currency } from 'core/utils/currency';

import Counter from '../../Counter';

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

const CardBody = ({ products, value }) => {
  const [actualValue, setActualValue, total, setTotal] = value;

  const handleCounter = useCallback(count => {
    const value = Number(products.price) * Number(count);
    setTotal(value);
  }, []);

  return (
    <CardItem bordered cardBody>
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
    </CardItem>
  );
};

export default CardBody;
