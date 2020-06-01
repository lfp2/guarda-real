import React from "react";
import {
  CardView,
  TitleText,
  MetaText,
  ValueText,
} from "../assets/styles/cards";

export function CardMetas({ idCard, nameCard, metaGoal }) {
  return (
    <CardView>
      <MetaText>Meta {idCard}</MetaText>
      <TitleText>{nameCard}</TitleText>
      <ValueText>R$ {metaGoal}</ValueText>
    </CardView>
  );
}
