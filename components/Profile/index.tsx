// import { ActivityIndicator } from "react-native";
// import { Container, ProfileImage, NameText, ErrorText } from "./profile.styles";
// import { useProfile } from "./hooks";

// export default function ProfileComponent() {
//   const { profile, loading, error } = useProfile();

//   if (loading) {
//     return (
//       <Container>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container>
//         <ErrorText>Error: {error}</ErrorText>
//       </Container>
//     );
//   }

//   const imageUrl = profile?.photos?.[0]?.url;
//   console.log("Image URL:", imageUrl);

//   return (
//     <Container>
//       <ProfileImage source={{ uri: imageUrl ?? "" }} resizeMode="cover" />
//       <NameText>
//         {profile?.names?.[0]?.displayName ?? "No name available"}
//       </NameText>
//     </Container>
//   );
// }

// profile.tsx
// Компонент профиля без SVG‑иконок

import React from "react";
import { Dimensions } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";

import {
  Container,
  Scroll,
  HeaderRow,
  TitleText,
  IconButton,
  Center,
  Avatar,
  NameText,
  AgeText,
  SectionTitle,
  StatCard,
  StatLabel,
  StatValue,
  Row,
  MutedText,
  PositiveText,
} from "../../styles/dashboard/profile.styles";

/* ─────────── основной профиль ─────────── */
export default function Profile() {
  const screenWidth = Dimensions.get("window").width - 24;

  /* данные для графиков */
  const timeSpent = [
    { day: 1, hours: 1 },
    { day: 2, hours: 2.4 },
    { day: 3, hours: 1.5 },
    { day: 4, hours: 2.2 },
    { day: 5, hours: 1.9 },
    { day: 6, hours: 3 },
    { day: 7, hours: 3.6 },
  ];

  const wallpaperViews = [
    { label: "Mon", views: 30 },
    { label: "Tue", views: 80 },
    { label: "Wed", views: 60 },
    { label: "Thu", views: 100 },
    { label: "Fri", views: 50 },
    { label: "Sat", views: 60 },
    { label: "Sun", views: 30 },
  ];

  // Создаем SVG path для линии графика
  const createLinePath = (data: typeof timeSpent) => {
    const maxValue = Math.max(...data.map((d) => d.hours));
    const width = screenWidth - 48;
    const height = 100;
    const xStep = width / (data.length - 1);

    return data
      .map((point, index) => {
        const x = index * xStep;
        const y = height - (point.hours / maxValue) * height;
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  // Создаем SVG элементы для столбчатой диаграммы
  const createBars = (data: typeof wallpaperViews) => {
    const maxValue = Math.max(...data.map((d) => d.views));
    const width = screenWidth - 48;
    const height = 100;
    const barWidth = width / data.length - 4;

    return data.map((point, index) => {
      const x = index * (barWidth + 4);
      const barHeight = (point.views / maxValue) * height;
      return (
        <Rect
          key={index}
          x={x}
          y={height - barHeight}
          width={barWidth}
          height={barHeight}
          fill="#283139"
        />
      );
    });
  };

  return (
    <Container>
      <Scroll>
        {/* Header */}
        <HeaderRow>
          <IconButton />
          <TitleText>Profile</TitleText>
          <IconButton />
        </HeaderRow>

        {/* Avatar & basic info */}
        <Center>
          {/* <Avatar
          /> */}
          <NameText>Ethan Carter</NameText>
          <AgeText>28</AgeText>
        </Center>

        {/* Usage Statistics */}
        <SectionTitle>Usage Statistics</SectionTitle>
        <Row style={{ paddingHorizontal: 16, flexWrap: "wrap" }}>
          {/* Time Spent */}
          <StatCard>
            <StatLabel>Time Spent</StatLabel>
            <StatValue>12h</StatValue>
            <Row>
              <MutedText>Last 7 Days</MutedText>
              <PositiveText>+15%</PositiveText>
            </Row>
            <Svg width={screenWidth} height={100}>
              <Path
                d={createLinePath(timeSpent)}
                stroke="#9cabba"
                strokeWidth={3}
                fill="none"
              />
            </Svg>
          </StatCard>

          {/* Wallpaper Views */}
          <StatCard>
            <StatLabel>Wallpaper Views</StatLabel>
            <StatValue>250</StatValue>
            <Row>
              <MutedText>Last 7 Days</MutedText>
              <PositiveText>+10%</PositiveText>
            </Row>
            <Svg width={screenWidth} height={100}>
              {createBars(wallpaperViews)}
            </Svg>
          </StatCard>
        </Row>
      </Scroll>
    </Container>
  );
}
