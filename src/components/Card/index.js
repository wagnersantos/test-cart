import React from 'react';
import { View } from 'react-native';
import { CardItem, Text, Icon } from 'native-base';

import Counter from '../Counter';

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
} from './styled';

const AppCard = () => (
  <StyledCard>
    <CardItem bordered cardBody>
      <Title>3x protein po sac 300g</Title>
    </CardItem>
    <CardItem bordered cardBody>
      <StyledBody>
        <Left>
          <StyledImage
            source={{
              uri:
                'https://www.drogariacatarinense.com.br/BACKOFFICE/Uploads/Produto/Normal/7908134200071-64961.jpg',
            }}
          />
          <Price>
            <StyledText bold>R$ </StyledText>
            <StyledText bold>28,90</StyledText>
          </Price>
        </Left>
        <Right>
          <View>
            <Row>
              <Label>fabricante: </Label>
              <StyledText>CIMED</StyledText>
            </Row>
            <Row>
              <Label>estoque: </Label>
              <StyledText>150 un</StyledText>
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
      <Text>SKU 10940</Text>
      <Text>suplementos</Text>
      <Icon type="MaterialCommunityIcons" name="information-outline" />
      <Icon type="MaterialCommunityIcons" name="clipboard-text-outline" />
      <Icon type="MaterialCommunityIcons" name="trash-can-outline" />
    </CardItem>
  </StyledCard>
);

export default AppCard;
