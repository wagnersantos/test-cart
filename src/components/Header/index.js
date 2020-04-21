import React from 'react';
import { Left, Body, Right, Button } from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

import { StyledHeader, StyledIcon, StyledTitle } from './styled';

const AppHeader = ({ title }) => {
  const goToPage = page => Actions.jump(page);

  return (
    <StyledHeader>
      <Left>
        <Button transparent>
          <StyledIcon name="menu" fontSize="30" />
        </Button>
      </Left>
      <Body>
        <StyledTitle>{title}</StyledTitle>
      </Body>
      <Right>
        <Button transparent onPress={() => goToPage('home')}>
          <StyledIcon
            type="MaterialCommunityIcons"
            name="home-plus"
            fontSize="30"
          />
        </Button>
        <Button transparent onPress={() => goToPage('cart')}>
          <StyledIcon
            type="MaterialCommunityIcons"
            name="cart-outline"
            fontSize="24"
          />
        </Button>
      </Right>
    </StyledHeader>
  );
};
AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppHeader;
