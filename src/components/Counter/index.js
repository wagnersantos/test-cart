import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { Container, StyledIcon, StyledItem, StyledInput } from './styled';

const Counter = ({ callBack, disabled, actualValue, setActualValue }) => {
  const [count, setCount] = useState(0);
  const inputColor = count === 0 ? 'grayLight' : 'grayMidnight';

  const formatValue = (val = count) => `${String(val)} un`;

  const incrementCount = () => {
    const isClick = true;
    const increment = Number(count) + 1;
    onChangeText(increment, isClick);
  };

  const decrementCount = () => {
    const isClick = true;

    const decrement = Number(count) - 1;

    if (decrement >= 1) {
      onChangeText(decrement, isClick);
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
              onChangeText(decrement, isClick);
            },
          },
        ],
        { cancelable: false },
      );
    }
  };

  const onChangeText = (e, isClick) => {
    setCount(e);
    callBack(e);
    if (isClick) {
      setActualValue(formatValue(e));
      return;
    }

    setActualValue(e);
  };

  const onFocus = () => {
    const unformat = actualValue
      ?.toString()
      .replace('un', '')
      .trim();
    unformat === '0' ? setActualValue('') : setActualValue(unformat);
  };

  React.useEffect(() => {
    if (actualValue === '0 un') {
      setCount(0);
    }
  }, [actualValue]);

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
          onChangeText={onChangeText}
          defaultValue={formatValue()}
          value={actualValue}
          color={inputColor}
          onFocus={onFocus}
          onBlur={() => setActualValue(formatValue())}
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
  disabled: false,
  setActualValue: () => {},
};

Counter.propTypes = {
  callBack: PropTypes.func,
  disabled: PropTypes.bool,
  setActualValue: PropTypes.func,
};

export default Counter;
