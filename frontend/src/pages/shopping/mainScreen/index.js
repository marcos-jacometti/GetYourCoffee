import React from "react";
import { Inputs, ShoppingContainer, StyledToast } from "./styles";
import HeaderContainer from "../../../components/common/header/index";
import ShoppingDescription from "../../../components/specific/shoppingDescription";
import Input from "../../../components/common/input";
import Button from "../../../components/common/button/index";
import { FaUserAlt, FaPhoneAlt, FaStreetView, FaCity, FaAddressBook } from "react-icons/fa";
import { getCep } from "../../../services/api/script";
import { handleCreateOrder } from "../../../services/controllers/handleCreateOrder";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MainScreen(){
    const notify = (message, type) => {
        toast(message, {type: type});
    };

    const handleClick = async () => {
        try{
            await handleCreateOrder();
            notify("☕ Order was created successfully", "success");
        } catch(error) {
            notify("❌ Failed to create order!", "error");
        }
    };

    return(
        <>
            <HeaderContainer />
            <ShoppingContainer>
                <ShoppingDescription />
                <Inputs>
                    <h2>Fill your informations:</h2>
                    <Input icon={<FaUserAlt />} type="text" id="name" placeholder="Your Name" />
                    <Input icon={<FaPhoneAlt />} type="text" id="phone" placeholder="Your Phone"/>
                    <Input icon={<FaStreetView />} type="text" id="code" onBlur={getCep} placeholder="Your Street Code"/>
                    <Input icon={<FaCity />} type="text" id="city" placeholder="Your City" />
                    <Input icon={<FaAddressBook />} type="text" id="street" placeholder="Your Address" />
                    <Button title="GET" onClick={handleClick} link="#"/>
                    <StyledToast position="bottom-left" />
                </Inputs>
            </ShoppingContainer >
        </>
    );
}