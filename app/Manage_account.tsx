import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";

export default function ManageAccount() {
  const [date, setDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Account</Text>
      </View>

      {/* Account Information */}
      <Text style={styles.sectionTitle}>Account Information</Text>

      {/* Phone Number */}
      <View style={styles.row}>
        <Ionicons name="call" size={24} color="#000" />
        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.value}>+91 987654</Text>
        <MaterialIcons name="chevron-right" size={20} color="#000" />
      </View>

      {/* Email */}
      <View style={styles.row}>
        <Ionicons name="mail" size={24} color="#000" />
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>user@email.com</Text>
        <MaterialIcons name="chevron-right" size={20} color="#000" />
      </View>

      {/* Date of Birth */}
      <View style={styles.row}>
        <Ionicons name="calendar" size={24} color="#000" />
        <Text style={styles.label}>Date of Birth</Text>
        <Text style={styles.value}>
          {date ? date.toLocaleDateString("en-GB") : "Select Date"}
        </Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Ionicons name="calendar-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()} // default today but won’t set until chosen
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            if (event.type === "set" && selectedDate) {
              setDate(selectedDate);
            }
            setShowDatePicker(false);
          }}
        />
      )}

      {/* Account Control */}
      <Text style={styles.sectionTitle}>Account Control</Text>

      {/* Switch Account */}
      <View style={styles.row}>
        <FontAwesome5 name="exchange-alt" size={24} color="#000" />
        <Text style={styles.label}>Switch to Business Account</Text>
        <MaterialIcons name="chevron-right" size={20} color="#000" />
      </View>

      {/* Delete Account */}
      <View style={styles.row}>
        <MaterialIcons name="delete" size={24} color="#DA0000" />
        <Text style={[styles.label, { color: "#DA0000" }]}>
          Delete Account
        </Text>
        <MaterialIcons name="chevron-right" size={20} color="#DA0000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", padding: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
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
  },
  sectionTitle: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  label: {
    marginLeft: 10,
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 18,
    flex: 1,
  },
  value: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 18,
    marginRight: 10,
  },
});
