import React from "react";
import { Inputs, ShoppingContainer } from "./styles";
import HeaderContainer from "../../components/common/header";
import ShoppingDescription from "../../components/specific/shoppingDescription";
import Input from "../../components/common/input";
import Button from "../../components/common/button/index";

import { FaUserAlt, FaPhoneAlt, FaStreetView, FaCity, FaAddressBook } from "react-icons/fa";

export default function ShoppingCard(){
    return(
        <>
            <HeaderContainer />
            <ShoppingContainer>
                <ShoppingDescription />
                <Inputs id="result">
                    <h2>Fill your informations:</h2>
                    <Input icon={<FaUserAlt />} type="text" id="" placeholder="Your Name"/>
                    <Input icon={<FaPhoneAlt />} type="number" id="" placeholder="Your Phone"/>
                    <Input icon={<FaStreetView />} type="number" id="codeNumber" placeholder="Your Street Code"/>
                    <Input icon={<FaCity />} type="text" id="" placeholder="Your City"/>
                    <Input icon={<FaAddressBook />} type="text" id="" placeholder="Your Address"/>
                    <Button title="GET"/>
                </Inputs>
            </ShoppingContainer>
        </>
    );
}