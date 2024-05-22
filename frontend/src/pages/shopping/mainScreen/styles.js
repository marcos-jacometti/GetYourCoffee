import styled from "styled-components";

export const ShoppingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90vh;
    color: ${(props) => props.theme.color};
`;

export const Inputs = styled.div`
    height: 35vh;
    width: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
`;