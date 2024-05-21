import React from "react";
import { ShoppingContainer } from "./styles";
import HeaderContainer from "../../components/common/header";
import ShoppingDescription from "../../components/specific/shoppingDescription";


export default function ShoppingCard(){
    return(
        <>
            <HeaderContainer />
            <ShoppingContainer>
                <ShoppingDescription />
                <div>
                    <h2>Fill your informations:</h2>
                </div>
            </ShoppingContainer>
        </>
    );
}