import React from 'react';
import { Card, CardItem, Text, Body } from 'native-base';

// import { Container } from './styled';

const StyledCard = () => (
  <StyledCard>
    <CardItem header>
      <Text>NativeBase</Text>
    </CardItem>
    <CardItem>
      <Body>
        <Text>//Your text here</Text>
      </Body>
    </CardItem>
    <CardItem footer>
      <Text>GeekyAnts</Text>
    </CardItem>
  </StyledCard>
);

export default StyledCard;
