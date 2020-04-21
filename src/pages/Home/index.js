import React from 'react';
import { Container, Content } from 'native-base';

import { AppHeader } from 'components';

// import { Container } from './styled';

export default function Home() {
  return (
    <Container>
      <Content>
        <AppHeader title="produtos" />;
      </Content>
    </Container>
  );
}
