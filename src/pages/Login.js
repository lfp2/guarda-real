import React from "react";
import {
  ScreenCenter,
  PrimaryButton,
  PrimaryTextButton,
  BottomView,
  HeaderImage,
} from "../assets/styles";
import { Title, Logo, TopView } from "../assets/styles/login";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const handleQrCodePress = () => {
    navigation.navigate("Home");
  };

  return (
    <ScreenCenter>
      <HeaderImage source={require("../assets/images/login_castelo.png")} />
      <TopView>
        <Title>Entrar no Reino</Title>
      </TopView>
      <BottomView>
        <PrimaryButton onPress={() => handleQrCodePress()}>
          <PrimaryTextButton>ESCANEAR QR CODE</PrimaryTextButton>
        </PrimaryButton>
        <PrimaryButton>
          <PrimaryTextButton>ENTRAR COM CÓDIGO</PrimaryTextButton>
        </PrimaryButton>
        <Logo source={require("../assets/images/logo.png")} />
      </BottomView>
    </ScreenCenter>
  );
}
