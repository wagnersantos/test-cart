import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Item, Input } from 'native-base';
import PropTypes from 'prop-types';

import { colors } from 'core/assets/styles';
import { Container, StyledIcon, StyledItem, StyledInput } from './styled';

const Counter = ({ callBack, initialValue, disabled }) => {
  const [count, setCount] = useState(initialValue);
  const incrementCount = () => {
    const increment = count + 1;
    setCount(increment);
    callBack(increment);
  };

  const decrementCount = () => {
    const decrement = count - 1;

    if (decrement >= 1) {
      setCount(decrement);
      callBack(decrement);
    }
  };

  return (
    <Container>
      <TouchableOpacity
        disable={disabled}
        onPress={() => (disabled ? null : decrementCount())}
      >
        <StyledIcon
          type="MaterialCommunityIcons"
          name="minus-box-outline"
          color="grayLight"
          disable={disabled}
          fontSize={36}
        />
      </TouchableOpacity>
      <StyledItem>
        <StyledInput
          onChangeText={() => {}}
          value={`${String(count)} un`}
          color={count === 0 ? 'grayLight' : 'grayMidnight'}
        />
      </StyledItem>
      <TouchableOpacity
        disable={disabled}
        onPress={() => (disabled ? null : incrementCount())}
      >
        <StyledIcon
          type="MaterialCommunityIcons"
          name="plus-box-outline"
          color="green"
          disable={disabled}
          fontSize={35}
        />
      </TouchableOpacity>
    </Container>
  );
};

Counter.defaultProps = {
  callBack: () => {},
  initialValue: 0,
  disabled: false,
};

Counter.propTypes = {
  callBack: PropTypes.func,
  initialValue: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Counter;
