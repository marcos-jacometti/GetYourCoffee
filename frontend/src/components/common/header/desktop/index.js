import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";

import { SiBuymeacoffee } from "react-icons/si";
import ThemeBtn from "../components/btnTheme";

export default function DesktopMenu(){
    return(
        <Container>
            <Link to="/" className="link-styled">
                <div>
                    <SiBuymeacoffee />
                    <h1>GetYourCoffee</h1>
                </div>
            </Link>
            <div>
                <ThemeBtn />
            </div>
        </Container>
    );
}