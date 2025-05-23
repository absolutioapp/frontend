import { AuthButtonContainer, AuthButtonLabel } from "./AuthButton.styles";
import AuthButtonProps from "./AuthButton.types";

export const AuthButton: React.FC<AuthButtonProps> = ({
  label,
  bgColor,
  textColor,
  icon,
  disabled = false,
  onPress,
}) => (
  <AuthButtonContainer
    activeOpacity={0.85}
    onPress={disabled ? undefined : onPress}
    bg={bgColor}
    disabled={disabled}
  >
    {icon}
    <AuthButtonLabel color={textColor}>{label}</AuthButtonLabel>
  </AuthButtonContainer>
);

export default AuthButton;
