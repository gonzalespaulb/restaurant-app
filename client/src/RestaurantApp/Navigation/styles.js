import styled from 'styled-components'

export const MainContainer = styled.div`
    background: #fefae0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PageLinks = styled.span`
    font-size: 24px;
    line-height: 24px;
    cursor: pointer;

    :not(:last-child) {
        margin-right: 32px;
    }

    :hover {
        text-decoration: underline;
    }
`;