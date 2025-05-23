import styled from "styled-components/native";
import Svg from "react-native-svg";
import { Dimensions } from "react-native";

export const { width: SCREEN_W } = Dimensions.get("window");
export const CHART_WIDTH = SCREEN_W - 72; // 36 px отступы слева/справа
export const CHART_HEIGHT = 160; // фиксированная высота

export const ChartSvg = styled(Svg).attrs(() => ({
  width: CHART_WIDTH,
  height: CHART_HEIGHT,
}))``;

