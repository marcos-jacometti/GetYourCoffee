import React from "react";
import { InputContainer } from "./styles";

export default function Input({icon, type, id, placeholder, onBlur}){
    return(
        <InputContainer>
            {icon}
            <input type={type} id={id} placeholder={placeholder} onBlur={onBlur} required />
        </InputContainer>
    );
}