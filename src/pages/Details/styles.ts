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
        padding: 40px 0;
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
        justify-content: left;
        margin-bottom: 26px;
        align-items: center;
        gap:19px;
        
        
        h1{
            font-size: 32px;
            font-weight: 400;
            
        }

        button{
            width: 70px;
        }
    }

    >div:nth-child(4){
       display: flex;
       gap: 0;
       margin-top: 14px;
       
    }

    >div:nth-child(5){
        display: flex;
        flex-direction: column;
        text-align: justify;

    }
    >div:nth-child(1){
        display: flex;
        justify-content: space-between;

    }
        
`;

export const Profile = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 9px;

    >img {
        width:16px;
        height:16px;
        border-radius:50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }

    p{
        font-size: 16px;
        text-align: justify;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    svg{
        color: ${({ theme }) => theme.COLORS.SALMON};
        stroke-width: 1px;
    }
 
`;

