import styled from 'styled-components/native';
import { Icon } from 'native-base';

export const ButtonIcon = styled(Icon)`
  font-size: ${({ fontSize }) => fontSize ?? 20}px;
`;

export const RemoveButton = styled.TouchableOpacity`
  font-size: 20px;
  position: absolute;
  right: 0;
`;
