import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Profile from "./src/components/profile/Profile";
export default function App() {
  return (
      <View>
        <SafeAreaView style={styles.container}></SafeAreaView>
        <Profile/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
