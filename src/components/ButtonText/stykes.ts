import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: none;
    color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.SALMON : theme.COLORS.GRAY_100};

    border: none;
    font-size: 16px;
`;