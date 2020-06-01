import styled from "styled-components/native";

export const MapaBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
  resize-mode: contain;
`;

export const TrilhaBackground = styled.Image`
  position: absolute;
  height: 90%;
  width: 70%;
  margin: 36px;
  resize-mode: contain;
  z-index: 101;
`;

export const TreasureImage = styled.Image`
  position: absolute;
  width: 64px;
  resize-mode: contain;
  top: 87%;
  left: 57%;
  z-index: 102;
`;

export const ViewStyle = styled.View`
  width: 15%;
  align-items: center;
`;

export const ModelIcon = styled.Image`
  height: 48px;
  resize-mode: contain;
  margin-left: 48px;
  z-index: 103;
`;

export const ViewCenter = styled.View`
  height: 64px;
  width: 100%;
  top: 3%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ViewStyleDiamonds = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin: 10px;
`;

export const DiamondIcon = styled.Image`
  height: 24px;
  resize-mode: contain;
`;

export const DiamondText = styled.Text`
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
  margin-right: 10px;
`;
