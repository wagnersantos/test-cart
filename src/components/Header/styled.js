import styled from 'styled-components/native';
import { Header, Icon, Title } from 'native-base';

import { colors } from 'core/assets/styles';

export const StyledHeader = styled(Header)`
  background-color: ${colors.green};
`;

export const StyledIcon = styled(Icon)`
  color: ${colors.white};
  font-size: ${({ fontSize }) => fontSize}px;
`;
export const StyledTitle = styled(Title)`
  color: ${colors.white};
  text-transform: uppercase;
`;
