import { Link } from "react-router-dom";
import styled from "styled-components";

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

export const Form = styled.form`
    max-width: 1400px;
    padding: 0 80px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap:40px;
    


    >header{
        display: flex;
        flex-direction: column;
        gap: 24px;
        
    }

    >div{
        display: flex;
        gap: 40px;
    }
    
    .tags{
        display: flex;
        padding: 16px;
        align-items: flex-start;
        gap: 24px;
        align-self: stretch;
        border-radius: 8px;
        flex-wrap: wrap;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        >div{
            box-sizing: border-box;
            width : auto;

            input{
                width : auto;
            }
        }
    }
     
`;

export const Back = styled.div`
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