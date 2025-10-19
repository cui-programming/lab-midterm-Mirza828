import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';
import { styles } from '../../styles/styles';  // 👈 add this line

export default function TeacherMessage() {
  const showMessage = () => {
    alert('Keep learning and doing your best! 📚✨');
  };

  return (
    <View style={styles.teacherBox}>
      <Text style={styles.teacherTitle}>💬 Message from Teacher</Text>
      <Text style={styles.teacherMsg}>
        Hard work beats talent when talent doesn’t work hard!
      </Text>
      <Button title="Motivate Me" onPress={showMessage} />
    </View>
  );
}
