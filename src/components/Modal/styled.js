import styled from 'styled-components/native';

import { colors, metrics } from 'core/assets/styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const StyledModal = styled.Modal`
  background-color: ${colors.white};
  border-radius: 5px;
  elevation: 5;
`;

export const Content = styled.View.attrs({
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
})`
  width: ${metrics.screenWidth - 30}px;
  height: ${metrics.screenHeight - 150}px;
  background-color: ${colors.white};
  border-radius: 5px;
  elevation: 5;
`;

export const ButtonClose = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  right: -5px;
`;
