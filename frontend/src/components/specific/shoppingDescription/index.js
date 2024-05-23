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

    return(
        <ShoppingContainer>
            <div>
                <SiBuymeacoffee />
            </div>
            <div>
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>
        </ShoppingContainer>
    );
}