import React, { ReactNode } from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton, StyledText } from "./Button.styles";

export default function Button({
  buttonType,
  disabled,
  loading,
  isIcon,
  IconValue,
  text,
  customStyles,
  customTextStyles,
  handleClick,
}: Readonly<ButtonProps>): ReactNode {
  return (
    <StyledButton
      buttonType={buttonType}
      disabled={disabled}
      loading={loading}
      customStyles={customStyles}
      onPress={() => handleClick()}
    >
      {isIcon && !loading && IconValue}
      {loading && <></>}
      <StyledText
        buttonType={buttonType}
        customTextStyles={customTextStyles}
        isIcon={isIcon}
      >
        {text}
      </StyledText>
    </StyledButton>
  );
}
