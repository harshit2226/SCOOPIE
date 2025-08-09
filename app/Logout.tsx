// Example for Security.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Security() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Security Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },
});
