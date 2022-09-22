import styled from "styled-components";
import close from "./assets/close.svg";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(200px, max-content);
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
  justify-content: space-between;
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

export const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const FormLabel = styled.label`
  color: #fefae0;
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;
`;

export const FormInput = styled.input`
  background: transparent;
  font-size: 18px;
  line-height: 18px;
  padding: 16px 0;
  border: none;
  color: #fefae0;
`;

export const InputLine = styled.div`
  height: 2px;
  width: 400px;
  background: #fefae0;
`;

export const SubmitBtn = styled.div`
  padding: 32px;
  width: 100%;
  background: #fefae0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SubmitText = styled.h3`
  font-size: 16px;
  line-height: 16px;
  color: #000;
`;

export const NewFoodForm = styled.div`
  position: fixed;
  margin-bottom: 10px;
  margin-right: 10px;
  bottom: 0;
  right: 0;
  z-index: 20;
  transform-origin: bottom right;
  transform: scale(${(props) => (props.createNew ? 1 : 0)});
  transition: transform 0.7s ease;
  background: #000;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const OrderNumber = styled.span`
  color: #000;
  font-size: 64px;
  line-height: 48px;
  font-weight: bold;
`;

export const ItemsContainer = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

