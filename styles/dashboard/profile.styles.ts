// profile.styles.ts
// Все styled‑components для экрана профиля

import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

// Common styles
const commonText = {
  color: "#ffffff",
  textAlign: "center" as const,
};

const flexCenter = {
  alignItems: "center" as const,
  justifyContent: "center" as const,
};

const flexRow = {
  flexDirection: "row" as const,
  alignItems: "center" as const,
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #111518;
`;

export const Scroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
  bounces: false,
}))``;

/* -- header -- */
export const HeaderRow = styled.View`
  ${flexRow}
  justify-content: space-between;
  padding: 16px 16px 8px;
`;

export const TitleText = styled.Text`
  flex: 1;
  ${commonText}
  font-size: 18px;
  font-weight: 700;
  padding-left: 48px; /* баланс для центровки */
`;

export const IconButton = styled.TouchableOpacity`
  width: 48px;
  align-items: flex-end;
  justify-content: center;
`;

/* -- профиль -- */
export const Center = styled.View`
  ${flexCenter}
  padding: 16px;
`;

export const Avatar = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`;

export const NameText = styled.Text`
  ${commonText}
  font-size: 22px;
  font-weight: 700;
`;

export const AgeText = styled.Text`
  color: #9cabba;
  font-size: 16px;
  text-align: center;
`;

/* -- секции -- */
export const SectionTitle = styled.Text`
  ${commonText}
  font-size: 22px;
  font-weight: 700;
  padding: 20px 16px 12px;
`;

/* -- карточки статистики -- */
export const StatCard = styled.View`
  flex: 1;
  min-width: 288px;
  border: 1px solid #3b4854;
  border-radius: 12px;
  padding: 24px;
  gap: 12px;
  background-color: #111518;
`;

export const StatLabel = styled.Text`
  ${commonText}
  font-size: 16px;
  font-weight: 500;
`;

export const StatValue = styled.Text`
  ${commonText}
  font-size: 32px;
  font-weight: 700;
`;

export const Row = styled.View`
  ${flexRow}
  gap: 4px;
`;

export const MutedText = styled.Text`
  color: #9cabba;
  font-size: 16px;
`;

export const PositiveText = styled.Text`
  color: #0bda5b;
  font-size: 16px;
  font-weight: 500;
`;