import React from 'react';
import { Icon } from 'native-base';

import { Container, StyledModal, Content, ButtonClose } from './styled';

const ModalApp = ({ modal, children }) => {
  const [modalVisible, setModalVisible] = modal;

  return (
    <StyledModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <Container>
        <Content>
          <ButtonClose
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Icon name="close" />
          </ButtonClose>
          {children}
        </Content>
      </Container>
    </StyledModal>
  );
};

export default ModalApp;
