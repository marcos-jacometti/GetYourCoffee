import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 8vh;
    box-shadow: ${(props) => props.theme.boxShadow};

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

    .link-styled {
        text-decoration: none;
    }
`;