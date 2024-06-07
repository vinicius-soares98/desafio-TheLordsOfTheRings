import styled from "styled-components";

export const StyledFilters = styled.div`
    width: 100%;
    max-width: 1010px;
    display: flex;
    margin: 32px auto;

    .info{
        width: 60%;
        display: flex;
        flex-direction: column;
    }
    h1{
        font-weight:500;
        font-size: 28px;
        height:32px; 
        white-space: nowrap;
    }
    p{
        height: 14px;
        font-size: 14px;
        line-height: 14px;
        margin-top: 8px;
    }
    .filters{
        width: 40%;
        display: flex;
        align-items: flex-end;
    }
    input, select{
        height: 50%;
        width: 50%;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #C5D2E0;
        border-radius: 2px;
        &::placeholder{
            font-weight:400;
            font-size: 14px;
            line-height: 16px;
        }
    }
    input{
        padding: 11px 7px 11px 11px;
    }
    select{
        padding: 0 11px;
        background-color: #F5F7FA;
        font-weight: 400;
    }
    .line{
        width: 100%;
        border: 1px solid #D8E1EB;     
    }
    @media (max-width: 1010px){
       width: 760px;   
    }
    @media (max-width: 751px){
        flex-direction: column;
        width: 496px;
        gap: 16px;
        margin: 20px auto;
        
        .filters{
            width: 100%;
            gap: 8px;
        }
        select, input{
            height: 38px;
        }
    }
    @media (max-width: 520px){
        width: 328px;
        flex-direction: column;
        gap: 16px;
        margin: 20px auto;

        .info{
            width: 100%;
        }
        .info h1{
            margin-bottom: 8px;
        }
        .filters{
            width: 100%;
            flex-direction: column;
            gap: 8px;
        }
        .filters input, .filters select{
            width: 100%;
            height: 38px;             
        }  
    }
    @media (max-width: 360px){
        flex-direction: column;
        padding: 0 16px;
        width: 100%;

        .info{
            gap: 8px;
            margin-bottom: 0;
        }
        .info h1{
            font-size: 24px;
            height: 28px;
            margin-bottom: 8px;
        }
        .info p{
            margin: 0;
        }
}
@media (max-width: 330px){
    .info h1{
        font-size: 22px;
    }
}

`