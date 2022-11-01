import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.signupText}>Hii Group members!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  signupText: {
    flex: 1,
    color: "#ffffff",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#00704F",
    
  },
});