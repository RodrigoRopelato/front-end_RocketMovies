import styled from "styled-components";


export const Conteiner = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background-color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.SALMON : theme.COLORS.BACKGROUND_900};
    color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.BACKGROUND_900 : theme.COLORS.SALMON};

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