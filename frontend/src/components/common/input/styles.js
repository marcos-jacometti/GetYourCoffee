import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5vw;
    border-radius: 1vh;
    box-shadow: ${(props) => props.theme.boxShadow};
    padding: 1rem;
    height: 4vh;
    
    svg{
        fill: ${(props) => props.theme.fill};
        font-size: 1vw;
    }

    input{
        border: none;
        background-color: transparent;
        width: 100%;
        color: ${(props) => props.theme.color};
        font-size: 0.8vw;
        outline: none;
    }
`;