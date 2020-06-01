import React from "react";
import {
  ViewCenter,
  Title,
  ModelIcon,
  ViewStyle,
} from "../assets/styles/header";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title, icon }) {
  const navigation = useNavigation();

  const handleMapPress = () => {
    navigation.navigate("Mapa");
  };

  return (
    <ViewCenter>
      <ViewStyle>
        <TouchableWithoutFeedback onPress={handleMapPress}>
          <ModelIcon source={require("../assets/images/mapa_fechado.png")} />
        </TouchableWithoutFeedback>
      </ViewStyle>
      <Title>{title}</Title>
      <ViewStyle>
        {icon == "castelo" && (
          <ModelIcon source={require("../assets/images/castelo.png")} />
        )}
        {icon == "letter" && (
          <ModelIcon source={require("../assets/images/letter.png")} />
        )}
      </ViewStyle>
    </ViewCenter>
  );
}
