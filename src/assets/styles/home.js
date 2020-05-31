import styled from "styled-components/native";

export const BottomView = styled.View`
  width: 100%;
  height: 80%;
  bottom: 0%;
  background: #e6dfb3;
  justify-content: flex-start;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const HomeButtonIcon = styled.Image`
  height: 40px;
  resize-mode: contain;
  margin: 10px;
`;

export const HomeButton = styled.TouchableOpacity`
  background: #ffffff;
  width: 80%;
  height: 15%;
  padding: 12px;
  border-radius: 20px;
  margin: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HomeTextButton = styled.Text`
  font-size: 36px;
  color: #012f59;
  font-weight: bold;
  line-height: 45px;
  text-align: center;
  margin: 10px;
`;

export const LetterIcon = styled.Image`
  height: 20%;
  resize-mode: contain;
  margin-top: 10px;
`;

export const LetterText = styled.Text`
  font-size: 24px;
  text-align: center;
`;

export const TitleText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 5px;
`;

