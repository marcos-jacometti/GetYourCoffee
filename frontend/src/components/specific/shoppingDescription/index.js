import React, { useState } from "react";
import { ShoppingContainer } from "./styles";

import { SiBuymeacoffee } from "react-icons/si";

export default function ShoppingDescription(){
    return(
        <ShoppingContainer>
            <div>
                <SiBuymeacoffee />
                <h2></h2>
            </div>
            <div>
                <h4></h4>
            </div>
        </ShoppingContainer>
    );
}