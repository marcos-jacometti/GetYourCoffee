import styled from "styled-components";

export const CoffeeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 18vw;
    height: 40vh;
    border-radius: 0.5vh;
    box-shadow: ${(props) => props.theme.boxShadow};

    div {
        max-width: 85%;
        text-align: center;
        padding: 1rem;
        color: ${(props) => props.theme.color};
    }

    svg {
        font-size: 10vh;
        fill: ${(props) => props.theme.fill};
    }
`;