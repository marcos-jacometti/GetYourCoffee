import React from "react";
import { ContainerBtn } from "./style";

import { FaUser } from "react-icons/fa";

export default function UserBtn(){
    return(
        <ContainerBtn>
            <button>
                <FaUser />
            </button>
        </ContainerBtn>
    );
}