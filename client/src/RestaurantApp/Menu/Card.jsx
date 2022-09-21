import {
  FoodCard,
  AddToCartBtn,
  AddToCartText,
  Description,
  Price,
  Quantity,
  QuantityContainer,
  Title,
} from "./styles";
import { useState } from "react";

const Card = ({ food, cartItems, setCartItems }) => {
  const [currItemQuantity, setCurrItemQuantity] = useState("");

  const addToCart = (foodObj, quantity) => {
    setCurrItemQuantity("");

    const newCartItem = {
      foodObj,
      quantity,
    };

    setCartItems([...cartItems, newCartItem]);
  };

  return (
    <FoodCard>
      <Title>{food.name}</Title>
      <Price>${food.price}</Price>
      <Description>{food.description}</Description>
      <QuantityContainer>
        <Quantity
          onChange={(e) => setCurrItemQuantity(e.target.value)}
          value={currItemQuantity}
        ></Quantity>
        <AddToCartBtn onClick={() => addToCart(food, currItemQuantity)}>
          <AddToCartText>Add to Cart</AddToCartText>
        </AddToCartBtn>
      </QuantityContainer>
    </FoodCard>
  );
};

export default Card;
