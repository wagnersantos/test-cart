import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  Left,
  Right,
  Text,
  Icon,
  CheckBox,
} from 'native-base';

import { AppHeader } from 'components';

import {
  StyledSearch,
  StyledContent,
  Wrapper,
  StyledLeft,
  StyledRight,
  StyledCheckBox,
} from './styled';

export default function Home() {
  return (
    <Container>
      <AppHeader title="produtos" />

      <StyledContent>
        <Wrapper>
          <StyledLeft>
            <StyledSearch />
          </StyledLeft>
          <StyledRight>
            <StyledCheckBox />
            <Text>A Filtrar </Text>
            <Icon type="MaterialCommunityIcons" name="chevron-down" />
          </StyledRight>
        </Wrapper>
      </StyledContent>
    </Container>
  );
}
