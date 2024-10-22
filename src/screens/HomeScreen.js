import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Portofolio Saya</Text>
      <Text style={styles.subtitle}>Saya [Nama Anda], seorang [profesi Anda].</Text>
      <Button title="Lihat" onPress={() => navigation.navigate('Portfolio')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default HomeScreen;
