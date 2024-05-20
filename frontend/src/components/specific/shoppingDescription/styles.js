import styled from "styled-components";

export const ShoppingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90vh;

    div {
        padding: 1.5rem;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.color};

        svg {
            fill: ${(props) => props.theme.fill};
            font-size: 1.4vw;
        }
    }
`;