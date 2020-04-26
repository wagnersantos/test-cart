import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { Header, Icon, Title } from 'native-base';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, typographies } from 'core/assets/styles';
import Tag from '../Tag';

const isIos = Platform.OS === 'ios';
const headerHeight = isIos ? 60 : 36;

export const StyledHeader = styled(Header)`
  background-color: ${colors.green};
  height: ${headerHeight + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight() / 3}px;
`;

export const StyledIcon = styled(Icon)`
  color: ${colors.white};
  font-size: ${({ fontSize }) => fontSize}px;
`;

export const StyledTitle = styled(Title)`
  font-family: ${typographies.exoBold};
  color: ${colors.white};
  text-transform: uppercase;
`;

export const StyledBadge = styled(Tag)`
  border-radius: 8px;
  transform: scale(0.7, 0.7);
  position: absolute;
  bottom: 7px;
  right: -20px;
`;
