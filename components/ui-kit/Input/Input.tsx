import React, { ReactNode } from "react";
import { InputProps } from "./Input.types";
import {
  StyledInput,
  InputContainer,
  ErrorStyles,
  Label,
} from "./Input.styles";

export default function Input({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  disabled,
  loading,
  customStyles,
  customTextStyles,
  error,
  label,
  errorMessage,
  keyboardType = "default",
}: Readonly<InputProps>): ReactNode {
  return (
    <InputContainer
      disabled={disabled}
      loading={loading}
      customStyles={customStyles}
    >
      {label && <Label>{label}</Label>}
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        disabled={disabled}
        loading={loading}
        keyboardType={keyboardType}
      />
      {error && <ErrorStyles>{errorMessage}</ErrorStyles>}
    </InputContainer>
  );
}
