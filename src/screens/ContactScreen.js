import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kontak Saya</Text>
      <Text>Email: example@example.com</Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://linkedin.com/in/username')}
      >
        LinkedIn
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL('https://github.com/username')}
      >
        GitHub
      </Text>
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
    marginBottom: 16,
  },
  link: {
    color: 'blue',
    marginVertical: 8,
  },
});

export default ContactScreen;
