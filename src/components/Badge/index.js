import React from 'react';
import PropTypes from 'prop-types';

import { StyledBadge, StyledText } from './styled';

const Badge = ({ children, size, color, colorText }) => (
  <StyledBadge size={size} color={color}>
    <StyledText colorText={colorText}>{children}</StyledText>
  </StyledBadge>
);

Badge.defaultProps = {
  children: {},
  size: 0.6,
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
