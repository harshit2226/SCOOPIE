import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function LanguageScreen() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English (US)"); 

  const suggestedLanguages = ["English (US)", "English (UK)"];
  const otherLanguages = ["Tamil", "Hindi", "Bengali", "Mandarin", "Russian", "Arabic", "Spanish", "French", "Telugu"];

  const renderLanguageOption = (lang: string) => (
    <View key={lang} style={styles.languageRow}>
      <Text style={styles.languageText}>{lang}</Text>
      <TouchableOpacity
        style={[
          styles.radioOuter,
          selectedLanguage === lang && styles.radioOuterSelected,
        ]}
        onPress={() => setSelectedLanguage(lang)}
      >
        {selectedLanguage === lang && <View style={styles.radioInner} />}
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="chevron-back" size={24} color="#000000" />
                </TouchableOpacity>
        <Text style={styles.headerTitle}>Language</Text>
      </View>

      
      <Text style={styles.sectionTitle}>Suggested</Text>
      {suggestedLanguages.map(renderLanguageOption)}

      
      <View style={styles.divider} />

      <Text style={styles.sectionTitleBlack}>Languages</Text>
      {otherLanguages.map(renderLanguageOption)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginLeft: -4,
  },
  backIcon: {
    width: 20,
    height: 20,
    marginRight: -20,

  },
  headerTitle: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 23,
    lineHeight: 28, 
    letterSpacing: -0.5,
    textAlign: "center",
    flex: 1,
  },
  sectionTitle: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 40,
    letterSpacing: -0.41,
    color: "#000000",
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 10,
    width: 140, 
    height: 40, 
  },
  sectionTitleBlack: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 40,
    letterSpacing: -0.41,
    color: "#0B0B0B",
    marginTop: 30,
    marginBottom: 30,
  },
languageRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: 40,
  marginBottom: 10, 
},
languageText: {
  fontFamily: "Inter",
  fontWeight: "400",
  fontSize: 20,
  lineHeight: 40, 
  letterSpacing: -0.41,
  color: "#0B0B0B",
},
 

  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#908F8F",
    justifyContent: "center",
    alignItems: "center",
  },
  radioOuterSelected: {
    borderColor: "#8C5EFF",
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#8C5EFF",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#E6E6E6",
    marginTop: 30,
  },
});
