import React from "react";
import { ViewCenter, Title} from "../assets/styles/header";

export default function Header(){
    return (
        <ViewCenter>
            <Title>{headerTitle}</Title>
        </ViewCenter>
    );
}