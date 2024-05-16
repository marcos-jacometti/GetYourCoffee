import React from "react";
import { Container } from "./style";

import { SiBuymeacoffee } from "react-icons/si";
import ThemeBtn from "../components/btnTheme";
import UserBtn from "../components/btnUser";

export default function DesktopMenu(){
    return(
        <Container>
            <div>
                <SiBuymeacoffee />
                <h1>GetYourCoffee</h1>
            </div>
            <ThemeBtn />
            <UserBtn />
        </Container>
    );
}

{/* Building the menu structure */}