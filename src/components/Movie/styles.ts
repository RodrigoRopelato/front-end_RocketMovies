import styled from "styled-components";


export const Container = styled.button`
 
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 32px;
    
    margin-bottom: 40px;
    
    border: 0;
    border-radius: 16px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_MOVIE};     
    >div{
        
        >h1{
            color: #F4EDE8;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
        
        >div{
            display: flex ;
            gap: 6px;    
        }
        
    } 
    
    >p{
        height: 52px;
        align-self: stretch;
        overflow: hidden;
        text-align: left;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        text-overflow: ellipsis;
        white-space: normal; /* Alterado para normal para permitir múltiplas linhas */
        line-height: 26px; /* Ajuste conforme necessário para o número desejado de linhas e altura */
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    >footer{
        gap: 8px;
        height: 24px;
    }
    
`;