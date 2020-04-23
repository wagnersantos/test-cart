import styled from 'styled-components/native';

import { colors, typographies } from 'core/assets/styles';

export const Container = styled.View`
  background-color: ${({ color }) => colors[color]};
  padding: 2px 10px;
  border-radius: 4px;
  margin: 10px 0;
  margin-right: 10px;
`;

export const Label = styled.Text`
  font-family: ${typographies.exoSemiBold};
  color: white;
  text-transform: uppercase;
  font-size: 9px;
`;
