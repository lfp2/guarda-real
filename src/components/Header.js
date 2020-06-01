import React from "react";
import {
  ViewCenter,
  Title,
  ModelIcon,
  ViewStyle,
} from "../assets/styles/header";

export default function Header({ title, icon }) {
  return (
    <ViewCenter>
      <ViewStyle>
        <ModelIcon source={require("../assets/images/mapa_fechado.png")} />
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
