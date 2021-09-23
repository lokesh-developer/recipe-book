import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const count = 0;
  const increaseCount = () => {
    count++;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.test}>Hello world</Text>
      <Text>{count}</Text>
      <Button onPress={increaseCount} title="Press me" />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    fontSize: 70,
  },
});
