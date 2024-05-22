import React from "react";
import { Inputs, ShoppingContainer } from "./styles";
import HeaderContainer from "../../../components/common/header/index";
import ShoppingDescription from "../../../components/specific/shoppingDescription";
import Input from "../../../components/common/input";
import Button from "../../../components/common/button/index";
import { FaUserAlt, FaPhoneAlt, FaStreetView, FaCity, FaAddressBook } from "react-icons/fa";
import script, { getCep } from "../../../services/script";

export default function MainScreen(){
    return(
        <>
            <HeaderContainer />
            <ShoppingContainer>
                <ShoppingDescription />
                <Inputs id="result">
                    <h2>Fill your informations:</h2>
                    <Input icon={<FaUserAlt />} type="text" id="" placeholder="Your Name" />
                    <Input icon={<FaPhoneAlt />} type="number" id="" placeholder="Your Phone"/>
                    <Input icon={<FaStreetView />} type="text" id="code" onBlur={getCep} placeholder="Your Street Code"/>
                    <Input icon={<FaCity />} type="text" id="city" placeholder="Your City" />
                    <Input icon={<FaAddressBook />} type="text" id="address" placeholder="Your Address" />
                    <Button title="GET"/>
                </Inputs>
            </ShoppingContainer>
        </>
    );
}