/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity } from 'react-native';
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
        <TouchableOpacity
          onPress={() => goToPage('home')}
          style={{ marginRight: 10 }}
        >
          <StyledIcon
            type="MaterialCommunityIcons"
            name="home-plus"
            fontSize="30"
          />
        </TouchableOpacity>
        <TouchableOpacity
          transparent
          onPress={() => goToPage('cart')}
          style={{ marginRight: 10 }}
        >
          <StyledIcon type="MaterialCommunityIcons" name="cart" fontSize="24" />
        </TouchableOpacity>
        {!!total && <StyledBadge colorText="black">{total}</StyledBadge>}
      </Right>
    </StyledHeader>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default AppHeader;
