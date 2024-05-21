import React from "react";
import { CoffeeContainer } from "./style";

import { SiBuymeacoffee } from "react-icons/si";
import Button from "../../common/button";

export default function CoffeeCard({title, description}){
    return(
        <CoffeeContainer>
            <div><SiBuymeacoffee /></div>
            <div>
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>
            <Button link="/shopping" title="GET" state={{title, description}}/>
        </CoffeeContainer>
    );
}