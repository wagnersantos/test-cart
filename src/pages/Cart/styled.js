import styled from 'styled-components/native';
import { Text } from 'native-base';

import { colors, typographies } from 'core/assets/styles';

export const StyledContent = styled.View`
  margin: 20px 0;
  padding: 0 16px;
`;

export const EmptyCart = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledText = styled(Text)`
  font-family: ${typographies.exoRegular};
  color: ${colors.grayMidnight};
  text-transform: uppercase;
  margin-left: 5px;
`;
