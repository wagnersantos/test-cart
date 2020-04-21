import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Header, Icon, Title } from 'native-base';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors } from 'core/assets/styles';

const isIos = Platform.OS === 'ios';
const headerHeight = isIos ? 54 : 30;

export const StyledHeader = styled(Header)`
  background-color: ${colors.green};
  height: ${headerHeight + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight() / 2}px;
`;

export const StyledIcon = styled(Icon)`
  color: ${colors.white};
  font-size: ${({ fontSize }) => fontSize}px;
`;
export const StyledTitle = styled(Title)`
  color: ${colors.white};
  text-transform: uppercase;
`;
