import React, { useState } from "react";

import {
  MapaBackground,
  TrilhaBackground,
  TreasureImage,
  ViewStyle,
  ModelIcon,
  Title,
  ViewCenter,
  DiamondIcon,
  DiamondText,
  ViewStyleDiamonds,
  MapaIcon,
  MapaText,
  CasteloView,
  MetasView,
} from "../assets/styles/mapa";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Mapa() {
  const [diamonds, setDiamonds] = useState("50");

  const navigation = useNavigation();

  const handleMapPress = () => {
    navigation.pop();
  };

  const handleLetterPress = () => {
    navigation.navigate("Metas");
  };

  const handleCasteloPress = () => {
    navigation.navigate("Home");
  };

  return (
    <MapaBackground source={require("../assets/images/mapa_background.png")}>
      <ViewCenter>
        <TouchableWithoutFeedback onPress={handleMapPress}>
          <ModelIcon source={require("../assets/images/mapa_aberto.png")} />
        </TouchableWithoutFeedback>
        <Title>Mapa</Title>
        <ViewStyleDiamonds>
          <DiamondIcon source={require("../assets/images/diamante.png")} />
          <DiamondText>{diamonds}</DiamondText>
        </ViewStyleDiamonds>
      </ViewCenter>
      <CasteloView onPress={handleCasteloPress}>
        <MapaIcon source={require("../assets/images/castelo.png")} />
        <MapaText>Castelo</MapaText>
      </CasteloView>
      <MetasView onPress={handleLetterPress}>
        <MapaIcon source={require("../assets/images/letter.png")} />
        <MapaText>Metas Reais</MapaText>
      </MetasView>
      <TrilhaBackground source={require("../assets/images/trilha.png")} />
      <TreasureImage source={require("../assets/images/x.png")} />
    </MapaBackground>
  );
}
