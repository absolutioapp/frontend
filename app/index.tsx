import React from "react";
import bg from "@/assets/images/bg.png";
import logo from "@/assets/images/logos/LOGO_WITH_BG_WITH_TEXT.png";

import {
  Content,
  HeroImage,
  Container,
  HeaderRow,
  Title,
  Subtitle,
  FooterContainer,
  FooterText,
  BottomSpacer,
  LogoImage,
} from "@/styles/mainPage/mainPage.styles";
import Auth from "@/components/Auth/Auth";

export default function WelcomeScreen() {
  return (
    <Container>
      <Content>
        <HeroImage source={bg} resizeMode="cover" />
        <HeaderRow>
          <LogoImage source={logo} />
        </HeaderRow>

        <Title>Welcome to Absolutio</Title>
        <Subtitle>
          Explore a world of stunning wallpapers and personalize your device
          like never before.
        </Subtitle>

        <Auth />

        <FooterContainer>
          <FooterText>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </FooterText>
          <BottomSpacer />
        </FooterContainer>
      </Content>
    </Container>
  );
}
