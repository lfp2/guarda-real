import React from "react";

import { ScreenCenter } from "../assets/styles";
import Header from "../components/Header";
import {
  BottomView
} from "../assets/styles/home";
import { CardMetas } from "../components/CardMetas";

import { useNavigation } from "@react-navigation/native";
import { CircleButton, PlusIcon } from "../assets/styles/cards";

export default function Metas() {
    return (
      <ScreenCenter>
        <Header title="Metas Reais" icon="letter" />
        <BottomView>
          <CardMetas
            idCard={"1"}
            nameCard={"Nintendo Switch"}
            metaGoal={"4.000,00"}
          />
          <CircleButton>
              <PlusIcon name="plus" />
          </CircleButton>
        </BottomView>
      </ScreenCenter>
    );
}