import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CardItem, Icon, Button } from 'native-base';

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
  const isUnavailable = products.quantityAvailable === 0;
  const isLastUnits = products.quantityAvailable <= 10;

  return (
    <StyledCard>
      <CardItem bordered cardBody style={{ justifyContent: 'space-between' }}>
        <Title numberOfLines={1}>{products.name}</Title>
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
              <StyledText bold>{products.price}</StyledText>
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
              <Counter />
            </Row>
            <Row>
              <Label>valor total: </Label>
              <StyledText bold>R$ 289,00</StyledText>
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
        <RemoveButton>
          <ButtonIcon type="MaterialCommunityIcons" name="trash-can-outline" />
        </RemoveButton>
      </CardItem>
    </StyledCard>
  );
};

export default AppCard;
