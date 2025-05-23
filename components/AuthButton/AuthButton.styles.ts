import styled from "styled-components/native";

const AuthButtonContainer = styled.TouchableOpacity<{
  bg: string;
  disabled: boolean;
}>`
  height: 48px;
  width: 100%;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }: { bg: string }) => bg};
  flex-direction: row;
  gap: 10px;
  opacity: ${({ disabled }: { disabled: boolean }) => (disabled ? 0.5 : 1)};
`;

const AuthButtonLabel = styled.Text<{ color: string }>`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.15px;
  color: ${({ color }: { color: string }) => color};
`;

export { AuthButtonContainer, AuthButtonLabel };
