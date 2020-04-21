import React from 'react';
import PropTypes from 'prop-types';

import { StyledBadge, StyledText } from './styled';

const Badge = ({ children, size, color, colorText, ...rest }) => (
  <StyledBadge size={size} color={color} {...rest}>
    <StyledText colorText={colorText}>{children}</StyledText>
  </StyledBadge>
);

Badge.defaultProps = {
  children: {},
  size: 0.5,
  color: 'white',
  colorText: 'black',
};

Badge.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  color: PropTypes.string,
  colorText: PropTypes.string,
};

export default Badge;
