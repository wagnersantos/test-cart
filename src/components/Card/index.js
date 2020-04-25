import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CardItem } from 'native-base';

import { currency } from 'core/utils/currency';

import Counter from '../Counter';
import Tag from '../Tag';

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
  const [total, setTotal] = useState(0);

  const isUnavailable = products.quantityAvailable === 0;
  const isLastUnits = products.quantityAvailable <= 10;
  const isVisibleRemove = total > 0;

  const fullWidth = isUnavailable || isLastUnits;

  const handleCounter = useCallback(count => {
    const value = products.price * count;
    setTotal(value);
  }, []);

  return (
    <StyledCard>
      <CardItem bordered cardBody style={{ justifyContent: 'space-between' }}>
        <Title fullWidth={fullWidth} numberOfLines={1}>
          {products.name}
        </Title>
        {isUnavailable ? (
          <Tag color="black">sem estoque</Tag>
        ) : (
          isLastUnits && <LastUnits color="red">últimas unidades</LastUnits>
        )}
      </CardItem>

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
              <Counter callBack={count => handleCounter(count)} />
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
          <RemoveButton>
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
