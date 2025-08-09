import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);
  const router = useRouter();

  const settings = [
    { icon: "person", label: "Manage Account", route: "/Manage_account" },
    { icon: "lock-closed", label: "Privacy", route: "/Privacy" },
    { icon: "shield-checkmark", label: "Security", route: "/Security" },
    { icon: "language", label: "Language", rightText: "English (US)", route: "/Laungage" },
    { icon: "moon", label: "Dark Mode", action: "toggleDarkMode" },
    { icon: "bookmark", label: "Saved", route: "/Saved" },
    { icon: "sliders-h", label: "Content Preference", type: "fa5" },
    { icon: "megaphone", label: "Ads" },
    { icon: "alert-circle", label: "Report a Problem" },
    { icon: "help-circle", label: "Help Center", route: "/Help" },
    { icon: "shield", label: "Safety Center" },
    { icon: "people", label: "Community Guidelines" },
    { icon: "document-text", label: "Terms of Services" },
    { icon: "document-lock", label: "Privacy Policy", route: "/Privacy_Policy" },
    { icon: "log-out", label: "Logout", color: "#DA0000", action: "showLogoutModal" },
  ];

  const filteredSettings = settings.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const theme = {
    background: darkMode ? "#121212" : "#FFFFFF",
    text: darkMode ? "#FFFFFF" : "#06090F",
    card: darkMode ? "#1E1E1E" : "#FFFFFF",
    border: darkMode ? "#BB86FC" : "#8C5EFF",
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image
        source={require("../assets/Rectangle.jpg")}
        style={styles.topImage}
      />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios" size={22} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Settings
        </Text>
      </View>

      <View style={[styles.searchBar, { borderColor: theme.border, backgroundColor: theme.card }]}>
        <Ionicons name="search" size={23} color={theme.border} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={theme.text}
          style={[styles.searchInput, { color: theme.text }]}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={[styles.bottomSection, { backgroundColor: theme.card }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredSettings.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => {
                if (item.action === "toggleDarkMode") {
                  setDarkMode(!darkMode);
                } else if (item.action === "showLogoutModal") {
                  setLogoutVisible(true);
                } else if (item.route) {
                  router.push(item.route as any);
                }
              }}
            >
              {item.type === "fa5" ? (
                <FontAwesome5
                  name={item.icon as any}
                  size={22}
                  color={item.color || theme.text}
                />
              ) : (
                <Ionicons
                  name={item.icon as any}
                  size={22}
                  color={item.color || theme.text}
                />
              )}
              <Text style={[styles.itemText, { color: item.color || theme.text }]}>
                {item.label}
              </Text>
              {item.rightText && (
                <Text style={[styles.rightText, { color: theme.text }]}>
                  {item.rightText}
                </Text>
              )}
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color={item.color || theme.text}
                style={styles.arrow}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Logout Popup Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutVisible}
        onRequestClose={() => setLogoutVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.logoutText}>Logout</Text>
            <View style={styles.divider} />
            <Text style={styles.confirmText}>Are you sure you want to log out?</Text>
            <View style={styles.buttonRow}>
              <Pressable
                style={[styles.button, styles.cancelButton]}
                onPress={() => setLogoutVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.logoutButton]}
                onPress={() => {
                  setLogoutVisible(false);
                  router.push("/Logout");
                }}
              >
                <Text style={styles.logoutButtonText}>Yes, Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    width: "100%",
    height: 224,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  header: {
    position: "absolute",
    top: 54,
    left: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 23,
    marginRight: 40,
  },
  searchBar: {
    position: "absolute",
    top: 114,
    left: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  bottomSection: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 16,
    paddingTop: 60,
    marginTop: -30,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  itemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 17,
    lineHeight: 40,
  },
  rightText: {
    fontSize: 15,
    marginRight: 5,
  },
  arrow: {
    marginLeft: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#8C5EFF",
    lineHeight: 40,
    letterSpacing: -0.41,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E6E6E6",
    marginVertical: 10,
  },
  confirmText: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#06090F",
    lineHeight: 40,
    letterSpacing: -0.41,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    gap: 10,
  },
  button: {
    width: 160,
    height: 54,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  cancelButton: {
    backgroundColor: "#F1EEFF",
  },
  logoutButton: {
    backgroundColor: "#8C5EFF",
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#8C5EFF",
    fontFamily: "Inter",
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    fontFamily: "Inter",
  },
});
