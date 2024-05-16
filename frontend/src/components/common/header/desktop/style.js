import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 10vh;

    div {
        padding: 1rem;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.color};

        svg {
            fill: ${(props) => props.theme.fill};
            font-size: 1.4vw;
        }
    }
`;