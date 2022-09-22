import {
  CardContainer,
  ItemContent,
  MainContainer,
  PlaceOrderBtn,
  PlaceOrderText,
  Sidebar,
  SidebarItem,
  SidebarItemContainer,
} from "./styles";
import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "./Card";

const Menu = ({ openCart }) => {
  const [allFoods, setAllFoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchFoods = () => {
    Axios.get("http://localhost:3001/foods").then((res) => {
      setAllFoods(res);
    });
  };

  const sendCart = () => {
    const orders = cartItems.map((order) => {
      const payload = {
        item: {
          _id: order.foodObj._id,
        },
        quantity: +order.quantity,
      };

      return payload;
    });

   Axios.post("http://localhost:3001/newOrder", orders )
      .then((res) => {
        console.log(res.status);
      })
      .then((err) => console.log(err));

      setCartItems([]);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const menu = allFoods.data;

  const renderMenu = () => {
    return menu?.map((food, i) => {
      return (
        <Card
          food={food}
          key={i}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      );
    });
  };

  const renderSidebarItems = () => {
    return cartItems.map((item, i) => {
      return (
        <SidebarItem key={i}>
          <ItemContent>{item.foodObj.name}</ItemContent>
          <ItemContent>${item.foodObj.price}</ItemContent>
          <ItemContent>{item.quantity}</ItemContent>
        </SidebarItem>
      );
    });
  };

  return (
    <MainContainer openCart={openCart}>
      <CardContainer>{renderMenu()}</CardContainer>
      <Sidebar openCart={openCart}>
        <SidebarItemContainer>{renderSidebarItems()}</SidebarItemContainer>
        <PlaceOrderBtn onClick={sendCart}>
          <PlaceOrderText>Place Order</PlaceOrderText>
        </PlaceOrderBtn>
      </Sidebar>
    </MainContainer>
  );
};

export default Menu;
