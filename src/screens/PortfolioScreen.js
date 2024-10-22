import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const projects = [
  { id: '1', title: 'Proyek 1', description: 'Deskripsi proyek 1' },
  { id: '2', title: 'Proyek 2', description: 'Deskripsi proyek 2' },
  { id: '3', title: 'Proyek 3', description: 'Deskripsi proyek 3' },
];

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portofolio</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.project}>
            <Text style={styles.projectTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  project: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PortfolioScreen;
