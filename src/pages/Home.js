import React , {useState} from "react";
import {ScreenCenter} from "../assets/styles";
import { BottomView, HomeButton, HomeTextButton } from "../assets/styles/home";
import {Header} from "../components/Header";

export default function Home(){
    const [childName, setChildName] = useState('Vinicius');
    const [points, setPoints] = useState('0');
    const [money, setMoney] = useState('0,00');

    return (
      <ScreenCenter>
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