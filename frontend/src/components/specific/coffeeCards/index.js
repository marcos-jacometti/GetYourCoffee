import React from "react";
import { CoffeeContainer, DescriptionContainer, ImageContainer } from "./style";

import { SiBuymeacoffee } from "react-icons/si";
import Button from "../../common/button";

export default function CoffeeCard({background, title, description, reverse}){
    return(
        <CoffeeContainer $reverse={reverse}>
            <ImageContainer $background={background}/>
            <DescriptionContainer>
                <div>
                    <SiBuymeacoffee />
                    <h1>{title}</h1>
                </div>
                <div>
                    <h3>{description}</h3>
                </div>
                <Button link="/shopping" title="GET" state={{title, description, background}}/>
            </DescriptionContainer>
        </CoffeeContainer>
    );
}