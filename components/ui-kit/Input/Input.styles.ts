import styled from "styled-components/native";
import { Platform, TextInputProps } from "react-native";
import { Colors } from "@/constants/Colors";

interface InputStylesProps {
  disabled?: boolean;
  loading?: boolean;
  customStyles?: any;
}

interface InputTextStylesProps {
  customTextStyles?: any;
}

const StyledInput = styled.TextInput.attrs<TextInputProps>(() => ({
  placeholderTextColor: Colors.light.accent,
}))<InputStylesProps>`
  width: 100%;
  transition: all 0.2s;
  border-bottom-width: 2px;
  font-size: 20px;
  border-color: ${Colors.light.green};
  padding: 10px 0px;

  ${(props: { disabled: boolean }) => props.disabled && "opacity: 0.5;"}
  ${(props: { loading: boolean }) => props.loading && "opacity: 0.5;"}
  ${(props: { customStyles: any }) => props.customStyles}
`;

const InputContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const ErrorStyles = styled.Text`
  color: red;
  font-size: 14px;
`;

const Label = styled.Text`
  color: ${Colors.light.green};
  font-size: 18px;
  font-weight: normal;
`;

export { StyledInput, InputContainer, ErrorStyles, Label };
