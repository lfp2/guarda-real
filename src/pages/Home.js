import React, { useState } from "react";
import {
  HoracioImage,
  ViewButton,
  CircleButton,
  Icon,
  Container,
  BaloonImage,
  BaloonView,
  TextBaloon,
  ViewCloseButton,
  CloseButton,
  CloseIcon,
  TextArrow,
  ArrowIcon,
} from "../assets/styles/modal";
import { tutorial } from "../assets/strings/tutorial";

import { ScreenCenter } from "../assets/styles";
import { BottomView, HomeButton, HomeTextButton } from "../assets/styles/home";

export default function Home() {
  const [childName, setChildName] = useState("Vinicius");
  const [points, setPoints] = useState("0");
  const [money, setMoney] = useState("0,00");
  const [modalVisible, setModalVisible] = useState(true);
  const [id, setId] = useState(0);
  const message = tutorial("Vinicius", "Príncipe");

  const ModalScreen = () => {
    return (
      <Container>
        <BaloonView>
          <ViewCloseButton>
            <CloseButton onPress={() => setModalVisible(false)}>
              <CloseIcon name="close" />
            </CloseButton>
          </ViewCloseButton>
          <BaloonImage source={require("../assets/images/baloon.png")}>
            <TextBaloon>{message[id]}</TextBaloon>
          </BaloonImage>
        </BaloonView>
        <ViewButton>
          {id != 0 && (
            <CircleButton onPress={() => setId(id - 1)}>
              <ArrowIcon name="arrowleft" />
            </CircleButton>
          )}
          {id != 3 && (
            <CircleButton onPress={() => setId(id + 1)}>
              <ArrowIcon name="arrowright" />
            </CircleButton>
          )}
          {id == 3 && (
            <CircleButton onPress={() => setModalVisible(false)}>
              <TextArrow>OK</TextArrow>
            </CircleButton>
          )}
        </ViewButton>
        <HoracioImage source={require("../assets/images/horacio_point.png")} />
      </Container>
    );
  };

  return (
    <ScreenCenter>
      {modalVisible && <ModalScreen />}
      <BottomView>
        <HomeButton>
          <HomeTextButton>{points} pontos</HomeTextButton>
        </HomeButton>
        <HomeButton>
          <HomeTextButton>R$ {money}</HomeTextButton>
        </HomeButton>
        <HomeButton>
          <HomeTextButton>Tesouro</HomeTextButton>
        </HomeButton>
      </BottomView>
    </ScreenCenter>
  );
}
