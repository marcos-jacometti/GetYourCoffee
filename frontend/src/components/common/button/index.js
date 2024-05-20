import React from "react";
import { BtnContainer } from "./style";
import { Link } from "react-router-dom";

export default function Button({link, onClickFunction, title}){
    return(
        <BtnContainer>
            <Link to={link}>
                <button onClick={onClickFunction}>{title}</button>
            </Link>
        </BtnContainer>
    );
}