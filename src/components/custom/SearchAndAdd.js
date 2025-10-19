import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, TextInput } from '../ui';

export default function SearchAndAdd() {
  const [tasbihs, setTasbihs] = useState([
    { name: 'SubhanAllah', count: 0 },
    { name: 'Alhamdulillah', count: 0 },
    { name: 'Allahu Akbar', count: 0 },
    { name: 'La ilaha illa Allah', count: 0 },
    { name: 'Astaghfirullah', count: 0 },
  ]);
  const [search, setSearch] = useState('');
  const [newTasbih, setNewTasbih] = useState('');

  const addTasbih = () => {
    const name = newTasbih.trim();
    if (!name) return alert('Enter tasbih');
    if (tasbihs.some(t => t.name.toLowerCase() === name.toLowerCase())) {
      return alert('Already exists!');
    }
    setTasbihs([...tasbihs, { name, count: 0 }]);
    setNewTasbih('');
  };

  const changeCount = (name, val) => {
    setTasbihs(tasbihs.map(t =>
      t.name === name ? { ...t, count: Math.max(0, t.count + val) } : t
    ));
  };

  // Show filtered if search typed, else show full list
  const filtered = search
    ? tasbihs.filter(t => t.name.toLowerCase().includes(search.toLowerCase()))
    : tasbihs;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search & Add Tasbih</Text>

      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <TextInput
        placeholder="New Tasbih"
        value={newTasbih}
        onChangeText={setNewTasbih}
        style={styles.input}
      />

      <Button title="Add" onPress={addTasbih} style={styles.addBtn} />

      {filtered.length === 0 && <Text>No Tasbih Found</Text>}

      {filtered.map((t, i) => (
        <View key={i} style={styles.row}>
          <Button title="-" onPress={() => changeCount(t.name, -1)} style={styles.btn} />
          <Text style={styles.name}>{t.name}</Text>
          <Text style={styles.count}>{t.count}</Text>
          <Button title="+" onPress={() => changeCount(t.name, 1)} style={styles.btn} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { marginBottom: 10 },
  addBtn: { marginBottom: 15, paddingHorizontal: 18, paddingVertical: 10, backgroundColor: '#ca0a24ff', borderRadius: 10 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  name: { width: 120 },
  count: { width: 30, textAlign: 'center' },
  btn: { paddingHorizontal: 50, paddingVertical: 20, backgroundColor: '#ca0a24ff', borderRadius: 1 }
});
