import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Icon } from 'native-base';

import { colors, typographies } from 'core/assets/styles';

export const MainContent = styled.View`
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
