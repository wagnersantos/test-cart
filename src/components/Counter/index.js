import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { Container, StyledIcon, StyledItem, StyledInput } from './styled';

const Counter = ({ callBack, initialValue, disabled }) => {
  const [count, setCount] = useState(initialValue);
  const [actualValue, setActualValue] = useState(formatValue);

  const formatValue = `${String(count)} un`;
  const inputColor = count === 0 ? 'grayLight' : 'grayMidnight';

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

    if (decrement === 0) {
      Alert.alert(
        '',
        'Deseja remover do carrinho ?',
        [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              setCount(decrement);
              callBack(decrement);
            },
          },
        ],
        { cancelable: false },
      );
    }
  };

  const onChangeText = e => {
    setCount(e);
    setActualValue(e);
    callBack(e);
  };

  const onFocus = () => {
    const unformat = actualValue?.replace('un', '');
    !unformat ? setActualValue('') : setActualValue(unformat);
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
          ref={input => (input = input)}
          onChangeText={onChangeText}
          defaultValue={formatValue}
          value={actualValue}
          color={inputColor}
          onFocus={onFocus}
          onBlur={() => setActualValue(formatValue)}
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
