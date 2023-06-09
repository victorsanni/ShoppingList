import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 20,
    backgroundColor: '#EEF',
  },
  text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center'
  },
});

export default Header;