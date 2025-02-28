import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton, StyledText } from "./Button.styles";
import { ButtonTypes } from "./Button.types";

const Button: FC<ButtonProps> = ({
  buttonType,
  disabled,
  loading,
  isIcon,
  IconValue,
  text,
  customStyles,
  customTextStyles,
  handleClick,
}) => (
  <StyledButton
    buttonType={buttonType}
    disabled={disabled}
    loading={loading}
    customStyles={customStyles}
    onPress={() => handleClick()}
  >
    {isIcon && !loading && IconValue}
    {loading && <></>}
    <StyledText buttonType={buttonType} customTextStyles={customTextStyles}>
      {text}
    </StyledText>
  </StyledButton>
);

export default Button;
