// BarChart.tsx – переиспользуемый анимированный компонент столбцов
import React, { useEffect } from "react";
import * as d3Scale from "d3-scale";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  withDelay,
  Easing,
} from "react-native-reanimated";
import { Rect, G } from "react-native-svg";

import { ChartSvg, CHART_WIDTH, CHART_HEIGHT } from "./ChartStyles";

/* -------- интерфейс -------- */
export interface BarChartProps<T> {
  data: T[];
  xAccessor: (item: T) => string | number;
  yAccessor: (item: T) => number;
  barWidth?: number;
  color?: string;
  stroke?: string;
  durationMs?: number;
}

const AnimatedRect = Animated.createAnimatedComponent(Rect);

export default function BarChart<T>({
  data,
  yAccessor,
  barWidth = 20,
  color = "#283139",
  stroke = "#9cabba",
  durationMs = 700,
}: BarChartProps<T>) {
  /* scale */
  const y = d3Scale
    .scaleLinear()
    .domain([0, Math.max(...data.map(yAccessor))])
    .range([0, CHART_HEIGHT - 20]);

  const gap = (CHART_WIDTH - barWidth * data.length) / (data.length - 1);

  return (
    <ChartSvg>
      <G x={0} y={CHART_HEIGHT}>
        {data.map((d, i) => {
          const h = y(yAccessor(d));
          const height = useSharedValue(0);

          const rectProps = useAnimatedProps(() => ({
            height: height.value,
          }));

          useEffect(() => {
            height.value = withDelay(
              i * 80,
              withTiming(h, {
                duration: durationMs,
                easing: Easing.out(Easing.cubic),
              })
            );
          }, []);

          return (
            <AnimatedRect
              key={i}
              animatedProps={rectProps}
              x={i * (barWidth + gap)}
              y={-h}
              width={barWidth}
              rx={3}
              fill={color}
              stroke={stroke}
              strokeWidth={2}
            />
          );
        })}
      </G>
    </ChartSvg>
  );
}
