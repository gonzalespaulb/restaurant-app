import styled from 'styled-components'

export const MainContainer = styled.div`
    background: #fefae0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    border-bottom: 2px dashed #000;
`;

export const PageLinks = styled.span`
    font-size: 24px;
    line-height: 24px;
    cursor: pointer;
    border: 2px dashed #000;
    padding: 10px;
    border-radius: 10px;

    :not(:last-child) {
        margin-right: 32px;
    }

    :hover {
        background: #000;
        color: #fefae0;
    }
`;