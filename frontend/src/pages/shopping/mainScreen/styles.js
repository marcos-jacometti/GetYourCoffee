import styled from "styled-components";

export const ShoppingContainer = styled.div`
    display: flex;
    align-items: center;
    height: 92vh;
    color: ${(props) => props.theme.color};
`;

export const Inputs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.5vh;
`;