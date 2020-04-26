import styled from 'styled-components/native';
import { Text } from 'native-base';

import { colors, typographies } from 'core/assets/styles';

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled(Text)`
  font-family: ${typographies.exoRegular};
  font-size: 16px;
  color: ${colors.green};
  padding-bottom: 3px;
`;

export const Price = styled(Text)`
  font-family: ${typographies.exoBold};
  font-weight: bold;
  font-size: 26px;
  color: ${colors.green};
`;

export const Cents = styled(Text)`
  font-family: ${typographies.exoRegular};
  font-size: 14px;
  color: ${colors.green};
  padding-bottom: 3px;
`;
