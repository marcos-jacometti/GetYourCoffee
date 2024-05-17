import React from "react";
import { CoffeeContainer } from "./style";

import { SiBuymeacoffee } from "react-icons/si";
import Button from "../../common/button";

export default function CoffeeCard(){
    return(
        <CoffeeContainer>
            <div><SiBuymeacoffee /></div>
            <div>
                <h2>Espresso</h2>
                <h4>A strong, concentrated coffee shot with a rich flavor and creamy top layer</h4>
            </div>
            <Button />
        </CoffeeContainer>
    );
}