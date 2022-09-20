import {
  AddToCartBtn,
  AddToCartText,
  Card,
  CardContainer,
  Description,
  MainContainer,
  Price,
  Quantity,
  QuantityContainer,
  Sidebar,
  Title,
} from "./styles";
import { useState, useEffect } from "react";
import Axios from "axios";

const Menu = ({ openCart }) => {
  const [allFoods, setAllFoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [currItemQuantity, setCurrItemQuantity] = useState("");

  const fetchFoods = () => {
    Axios.get("http://localhost:3001/foods").then((res) => {
      setAllFoods(res);
    });
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const menu = allFoods.data;

  const addToCart = (foodObj, quantity) => {

    const newCartItem = {
      foodObj, 
      quantity, 
    }

    setCartItems([...cartItems, newCartItem]);
  }

  console.log(cartItems);

  const renderMenu = () => {
    return menu?.map((food, i) => {
      return (
        <Card key={i}>
          <Title>{food.name}</Title>
          <Price>{food.price}</Price>
          <Description>{food.description}</Description>
          <QuantityContainer>
            <Quantity onChange={(e) => setCurrItemQuantity(e.target.value)} value={currItemQuantity}></Quantity>
            <AddToCartBtn onClick={() => addToCart(food, currItemQuantity)}>
              <AddToCartText>Add to Cart</AddToCartText>
            </AddToCartBtn>
          </QuantityContainer>
        </Card>
      );
    });
  };

  return (
    <MainContainer openCart={openCart}>
      <CardContainer>{renderMenu()}</CardContainer>
      <Sidebar />
    </MainContainer>
  );
};

export default Menu;
