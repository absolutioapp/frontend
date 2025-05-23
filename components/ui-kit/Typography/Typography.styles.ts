import styled from "styled-components/native";
import { ContainerProps, TypographyProps } from "./Typograpy.types";

export const TypographyContainer = styled.View<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props: ContainerProps) =>
  props.justifyContent ?? "flex-start"};
  align-items: ${(props: ContainerProps) => props.align ?? "flex-start"};
  padding: ${(props: TypographyProps) => props.padding ?? "0px"};
`;

export const TypographyText = styled.Text<TypographyProps>`
  font-size: ${(props: TypographyProps) =>
    getFontSize(props.variant ?? "body1")};
  color: ${(props: TypographyProps) => props.color ?? "#000"};
  font-family: "Plus Jacarta";
`;

function getFontSize(variant: string): string {
  switch (variant) {
    case "h1":
      return "32px";
    case "h2":
      return "28px";
    case "h3":
      return "24px";
    case "h4":
      return "20px";
    case "h5":
      return "18px";
    case "h6":
      return "16px";
    case "body1":
      return "16px";
    case "body2":
      return "14px";
    case "subtitle1":
      return "16px";
    case "subtitle2":
      return "14px";
    case "caption":
      return "12px";
    case "overline":
      return "10px";
    default:
      return "16px"; // Default font size
  }
}
