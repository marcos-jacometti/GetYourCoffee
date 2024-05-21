import styled from "styled-components";

export const ShoppingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 20vw;
    height: 15vh;

    div {
        text-align: center;
        display: flex;
        color: ${(props) => props.theme.color};

        svg {
            fill: ${(props) => props.theme.fill};
            font-size: 1.4vw;
        }
    }
`;