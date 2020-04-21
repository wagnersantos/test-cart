import React from 'react';
import { Left, Body, Right, Button } from 'native-base';

import { StyledHeader, StyledIcon, StyledTitle } from './styled';

export default function AppHeader() {
  return (
    <StyledHeader>
      <Left>
        <Button transparent>
          <StyledIcon name="menu" fontSize="30" />
        </Button>
      </Left>
      <Body>
        <StyledTitle>produtos</StyledTitle>
      </Body>
      <Right>
        <Button transparent>
          <StyledIcon name="search" fontSize="24" />
        </Button>
        <Button transparent>
          <StyledIcon name="heart" fontSize="24" />
        </Button>
      </Right>
    </StyledHeader>
  );
}
