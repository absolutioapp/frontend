import React from "react";
import {
  Card,
  Picture,
  Body,
  TagRow,
  Tag,
  TagText,
  Mark,
} from "./GalleryCard.styles";
import { Text } from "react-native";
import { ScenicCardProps } from "./GalleryCard.types";

export const ScenicCard: React.FC<ScenicCardProps> = ({ uri }) => {
  const topTags = ["mountain", "lake"];
  const bottomTags = ["forest", "reflection", "sunset"];

  return (
    <Card>
      <Picture
        source={typeof uri === "string" ? { uri } : uri}
        resizeMode="cover"
      />

      <Mark>
        <Text
          style={{
            fontFamily: "Plus Jacarta",
            fontSize: 21,
            fontWeight: 900,
            color: "#fff",
          }}
        >
          5.6
        </Text>
      </Mark>
      <Body>
        <TagRow>
          {topTags.map((t) => (
            <Tag key={t}>
              <TagText>{t}</TagText>
            </Tag>
          ))}
        </TagRow>

        <TagRow>
          {bottomTags.map((t) => (
            <Tag key={t}>
              <TagText>{t}</TagText>
            </Tag>
          ))}
        </TagRow>
      </Body>
    </Card>
  );
};
