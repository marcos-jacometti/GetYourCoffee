import styled from "styled-components";

export const ShoppingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50vw;
    height: 90%;
    background: url(${(props) => props.$background}) center / cover;
    box-shadow: ${(props) => props.theme.boxShadow};

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: #fff;
        height: 30%;
        width: 50%;
        text-shadow: 3px 3px 5px #000;

        svg {
            fill: ${(props) => props.theme.fill};
            font-size: 20vw;
        }
    }
`;