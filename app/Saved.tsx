import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const { width } = Dimensions.get("window");
const SPACING = 10; 
const IMAGE_SIZE = (width - SPACING * 4) / 3; 

export default function SavedPage() {
  const router = useRouter();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uris = result.assets.map((asset) => asset.uri);
      setSelectedImages((prev) => [...prev, ...uris]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Saved</Text>
      </View>

      
      <ScrollView contentContainerStyle={styles.gallery}>
        {selectedImages.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
        <TouchableOpacity style={styles.addButton} onPress={pickImages}>
          <Text style={{ fontSize: 30, color: "#666" }}>＋</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 10,
  },
  backButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: 23,
    lineHeight: 20,
    letterSpacing: -0.5,
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: SPACING,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: SPACING / 3, 
  },
  addButton: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    margin: SPACING / 2,
  },
});
