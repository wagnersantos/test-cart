import styled from 'styled-components/native';
import { Icon, Item, Input } from 'native-base';

import { colors } from 'core/assets/styles';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 80px;
  height: 32px;
  padding: 0;
`;

export const StyledIcon = styled(Icon)`
  color: ${({ disabled, color }) =>
    disabled ? colors.disabled : colors[color]};
  font-size: ${({ fontSize }) => fontSize}px;
`;

export const StyledItem = styled(Item)`
  width: 70px;
  height: 25px;
  margin: 7px;
`;

export const StyledInput = styled(Input)`
  text-align: center;
  color: ${({ color }) => colors[color]};
  font-size: 18px;
  font-weight: bold;
`;
