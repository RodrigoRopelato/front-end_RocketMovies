import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    max-width: 1400px;
    margin: 0 auto;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color:${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    gap:40px;

    padding: 0 80px;

    button{
        position: relative;
        margin-right: 70px;
        margin-top: 40px;
        background: none;
        border: 0;
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;

export const Logo = styled(Link)`
    font-size: 24px;
    font-weight: 700;
    color: ${({theme})=> theme.COLORS.SALMON};
`;

export const Profile = styled(Link)`
    position: relative;
    margin-right: -140px;
    display: inline-flex;
    align-items: center;
    gap: 9px;

 >img {
    width:64px;
    height:64px;
    border-radius:50%;
    border: 1px solid ${({theme})=> theme.COLORS.GRAY_300};
 }

 >div{
    width: 120px;

    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 24px;

    strong{
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
 }
`;