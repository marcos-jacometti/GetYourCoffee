import React from "react";
import { BtnContainer } from "./style";
import { Link } from "react-router-dom";

export default function Button({link, title, state, onClick}){
    const query = new URLSearchParams(state).toString();
    return(
        <BtnContainer>
            <button onClick={onClick}>
                <Link to={`${link}?${query}`} className="link">
                    {title}
                </Link>
            </button>
        </BtnContainer>
    );
}