import React from 'react';
import { Container, Content, Left, Right } from 'native-base';

import { AppHeader, Search } from 'components';

// import { Container } from './styled';

export default function Home() {
  return (
    <Container>
      <AppHeader title="produtos" />

      <Content>
        <Left>
          <Search />
        </Left>
        <Right />
      </Content>
    </Container>
  );
}
