import React from "react";
import { View, Image, Text, TouchableOpacity, Dimensions } from "react-native";
import Modal from "react-native-modal";
import Button from "../ui-kit/Button/Button";
import { ButtonTypes } from "../ui-kit/Button/Button.types";

const { width } = Dimensions.get("window");

export interface ImageModalProps {
  isVisible: boolean;
  onClose: () => void;
  imageUri: string | null;
}

const ImageModal = ({
  isVisible,
  onClose,
  imageUri,
}: Readonly<ImageModalProps>) => {
  return (
    <View>
      <Modal
        className="flex items-center"
        isVisible={isVisible}
        onBackdropPress={onClose}
      >
        <View
          className={`bg-white flex justify-center rounded-2xl p-[${
            width * 0.1
          }] items-center`}
        >
          <Image
            source={{ uri: imageUri ?? "" }}
            className="rounded-xl"
            style={{ width: width * 0.9, height: width * 0.5 }}
            resizeMode="cover"
          />
          <View className="flex lex-row justify-between items-center w-full mt-4 space-x-4">
            <TouchableOpacity
              className="bg-blue-500 px-4 py-2 rounded-xl items-center"
              onPress={() => alert("Скачать")}
            >
              <Text className="text-white font-semibold">Скачать</Text>
            </TouchableOpacity>
            <Button
              text={"ASD"}
              handleClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              buttonType={ButtonTypes.primary}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ImageModal;
