import React from "react";

import { ScreenCenter } from "../assets/styles";
import Header from "../components/Header";
import {
  BottomView
} from "../assets/styles/home";

export  default function Metas() {
    return (
      <ScreenCenter>
        <Header title="Metas Reais" icon="letter" />
        <BottomView></BottomView>
      </ScreenCenter>
    );
}