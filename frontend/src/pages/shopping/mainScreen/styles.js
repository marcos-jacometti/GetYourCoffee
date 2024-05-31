import styled from "styled-components";
import { ToastContainer } from "react-toastify";

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

export const StyledToast = styled(ToastContainer)`
    &&&.Toastify__toast-container {
        width: 20vw;
    }
    .Toastify__toast {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
    }
`;