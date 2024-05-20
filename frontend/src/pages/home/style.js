import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 110vh;
    color: ${(props) => props.theme.color};
`;

export const CardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3vh;
    width: 80%;
    padding: 1rem;
`;