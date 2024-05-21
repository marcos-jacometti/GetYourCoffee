import React from "react";
import { BtnContainer } from "./style";
import { Link } from "react-router-dom";

export default function Button({link, title, state}){
    const query = new URLSearchParams(state).toString();
    return(
        <BtnContainer>
            <Link to={`${link}?${query}`}>
                <button>{title}</button>
            </Link>
        </BtnContainer>
    );
}