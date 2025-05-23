import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";

import { useProfile } from "./hooks";

import {
  Container,
  Scroll,
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
import LineChart from "../Charts/LineChart";
import BarChart from "../Charts/BarChart";
import { ErrorText } from "./profile.styles";

/* ─────────── основной профиль ─────────── */
export default function Profile() {
  const { profile, loading, error } = useProfile();

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

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#0000ff" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorText>Error: {error}</ErrorText>
      </Container>
    );
  }

  return (
    <Container>
      <Scroll>
        <Center>
          <Avatar source={{ uri: profile?.photos?.[0]?.url ?? "" }} />
          <NameText>
            {profile?.names?.[0]?.displayName ?? "No name available"}
          </NameText>
          <AgeText>28</AgeText>
        </Center>

        {/* Usage Statistics */}
        <SectionTitle>Usage Statistics</SectionTitle>
        <Row style={{ paddingHorizontal: 16, flexWrap: "wrap" }}>
          {/* Time Spent */}
          <StatCard>
            <StatLabel>Time Spent</StatLabel>
            <StatValue>12h</StatValue>
            <LineChart
              data={timeSpent}
              xAccessor={(d) => d.day}
              yAccessor={(d) => d.hours}
            />
            <Row>
              <MutedText>Last 7 Days</MutedText>
              <PositiveText>+15%</PositiveText>
            </Row>
          </StatCard>

          {/* Wallpaper Views */}
          <StatCard>
            <StatLabel>Wallpaper Views</StatLabel>
            <StatValue>250</StatValue>
            <BarChart
              data={wallpaperViews}
              xAccessor={(d) => d.label} // строковая подпись
              yAccessor={(d) => d.views} // числовое значение
              barWidth={20}
            />
            <Row>
              <MutedText>Last 7 Days</MutedText>
              <PositiveText>+10%</PositiveText>
            </Row>
          </StatCard>
        </Row>
      </Scroll>
    </Container>
  );
}
