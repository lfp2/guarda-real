import styled from "styled-components/native";

export const ViewCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ScreenCenter = styled(ViewCenter)`
  background: #012f59;
`;

export const TextCenter = styled.Text`
  text-align: center;
`;


export const Button = styled.TouchableOpacity`
  background: #ffffff;
  width: 315px;
  height: 50px;
  padding: 12px;
  border-radius: 50px;
  margin: 10px;
  justify-content: center;
`;

export const PrimaryButton = styled(Button)`
  background: #CA0024;
`;

export const TextButton = styled(TextCenter)`
  color: #000000;
  font-size: 15px;
  font-weight: bold;
`;

export const PrimaryTextButton = styled(TextButton)`
  color: #ffffff;
`;

export const BottomView = styled.View`
  width: 100%;
  height: 55%;
  bottom: 0%;
  background: #ffffff;
  justify-content: flex-start;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const HeaderImage = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0px;
`;

export const TopView = styled.View`
  flex: 1;
  top: 0%;
  justify-content: flex-start;
  align-items: center;
`;
