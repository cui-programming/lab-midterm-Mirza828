import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';

export default function TasbihList() {
  const [tasbihList, setTasbihList] = useState([
    { name: 'SubhanAllah', count: 0 },
    { name: 'Alhamdulillah', count: 0 },
    { name: 'Allahu Akbar', count: 0 },
    { name: 'La ilaha illa Allah', count: 0 },
    { name: 'Astaghfirullah', count: 0 },
  ]);

  const changeCount = (name, val) => {
    setTasbihList(tasbihList.map(t =>
      t.name === name ? { ...t, count: Math.max(0, t.count + val) } : t
    ));
  };

  return (
    <View style={{ marginVertical: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Tasbih Counter</Text>
      {tasbihList.map((t, i) => (
        <View key={i} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
          <Button title="-" onPress={() => changeCount(t.name, -1)} />
          <Text style={{ width: 120 }}>{t.name}</Text>
          <Text style={{ width: 30, textAlign: 'center' }}>{t.count}</Text>
          <Button title="+" onPress={() => changeCount(t.name, 1)} />
        </View>
      ))}
    </View>
  );
}
