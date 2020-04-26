import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Icon } from 'native-base';

import { colors, typographies } from 'core/assets/styles';

export const StyledContent = styled.View`
  margin: 20px 0;
  padding: 0 16px;
`;

export const ValuesContent = styled.View`
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

export const ProductsContent = styled.View`
  flex-direction: row;
  padding: 6px 0;
`;

export const Title = styled(Text)`
  font-family: ${typographies.exoBold};
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.black};
  font-weight: bold;
`;

export const Quantity = styled(Text)`
  font-family: ${typographies.exoBold};
  font-weight: bold;
  color: ${colors.gray};
  padding: 0 30px;
`;

export const PPrice = styled(Text)`
  color: ${colors.green};
`;

export const Left = styled.View`
  flex: 0.6;
`;

export const Right = styled.View`
  flex: 0.4;
  flex-direction: row;
  justify-content: flex-end;
`;
export const FooterContent = styled.View`
  position: absolute;
  bottom: 5px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledIcon = styled(Icon)`
  color: ${({ disabled, color }) =>
    disabled ? colors.disabled : colors[color]};
  font-size: ${({ fontSize }) => fontSize}px;
`;

export const Bottom = styled.View`
  padding-top: 30px;
`;

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
