import styled from 'styled-components/native';
import { CheckBox } from 'native-base';

import { colors } from 'core/assets/styles';

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const StyledLeft = styled.View`
  flex: 0.65;
`;

export const StyledRight = styled.View`
  flex: 0.35;
  flex-direction: row;
  align-items: center;
`;

export const StyledCheckBox = styled(CheckBox).attrs({
  color: colors.black,
})`
  margin-right: 15px;
  width: 15px;
  height: 15px;
`;
