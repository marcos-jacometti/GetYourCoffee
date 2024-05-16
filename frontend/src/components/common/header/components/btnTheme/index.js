import React, { useContext } from "react";
import { ContainerBtn } from "./style";

import themeContext from "../../../../../assets/styles/theme";

import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ThemeBtn(){
    const [mode, setMode] = useContext(themeContext);

    return(
        <ContainerBtn>
            <button onClick={() => setMode(!mode)}>
                {!mode ? <BsMoonFill /> : <BsSunFill /> }
            </button>
        </ContainerBtn>
    );
}