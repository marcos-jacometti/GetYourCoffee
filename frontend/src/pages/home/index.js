import React, { useState } from "react";
import HeaderContainer from "../../components/common/header";
import CoffeeCard from "../../components/specific/coffeeCards";
import { CardsContainer, Container } from "./style";

export default function Home(){
    return(
        <>
            <HeaderContainer />
            <Container>
                <h2>Get your free coffee here</h2>
                <CardsContainer>
                    <CoffeeCard title="Espresso" description="Strong, concentrated coffee made by forcing hot water through finely-ground beans." />
                    <CoffeeCard title="Americano" description="Espresso diluted with hot water, offering a similar strength to drip coffee." />
                    <CoffeeCard title="Latte" description="Espresso with steamed milk and a small amount of milk foam, creamy and smooth." />
                    <CoffeeCard title="Cappuccino" description="Equal parts espresso, steamed milk, and milk foam, with a strong coffee flavor." />
                    <CoffeeCard title="Macchiato" description="Espresso stained with a small amount of steamed milk, strong with a touch of creaminess." />
                    <CoffeeCard title="Mocha" description="Espresso mixed with steamed milk and chocolate, often topped with whipped cream, sweet and rich." />
                    <CoffeeCard title="Flat White" description="Espresso with microfoam, a velvety texture and a strong coffee taste." />
                    <CoffeeCard title="Ristretto" description="A short, concentrated shot of espresso with a sweeter, less bitter flavor." />
                </CardsContainer>
            </Container>
        </>
    );
}