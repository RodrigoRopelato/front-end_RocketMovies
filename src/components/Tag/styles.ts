import styled from "styled-components";

export const Container = styled.span`
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    padding: 5px 16px;
    border-radius: 8px;
    margin-right: 8px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200} ;
    color: ${({ theme }) => theme.COLORS.WHITE};
   
`;