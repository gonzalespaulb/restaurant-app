import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr ${(props) => (props.openCart ? "500px" : "0px")};
  transition: grid-template-columns 0.7s ease;
  grid-gap: 10px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 10px;
`;

export const Sidebar = styled.div`
  background: #fefae0;
  border-radius: 10px;
  height: calc(100vh - 130px);
  position: sticky;
  top: 110px;
  border: 2px dashed #000;
  padding: ${(props) => props.openCart ? "10px" : "0px"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const SidebarItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  grid-auto-rows: minmax(min-content, max-content);
  width: 100%;
  overflow: auto;
  flex: 1;
`;

export const SidebarItem = styled.div`
  background: #FAECCC;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ItemContent = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const PlaceOrderBtn = styled.div`
  padding: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  cursor: pointer;
`;

export const PlaceOrderText = styled.h3`
  font-size: 16px;
  line-height: 16px;
  color: #fefae0;
`;

export const FoodCard = styled.div`
  background: #fefae0;
  border-radius: 10px;
  transition: border 0.2s ease;
  border: 2px dashed #000;
  padding: 20px;
`;

export const Title = styled.h1``;

export const Price = styled.h2``;

export const Description = styled.p``;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

export const Quantity = styled.input`
  width: 50px;
  height: 50px;
  text-align: center;
  margin-right: 16px;
`;

export const AddToCartBtn = styled.div`
  padding: 16px;
  background: #000;
  cursor: pointer;
`;

export const AddToCartText = styled.h3`
  font-size: 16px;
  line-height: 16px;
  color: #fefae0;
`;
