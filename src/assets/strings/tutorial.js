import React from "react";
import { Text } from "react-native";

export const tutorial = (name, gender) => [
  <Text>
    <Text>Seja bem-vindo, </Text>
    <Text style={{ fontWeight: "bold" }}>
      {gender} {name}.
    </Text>
  </Text>,
  <Text>
    <Text>Meu nome é </Text>
    <Text style={{ fontWeight: "bold" }}>Horácio</Text>
    <Text> e faço parte da sua </Text>
    <Text style={{ fontWeight: "bold" }}>Guarda Real!</Text>
  </Text>,
  "Vossa Alteza, aqui é onde você visualizará todas as suas riquezas...",
  <Text>
    <Text>Se tiver algum problema, não hesite em me chamar.</Text>
    <Text style={{ fontWeight: "bold" }}>Estou aqui para ajudá-lo!</Text>
  </Text>,
];
