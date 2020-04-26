import React from 'react';
import { Left, Body, Right, Button } from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

import Bar from '../StatusBar';
import { StyledHeader, StyledIcon, StyledTitle, StyledBadge } from './styled';

const AppHeader = ({ title, total }) => {
  const goToPage = page => Actions.jump(page);

  return (
    <StyledHeader>
      <Bar />
      <Left style={{ flex: 1 }}>
        <Button transparent>
          <StyledIcon name="menu" fontSize="30" />
        </Button>
      </Left>
      <Body style={{ flex: 1 }}>
        <StyledTitle>{title}</StyledTitle>
      </Body>
      <Right style={{ flex: 1 }}>
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
          <StyledBadge>{total}</StyledBadge>
        </Button>
      </Right>
    </StyledHeader>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default AppHeader;
