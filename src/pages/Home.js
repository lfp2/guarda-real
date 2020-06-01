import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
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
import Header from "../components/Header";

import { ScreenCenter } from "../assets/styles";
import {
  BottomView,
  HomeButton,
  HomeTextButton,
  HomeButtonIcon,
  LetterIcon,
  LetterText,
  TitleText,
  TextureBackground,
} from "../assets/styles/home";

import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [childName, setChildName] = useState("Vinicius");
  const [childGender, setChildGender] = useState("Príncipe");
  const [points, setPoints] = useState("0");
  const [money, setMoney] = useState("0,00");
  const [modalVisible, setModalVisible] = useState(true);
  const [id, setId] = useState(0);
  const message = tutorial("Vinicius", "Príncipe");
  const castelo = require("../assets/images/castelo.png");

  const navigation = useNavigation();

  const handleLetterPress = () => {
    navigation.navigate("Metas");
  };

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
      <Header title="Castelo" icon="castelo" />
      <BottomView>
        <TextureBackground source={require("../assets/images/Textura.png")}>
          <TitleText>
            {childGender} {childName}
          </TitleText>
          <HomeButton>
            <HomeButtonIcon source={require("../assets/images/diamante.png")} />
            <HomeTextButton>{points} pontos</HomeTextButton>
          </HomeButton>
          <HomeButton>
            <HomeButtonIcon source={require("../assets/images/moeda.png")} />
            <HomeTextButton>R$ {money}</HomeTextButton>
          </HomeButton>
          <HomeButton>
            <HomeButtonIcon source={require("../assets/images/tesouro.png")} />
            <HomeTextButton>Tesouro</HomeTextButton>
          </HomeButton>
          <TouchableWithoutFeedback onPress={handleLetterPress}>
            <View>
              <LetterIcon source={require("../assets/images/letter.png")} />
              <LetterText>Nova meta</LetterText>
            </View>
          </TouchableWithoutFeedback>
        </TextureBackground>
      </BottomView>
    </ScreenCenter>
  );
}
