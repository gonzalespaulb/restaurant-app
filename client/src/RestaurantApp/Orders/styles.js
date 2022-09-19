import styled from "styled-components";
import close from "./assets/close.svg";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 200px;
  grid-gap: 10px;
  position: relative;
`;

export const Card = styled.div`
  background: #fefae0;
  border: 2px dashed #000;
  border-radius: 10px;
  transition: border 0.2s ease;
  padding-left: 40px;
  display: flex;
  align-items: center;
`;

export const AddNewContainer = styled.div`
  padding: 32px 48px;
  border-radius: 10px;
  position: fixed;
  margin-bottom: 10px;
  margin-right: 10px;
  bottom: 0;
  right: 0;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  cursor: pointer;
  background: #000;
  color: #fefae0;
`;

export const CloseBtn = styled.div`
    height: 50px;
    width: 50px;
    background-image: url(${close});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotateZ(45deg);
    cursor: pointer;
`;

export const NewFoodForm = styled.div`
  height: 400px;
  width: 500px;
  position: fixed;
  margin-bottom: 10px;
  margin-right: 10px;
  bottom: 0;
  right: 0;
  z-index: 20;
  transform-origin: bottom right;
  transform: scale(${(props) => props.createNew ? 1 : 0});
  transition: transform 0.7s ease;
  background: #000;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const OrderNumber = styled.span`
  color: #000;
  font-size: 64px;
  line-height: 48px;
  font-weight: bold;
`;
