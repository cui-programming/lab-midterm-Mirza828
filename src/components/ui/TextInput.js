import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

export default function TextInput(props) {
  return <RNTextInput style={[styles.box, props.style]} {...props} />;
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginVertical: 5,
  },
});
