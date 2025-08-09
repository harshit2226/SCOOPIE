import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Security() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Security</Text>
      </View>

      {/* Control Section */}
      <Text style={styles.sectionTitle}>Control</Text>

      {/* Security Alerts */}
      <View style={styles.row}>
        <Text style={styles.label}>Security Alerts</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </View>

      {/* Manage Devices */}
      <View style={styles.row}>
        <Text style={styles.label}>Manage Devices</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </View>

      {/* Manage Permission */}
      <View style={styles.row}>
        <Text style={styles.label}>Manage Permission</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </View>

      {/* Security Section */}
      <Text style={[styles.sectionTitle, styles.securityHeading]}>Security</Text>

      {/* Remember Me */}
      <View style={styles.row}>
        <Text style={styles.label}>Remember me</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </View>

      {/* Face ID */}
      <View style={styles.row}>
        <Text style={styles.label}>Face ID</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </View>

      {/* Biometric ID */}
      <View style={styles.row}>
        <Text style={styles.label}>Biometric ID</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </View>

      {/* Google Authenticator */}
      <View style={styles.row}>
        <Text style={styles.label}>Google Authenticator</Text>
        <Ionicons name="chevron-forward" size={20} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", padding: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 23,
    letterSpacing: -0.5,
    marginRight: 24,
    lineHeight: 40,
  },
  sectionTitle: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 15,
    marginLeft: 5,
  },
  securityHeading: {
   
    color: "000000",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "auto",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  label: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: -0.41,
  },
});
`qw`
