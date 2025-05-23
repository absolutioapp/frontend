import GalleryScreen from "@/components/GalleryViewer/GalleryScreen";
import { Typography } from "@/components/ui-kit/Typography/Typograpy";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import styled from "styled-components/native";

export default function Wallpaper() {
  return (
    <View>
      <Typography
        value="Wallpaper"
        variant="h1"
        padding="14px 0"
        align="center"
      />
      <ScrollView>
        <GalleryContainer>
          <Typography
            value={"Daily choise"}
            variant="h4"
            padding="0 4px 10px"
          />
          <GalleryScreen />
        </GalleryContainer>
        <GalleryContainer>
          <Typography
            value={"Our recommendations"}
            variant="h4"
            padding="0 4px 10px"
          />
          <GalleryScreen />
        </GalleryContainer>
      </ScrollView>
    </View>
  );
}

const GalleryContainer = styled.View`
  display: flex;
  padding: 20px 15px;
  flex-direction: column;
  gap: 5px;

  & Text {
    font-size: 130px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 10px;
  }
`;
