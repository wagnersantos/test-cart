import React from 'react';
import { Container, Content, Left, Right } from 'native-base';

import { AppHeader } from 'components';

import { StyledSearch } from './styled';

export default function Home() {
  return (
    <Container>
      <AppHeader title="produtos" />

      <Content>
        <Left>
          <StyledSearch />
        </Left>
        <Right />
      </Content>
    </Container>
  );
}
