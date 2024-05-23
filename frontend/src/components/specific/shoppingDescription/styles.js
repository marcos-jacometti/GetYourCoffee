import styled from "styled-components";

export const ShoppingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25%;
    height: 100%;
    box-shadow: 5px 0 5px -5px #000;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: ${(props) => props.theme.color};
        height: 30%;
        width: 80%;

        svg {
            fill: ${(props) => props.theme.fill};
            font-size: 20vw;
        }
    }
`;