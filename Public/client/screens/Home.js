import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.signupText}>Hii Group members!</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  signupText: {
    color: "black",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white", 
    alignItems: 'center',
    justifyContent: 'center',   
  },
});

{/* <View
    style={{
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text style={{ color: '#fff' }}>Notice that the status bar has light text!</Text>
    <StatusBar style="light" />
  </View> */}