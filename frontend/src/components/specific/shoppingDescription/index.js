import React from "react";
import { ShoppingContainer } from "./styles";
import { useLocation } from "react-router-dom";

import { SiBuymeacoffee } from "react-icons/si";

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

export default function ShoppingDescription(){
    const query = useQuery();
    const title = query.get("title") || "Default";
    const description = query.get("description") || "Default";
    const background = query.get("background") || "Default" 

    return(
        <ShoppingContainer $background={background}>
            <div>
                <h1>{title}</h1>
                <h2>{description}</h2>
            </div>
        </ShoppingContainer>
    );
}