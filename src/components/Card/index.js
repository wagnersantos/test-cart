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

const AppCard = () => (
  <StyledCard>
    <CardItem bordered cardBody style={{ justifyContent: 'space-between' }}>
      <Title>3x protein po sac 300g</Title>
      <LastUnits color="red">últimas unidades</LastUnits>
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
      <Tag color="black">SKU 10940</Tag>
      <Tag color="green">suplementos</Tag>
      <TouchableOpacity>
        <ButtonIcon type="MaterialCommunityIcons" name="information-outline" />
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

export default AppCard;
