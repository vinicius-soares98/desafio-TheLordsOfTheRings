import styled from "styled-components";

export const StyledCards = styled.div`
    width: 100%;
    max-width: 240px;
    height: 350px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 #0C19321F;
    border-radius: 6px;
    margin-bottom: 32px;
    &:hover, &:focus{
        box-shadow: 0 16px 16px 0 #0C19321F;
    }
    

    .movieImage{
        height: 45%;
        background-color: #ABBBCC;
        display: flex;
        align-items: center;
        justify-content:center;
        border-radius: 6px 6px 0 0;
   
    }
    .movieInfo{
        padding: 10px 16px 20px 16px;
        display: flex;
        gap: 16px;
        flex-direction: column;
        width: 100%;
        height: 55%;
    }
    .movieDataWrapper{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .movieTitle{
        font-weight: 600;
        font-size: 18px;
        height: 45px;
    }
    .awardsWrapper{
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .awards img{
        width: 20px;
        height: 20px;
    }
    .awardsInfo{
        flex-wrap: nowrap;
        font-size: 14px;
        line-height: 14px;
        white-space: nowrap;
    }
    .valorsWrapper{
        display: flex;
        gap: 32px;
    }
    .budget{
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 50%;
    }
    .budget p:nth-child(1), .revenue p:nth-child(1){
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
    }
    .budget p:nth-child(2), .revenue p:nth-child(2){
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
    }
    .revenue{
        width: 50%;
    }
    @media (max-width: 520px){
        width: 100%;
        max-width: 328px;;
        margin: 0;
        flex-grow: 1;
    }
    @media (max-width: 360px){
        width: 100%;
        max-width: 328px;;
        margin: 0;

        .movieImage{
            height: 150px;
        }
    }
`