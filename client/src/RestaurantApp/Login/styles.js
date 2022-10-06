import styled from "styled-components"

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
`;

export const LoginBox = styled.div`
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background: #fff;
    display: flex;
    flex-direction: column;
`;

export const LoginInput = styled.input`
    height: 40px;
    width: 300px;
    margin-bottom: 40px;
`;

export const InputLabel = styled.span`
    margin-bottom: 16px;
`;

export const SubmitBtn = styled.div`
    padding: 24px;
    width: 100%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubmitText = styled.span`
    font-size: 14px;
    line-height: 14px;
    color: #fff;
`;

