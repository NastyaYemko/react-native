import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Login from "./src/modules/login/login";

export default function App() {
  return (
      <SafeAreaView style={styles.safe}>
        <Login/>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f0ffff',
    justifyContent: 'center',
  },
});
