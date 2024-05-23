import React from "react";
import HeaderContainer from "../../components/common/header";
import CoffeeCard from "../../components/specific/coffeeCards";
import { CardsContainer, Container } from "./style";
import images from "../../services/utils/loadImg";

export default function Home(){
    return(
        <>
            <HeaderContainer />
            <Container>
                <CardsContainer>
                    <CoffeeCard background={images['1.png']} title="Espresso" 
                        description="Strong, concentrated coffee made by forcing hot water through finely-ground beans." />
                    <CoffeeCard background={images['2.png']} reverse={true} title="Americano" 
                        description="Espresso diluted with hot water, offering a similar strength to drip coffee." />
                    <CoffeeCard background={images['3.png']} title="Latte" 
                        description="Espresso with steamed milk and a small amount of milk foam, creamy and smooth." />
                    <CoffeeCard background={images['4.png']} reverse={true} title="Cappuccino" 
                        description="Equal parts espresso, steamed milk, and milk foam, with a strong coffee flavor." />
                    <CoffeeCard background={images['5.png']} title="Macchiato"
                        description="Espresso stained with a small amount of steamed milk, strong with a touch of creaminess." />
                    <CoffeeCard background={images['6.png']} reverse={true} title="Mocha" description="Espresso mixed with steamed milk and chocolate, often topped with whipped cream, sweet and rich." />
                    <CoffeeCard background={images['7.png']} title="Flat White" 
                        description="Espresso with microfoam, a velvety texture and a strong coffee taste." />
                    <CoffeeCard background={images['8.png']} reverse={true} title="Ristretto" 
                        description="A short, concentrated shot of espresso with a sweeter, less bitter flavor." />
                </CardsContainer>
            </Container>
        </>
    );
}