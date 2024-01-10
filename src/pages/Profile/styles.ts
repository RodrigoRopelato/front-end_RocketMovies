import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width:100%;

    >header{
        width: 100%;
        height: 144px;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_MOVIE};

        display: flex;
        align-items: left;

        padding: 0 124px;
        
        button{
            width: 70px;
        }
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    max-width: 340px;
    margin: -84px auto 0; 

    >div:nth-child(4){
        margin-top: 18px;
    }

    button{
        margin-top: 18px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;

    width: 186px;
    height: 186px;

    >img{
        width: 186px;
        height: 186px;
        border-radius: 50%;
        object-fit: cover;
    }


    >label{
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.SALMON};
        border-radius:50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right:7px;

        cursor:pointer;

        input{
            display:none;
        }

        svg{
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }

    }

`;

export const Back = styled(Link)`
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: none;
    color: ${({ theme}) => theme.COLORS.SALMON};

    border: none;
    font-size: 16px;
`;