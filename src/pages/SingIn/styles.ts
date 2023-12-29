import styled from "styled-components";
import backgroundImg from '../../assets/background.png';


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

    >h2{
        font-size: 24px;
        margin: 48px 0;   
    }
    
    >p{
        font-size:14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
     
    }

    >a{
        width: 100%;
        color: ${({ theme }) => theme.COLORS.SALMON};
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