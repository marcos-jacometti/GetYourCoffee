import styled from "styled-components";

export const CoffeeContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 50vh;
    box-shadow: ${(props) => props.theme.boxShadow};
    flex-direction: ${(props) => (props.$reverse ? 'row-reverse' : 'row')};
    animation: right 1s ease forwards;

    @keyframes right {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;

export const ImageContainer = styled.div`
    height: 100%;
    width: 45vw;
    background-image: url(${(props) => props.$background});
    background-size: cover;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55vw;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20vw;
        padding: 1rem;
        text-align: center;

        svg {
            font-size: 2vw;
        }
    }
`;