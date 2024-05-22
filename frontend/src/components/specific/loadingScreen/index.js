import React from "react";
import { LoadingContainer } from "./styles";
import { BeatLoader } from "react-spinners";

export default function LoadingScreen(){
    return(
        <LoadingContainer>
            <BeatLoader />
        </LoadingContainer>
    );
}