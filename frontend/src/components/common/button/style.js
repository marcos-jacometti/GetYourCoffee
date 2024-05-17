import styled from "styled-components";

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
            box-shadow: ${(props) => props.theme.boxShadow};
        }

    button {
        background-color: #32CD32;
        border: none;
        height: 4vh;
        width: 8vw;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
`;