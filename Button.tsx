import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useFocusable} from '@noriginmedia/norigin-spatial-navigation';

export function Button() {
  const {ref, focused, focusSelf} = useFocusable();

  return (
    <TouchableOpacity
      ref={ref}
      onFocus={focusSelf}
      style={focused ? styles.buttonFocused : styles.button}>
      <Text>Press me</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonFocused: {
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'grey',
  },
});
