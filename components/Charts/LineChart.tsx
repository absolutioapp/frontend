// LineChart.tsx – переиспользуемый анимированный компонент линии
import React, { useEffect } from "react";
import { Easing } from "react-native-reanimated";
import * as d3Shape from "d3-shape";
import * as d3Scale from "d3-scale";
import { extent } from "d3-array";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from "react-native-reanimated";
import { Path } from "react-native-svg";

import { ChartSvg, CHART_WIDTH, CHART_HEIGHT } from "./ChartStyles";
/* -------- интерфейс -------- */
export interface LineChartProps<T> {
  data: T[];
  xAccessor: (item: T) => number;
  yAccessor: (item: T) => number;
  color?: string;
  durationMs?: number;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function LineChart<T>({
  data,
  xAccessor,
  yAccessor,
  color = "#9cabba",
  durationMs = 3000,
}: LineChartProps<T>) {
  const x = d3Scale
    .scaleLinear()
    .domain(extent(data, xAccessor) as [number, number])
    .range([0, CHART_WIDTH]);

  const y = d3Scale
    .scaleLinear()
    .domain([0, Math.max(...data.map(yAccessor))])
    .range([CHART_HEIGHT, 0]);

  /* path */
  const lineGen = d3Shape
    .line<T>()
    .x((d) => x(xAccessor(d)))
    .y((d) => y(yAccessor(d)))
    .curve(d3Shape.curveMonotoneX);

  const path = lineGen(data) || "";
  const progress = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [progress.value * 1000, 1000],
  }));

  useEffect(() => {
    progress.value = withTiming(1, {
      duration: durationMs,
      easing: Easing.out(Easing.cubic),
    });
  }, []);

  return (
    <ChartSvg>
      <AnimatedPath
        d={path}
        stroke={color}
        strokeWidth={3}
        fill="none"
        animatedProps={animatedProps}
      />
    </ChartSvg>
  );
}
