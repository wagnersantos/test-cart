import React from 'react';
import PropTypes from 'prop-types';

import { Container, StyledImage, Row, Label, StyledText } from './styled';

const ModalContent = ({ products }) => (
  <Container>
    <Row>
      <Label>nome: </Label>
      <StyledText>{products.name}</StyledText>
    </Row>
    <Row>
      <Label>fabricante: </Label>
      <StyledText>{products.maker}</StyledText>
    </Row>
    <Row>
      <StyledImage
        source={{
          uri: products.imageURL,
        }}
      />
    </Row>
  </Container>
);

ModalContent.propTypes = {
  products: PropTypes.instanceOf(Object).isRequired,
};

export default ModalContent;
