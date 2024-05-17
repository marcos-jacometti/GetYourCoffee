import React from "react";
import HeaderContainer from "../../components/common/header";
import CoffeeCard from "../../components/specific/coffeeCards";
import { CardsContainer, Container } from "./style";

export default function Home(){
    return(
        <>
            <HeaderContainer />
            <Container>
                <CardsContainer>
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                </CardsContainer>
            </Container>
        </>
    );
}