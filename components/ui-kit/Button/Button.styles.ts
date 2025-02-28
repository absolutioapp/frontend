import styled from "styled-components/native";
import { Platform } from "react-native";
import { ButtonTypes } from "./Button.types";
import { Colors } from "@/constants/Colors";

interface StyledButtonProps {
  buttonType: "primary" | "outlined";
  disabled?: boolean;
  loading?: boolean;
  customStyles?: any;
}

interface StyledTextProps {
  buttonType: "primary" | "outlined";
  customTextStyles?: any;
}

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.1s;
  gap: 5px;
  flex-direction: row;
  border-width: 2px;
  align-items: center;
  border-radius: 16px;
  transition: all 0.2s;
  ${(props: { buttonType: ButtonTypes }) =>
    props.buttonType === ButtonTypes.primary &&
    `
    &:hover {
      border-color: ${Colors.light.primary};
    }
    border-color: transparent;
    background-color: ${Colors.light.green};
  `}
  ${(props: { buttonType: ButtonTypes }) =>
    props.buttonType === ButtonTypes.outlined &&
    `
    &:hover {
      border-color: ${Colors.light.primary};
    }
    border-color: ${Colors.light.green};
    background-color: white;
  `}
  ${(props: { disabled: boolean }) => props.disabled && "opacity: 0.5;"}
  ${(props: { loading: boolean }) => props.loading && "opacity: 0.5;"}
  ${(props: { disabled: boolean }) =>
    Platform.OS === "web" &&
    !props.disabled &&
    `
    cursor: pointer;
    &:hover {
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }
  `}
  ${(props: { customStyles: any }) => props.customStyles}
`;

export const StyledText = styled.Text<StyledTextProps>`
  text-align: center;
  font-weight: 600;
  padding: 12px 0;
  font-size: 20px;
  ${(props: { buttonType: ButtonTypes }) =>
    props.buttonType === ButtonTypes.primary &&
    `
    color: white;
  `}
  ${(props: { buttonType: ButtonTypes }) =>
    props.buttonType === ButtonTypes.outlined &&
    `
    color: #68d391;
  `}
  ${(props: { customTextStyles: any }) => props.customTextStyles}
`;
