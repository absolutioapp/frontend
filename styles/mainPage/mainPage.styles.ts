import { SafeAreaView, ImageBackground, Image } from "react-native";
import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #121416;
`;

const Content = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
  bounces: false,
}))``;

const HeroImage = styled(ImageBackground).attrs({
  blurRadius: 3,
})`
  width: 100%;
  min-width: 520px;
  transform: scale(1.8);
  height: 180px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
`;

const Placeholder = styled.View`
  width: 48px;
`;

const AppName = styled.Text`
  flex: 1;
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
`;

const IconButton = styled.TouchableOpacity`
  width: 48px;
  align-items: flex-end;
  justify-content: center;
`;

const Title = styled.Text`
  padding: 20px 16px 12px;
  text-align: center;
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
`;

const Subtitle = styled.Text`
  padding: 0 16px 12px;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  line-height: 22px;
`;

const ButtonGroup = styled.View`
  width: 100%;
  max-width: 480px;
  padding: 0 16px;
  align-self: center;
  gap: 12px;
`;

const FooterContainer = styled.View`
  margin-top: auto;
`;

const FooterText = styled.Text`
  padding: 4px 16px 12px;
  text-align: center;
  color: #a2abb3;
  font-size: 14px;
`;

const BottomSpacer = styled.View`
  height: 20px;
  background-color: #121416;
`;

const LogoImage = styled(Image)`
  width: 120px;
  height: 120px;
  align-self: center;
  margin-top: 20px;
  border-radius: 60px;
  overflow: hidden;
`;

export {
  Container,
  Content,
  HeroImage,
  HeaderRow,
  Placeholder,
  AppName,
  IconButton,
  Title,
  Subtitle,
  ButtonGroup,
  FooterContainer,
  FooterText,
  BottomSpacer,
  LogoImage,
};
