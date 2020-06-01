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
} from "../assets/styles/mapa";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Mapa() {
  const [diamonds, setDiamonds] = useState("50");
  
  const navigation = useNavigation();
  
  const handleMapPress = () => {
    navigation.pop();
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
          <DiamondText>{diamonds} </DiamondText>
        </ViewStyleDiamonds>
      </ViewCenter>
      <TrilhaBackground source={require("../assets/images/trilha.png")} />
      <TreasureImage source={require("../assets/images/x.png")} />
    </MapaBackground>
  );
}
