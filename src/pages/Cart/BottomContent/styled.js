import styled from 'styled-components/native';
import { Text, Icon } from 'native-base';

import { colors, typographies } from 'core/assets/styles';

export const Error = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InfoMain = styled(Text)`
  font-family: ${typographies.exoSemiBold};
  font-size: 14px;
  margin-left: 5px;
  text-transform: uppercase;
  color: ${colors.red};
`;

export const InfoSecondary = styled(Text)`
  font-family: ${typographies.exoRegular};
  font-size: 12px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 30px;
  text-transform: uppercase;
  color: ${colors.red};
`;

export const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`;

export const StyledText = styled(Text)`
  font-family: ${typographies.exoRegular};
  text-transform: uppercase;
  margin-left: 5px;
`;

export const StyledIcon = styled(Icon)`
  color: ${({ disabled, color }) =>
    disabled ? colors.disabled : colors[color]};
  font-size: ${({ fontSize }) => fontSize}px;
`;
