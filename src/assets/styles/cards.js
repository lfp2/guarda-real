import styled from "styled-components";
import Icon from "react-native-vector-icons/AntDesign";

export const CardView = styled.View`
  width: 80%;
  height: 120px;
  margin: 10px;
  padding: 10px;
  background: #ffffff;
  border-radius: 20px;
  align-items: flex-start;
`;

export const MetaText = styled.Text`
  font-size: 14px;
  color: #012f59;
  margin: 5px;
`;

export const TitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #012f59;
  margin: 5px;
`;
export const ValueText = styled.Text`
  font-size: 18px;
  color: #012f59;
  margin: 5px;
`;

export const CircleButton = styled.TouchableOpacity`
  background: #012f59;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const PlusIcon = styled(Icon)`
  font-size: 32px;
  color: #ffffff;
`;
