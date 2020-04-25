import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { CardItem } from 'native-base';

import { currency } from 'core/utils/currency';

import Counter from '../Counter';
import Tag from '../Tag';

import CardHeader from './CardHeader';

import {
  StyledCard,
  Title,
  StyledBody,
  Left,
  Right,
  StyledImage,
  Price,
  Label,
  Row,
  StyledText,
  RemoveButton,
  ButtonIcon,
  LastUnits,
} from './styled';

const AppCard = ({ products }) => {
  const [actualValue, setActualValue] = useState('0 un');
  const [total, setTotal] = useState(0);

  const isVisibleRemove = total > 0;

  const handleCounter = useCallback(count => {
    const value = Number(products.price) * Number(count);
    setTotal(value);
  }, []);

  const removeCart = () => {
    Alert.alert(
      '',
      'Deseja remover do carrinho ?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setActualValue('0 un');
            setTotal(0);
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <StyledCard>
      <CardHeader products={products} />

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

      <CardItem bordered cardBody>
        <Tag color="black">{`sku ${products.sku}`}</Tag>
        <Tag color="green">{products.category}</Tag>
        <TouchableOpacity>
          <ButtonIcon
            type="MaterialCommunityIcons"
            name="information-outline"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <ButtonIcon
            type="MaterialCommunityIcons"
            name="clipboard-text-outline"
          />
        </TouchableOpacity>
        {isVisibleRemove && (
          <RemoveButton onPress={removeCart}>
            <ButtonIcon
              type="MaterialCommunityIcons"
              name="trash-can-outline"
            />
          </RemoveButton>
        )}
      </CardItem>
    </StyledCard>
  );
};

export default AppCard;
