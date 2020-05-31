import React from "react";
import {
  ScreenCenter,
  PrimaryButton,
  PrimaryTextButton,
  BottomView,
  HeaderImage,
} from "../assets/styles";
import { Title, Logo, TopView } from "../assets/styles/autheticated";

import { useNavigation } from "@react-navigation/native";

export default function Autheticated() {
  return (
    <ScreenCenter>
      <HeaderImage
        source={require("../assets/images/autheticated_beach.png")}
      />
      <TopView>
        <Logo source={require("../assets/images/logo.png")} />
      </TopView>
      <BottomView>
          <Title>Bem vindo, Vossa Majestade</Title>
        <PrimaryButton>
          <PrimaryTextButton>ENTRAR NO REINO</PrimaryTextButton>
        </PrimaryButton>
      </BottomView>
    </ScreenCenter>
  );
}
