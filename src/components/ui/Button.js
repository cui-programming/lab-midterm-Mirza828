import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={[styles.txt, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#ca0a24ff',
    paddingVertical: 20,   // ↑ increase height
    paddingHorizontal: 50, // ↑ increase width
    borderRadius: 1,      // slightly rounder
    marginVertical: 6,
  },
  txt: {
    color: '#000000ff',
    fontSize: 20,          // ↑ bigger text
    textAlign: 'center',
    fontWeight: '600',
  },
});
