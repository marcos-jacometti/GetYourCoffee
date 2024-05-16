import styled from "styled-components";

export const ContainerBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    
    button {
        background-color: transparent;
        outline: none;
        border: none;
        font-size: 1.4vw;
        cursor: pointer;

        svg {
            fill: ${(props) => props.theme.fill};
        }
    }
`;