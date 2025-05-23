import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";
import axios from "axios";
import ImageModal from "../ImageModal/ImageModal";
import { ScenicCard } from "./GaleryCard/GalleryCard";
import { ImageItem } from "./GalleryScreen.types";

const GalleryScreen = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      const res = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=10"
      );
      setImages(res.data.map((img: ImageItem) => img.download_url));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#888" />
      ) : (
        <ScrollView
          horizontal={true} // 1. Включаем горизонтальный скролл
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}
        >
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 25 }}>
            {images.map((item, index) => (
              <TouchableOpacity
                key={item}
                onPress={() => setSelectedImage(item)}
                className="mb-4"
              >
                <ScenicCard uri={item} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      <ImageModal
        isVisible={!!selectedImage}
        imageUri={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </View>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row", // горизонтальное выравнивание
    flexWrap: "nowrap", // запрещаем перенос на новую строку
    alignItems: "center",
  },
  item: {
    marginRight: 16,
    // …другие стили для элементов
  },
});
