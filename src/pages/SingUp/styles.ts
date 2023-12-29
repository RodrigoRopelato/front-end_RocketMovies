import styled from "styled-components";
import backgroundImg from '../../assets/background.png';
import { Link } from "react-router-dom";


export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display:flex;
    gap: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    text-align: center;
    >h1{
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.SALMON};
    }
    
    >p{
        font-size:14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        margin-top: -8px;
    }

    >h2{
        font-size: 24px;
        margin: 40px 0; 
    }
    
    >a{
        text-align: center;
        width: 100%;
        color: ${({ theme }) => theme.COLORS.SALMON};
        margin: 18px 0;
        svg{
            margin-right: 8px;
        }
    }
    
    button{
        margin: 18px 0;
    }
`;

export const Backgroud = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;

export const Back = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: none;
    color: ${({ theme}) => theme.COLORS.SALMON};

    border: none;
    font-size: 16px;
`;