import styled from "styled-components/native";
import { Image } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ProfileImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  background-color: #f0f0f0;
`;

export const NameText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 16px;
`;
