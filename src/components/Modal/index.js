import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';

import { Container, StyledModal, Content, ButtonClose } from './styled';

const ModalApp = ({ modal, children }) => {
  const [modalVisible, setModalVisible] = modal;

  return (
    <StyledModal animationType="slide" transparent visible={modalVisible}>
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

ModalApp.propTypes = {
  modal: PropTypes.instanceOf(Array).isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalApp;
