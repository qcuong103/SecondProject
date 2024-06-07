/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet, View, Text,
} from 'react-native';
const Header = (props) => {
  return (
    <View
      style={styles.view16}
    >
      <Text
      style={styles.text16}
      >
        React Native Tutorial
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  view16: {
    width: '100%',
    height: 50,
    backgroundColor: '#0000ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text16: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Header;
