import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    >main{
        grid-area: content;
        overflow-y: auto;
        padding: 50px 0;
    }

`;

export const Content = styled.div`
    max-width: 1400px;
    padding: 0 80px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    
    >div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        align-items: center;
        
        h1{
            font-size: 32px;
            font-weight: 400;
            
        }
    }        
    `;

export const NewMovie = styled(Link)`

    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background-color: ${({ theme }) => theme.COLORS.SALMON};
    color: ${({ theme, }) => theme.COLORS.BACKGROUND_900};

    height: 48px;
    border: 0;
    padding: 0 16px;
    border-radius: 8px;

    font-size:16px;
    font-weight: 400;

    &:disabled{
    opacity:0.5;
    }
`;

