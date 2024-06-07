import styled from "styled-components";

export const StyledLine = styled.div`
    width: 100%;
    max-width: 1010px;
    border: 1px solid #D8E1EB;
    margin: auto;
    margin-bottom: 32px;

    @media (max-width: 1010px){
        width: 760px;
    }
    @media (max-width: 751px){
        width: 496px;
        margin-bottom: 20px;
        margin-top: 20px;  
    }
    @media (max-width: 520px){  
        width: 328px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    @media (max-width: 360px){
        width: auto;
        margin-right: 16px;
        margin-left: 16px;
    }

`