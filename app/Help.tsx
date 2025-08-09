import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
  Dimensions,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");

export default function HelpCenter() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("FAQ");
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    "What is Scoopie?",
    "How to use Scoopie?",
    "How do I delete a video?",
    "Is Scoopie free to use?",
    "How to upload video on Scoopie?",
    "Can I earn from Scoopie?",
    "How do I report a user?",
  ];

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const renderFaqs = () => {
    const filteredFaqs = faqs.filter((faq) =>
      faq.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredFaqs.map((faq, index) => (
      <TouchableOpacity key={index} activeOpacity={0.7} style={styles.faqTouchable}>
        <BlurView intensity={100} tint="light" style={styles.faqBlock}>
          <Text style={styles.faqText}>{faq}</Text>
          <Ionicons name="chevron-down" size={20} color="#8C5EFF" />
        </BlurView>
      </TouchableOpacity>
    ));
  };

  const renderContactInfo = () => {
    const contactItems = [
      {
        icon: <Ionicons name="person-circle-outline" size={24} color="#8C5EFF" />,
        label: "Customer Services",
      },
      {
        icon: <FontAwesome name="whatsapp" size={20} color="#8C5EFF" />,
        label: "WhatsApp",
      },
      {
        icon: <Feather name="globe" size={20} color="#8C5EFF" />,
        label: "Website",
      },
      {
        icon: <FontAwesome name="facebook" size={20} color="#8C5EFF" />,
        label: "Facebook",
      },
      {
        icon: <Entypo name="twitter" size={20} color="#8C5EFF" />,
        label: "Twitter",
      },
      {
        icon: <FontAwesome name="instagram" size={20} color="#8C5EFF" />,
        label: "Instagram",
      },
    ];

    return (
      <View style={{ marginTop: 20 }}>
        {contactItems.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.7} style={styles.faqTouchable}>
            <BlurView intensity={100} tint="light" style={styles.faqBlock}>
              <View style={styles.contactRow}>
                {item.icon}
                <Text style={styles.contactText}>{item.label}</Text>
              </View>
            </BlurView>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help Center</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => handleTabPress("FAQ")}>
          <Text style={[styles.tabText, activeTab === "FAQ" && styles.activeTabText]}>FAQ</Text>
          {activeTab === "FAQ" && <View style={styles.activeLine} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress("Contact")}>
          <Text style={[styles.tabText, activeTab === "Contact" && styles.activeTabText]}>Contact Us</Text>
          {activeTab === "Contact" && <View style={styles.activeLine} />}
        </TouchableOpacity>
      </View>

      {/* Search Bar (for FAQ only) */}
      {activeTab === "FAQ" && (
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#8C5EFF" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#06090F"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      )}

      {/* FAQ or Contact Us */}
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
        {activeTab === "FAQ" ? renderFaqs() : renderContactInfo()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
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
    lineHeight: 40,
    letterSpacing: -0.5,
    marginRight: 24,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  tabText: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 13,
    color: "#000",
    textAlign: "center",
  },
  activeTabText: {
    color: "#8C5EFF",
    fontWeight: "500",
  },
  activeLine: {
    marginTop: 4,
    height: 3,
    backgroundColor: "#8C5EFF",
    borderRadius: 2,
    width: 63,
    alignSelf: "center",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8C5EFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: "Netflix Sans",
    fontWeight: "400",
    fontSize: 17,
    color: "#06090F",
    marginLeft: 8,
  },
  faqTouchable: {
    marginBottom: 15,
  },
  faqBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width - 40,
    height: 70,
    borderRadius: 12,
    paddingHorizontal: 20,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 100,
    elevation: 3,
  },
  faqText: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: -0.5,
    color: "#000000",
    flex: 1,
    paddingRight: 10,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contactText: {
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "600",    
    letterSpacing: -0.5,
    color: "#000000",
    textAlign: "center",
  },
});
