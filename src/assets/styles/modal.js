import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";

export const CircleButton = styled.TouchableOpacity`
  background: #ca0024;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  background: #ca0024;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-bottom: -15px;
  justify-content: center;
  align-items: center;
`;

export const ArrowIcon = styled(Icon)`
  font-size: 32px;
  color: #ffffff;
`;

export const CloseIcon = styled(Icon)`
  font-size: 24px;
  color: #ffffff;
`;

export const HoracioImage = styled.Image`
  position: absolute;
  height: 70%;
  left: 0px;
  bottom: 0px;
`;

export const BaloonView = styled.View`
  align-items: flex-end;
  margin-bottom: 10px;
  margin-top: 36%;
  margin-left: 30%;
  margin-right: 16px;
  margin-bottom: -36px;
  height: 30%;
`;

export const BaloonImage = styled.ImageBackground`
  height: 100%;
  width: 100%;
  resize-mode: contain;
`;

export const Container = styled.View`
  position: absolute;
  background: rgba(100, 100, 100, 0.5);
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const ViewButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 50%;
  margin-right: 16px;
  z-index: 101;
`;

export const ViewCloseButton = styled.View`
  flex-direction: row;
  margin-left: 80%;
  margin-right: 16px;
  z-index: 102;
`;

export const TextBaloon = styled.Text`
  font-size: 20px;
  margin: 10px;
  text-align: center;
`;

export const TextArrow = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #ffffff;
`;
