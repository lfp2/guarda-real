import styled from "styled-components/native";

export const BottomView = styled.View`
    width: 100%;
    height: 675px;
    bottom: 0%;
    background: #e6dfb3;
    justify-content: flex-start;
    align-items: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const HomeButton = styled.TouchableOpacity`
    background: #ffffff;
    width: 315px;
    height: 100px;
    padding: 12px;
    border-radius: 20px;
    margin: 10px;
    justify-content: center;
`;

export const HomeTextButton = styled.Text`
    font-size: 36px;
    color: #012F59;
    font-weight: bold;
    line-height: 45px;
    text-align: center;
    margin: 10px;
`;