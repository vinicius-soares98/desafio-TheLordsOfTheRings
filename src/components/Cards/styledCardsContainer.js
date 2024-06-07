import styled from "styled-components";

export const StyledCardsContainer = styled.div`
    width: 100%;
    max-width: 1010px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    color: red;
    justify-content: center;
    gap: 16px;

    @media (max-width: 360px){
        padding: 0 16px;
        grid-template-columns: 328px;
        place-items: center;
    }
`