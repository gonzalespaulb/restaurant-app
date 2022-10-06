import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Menu from "./Menu/Menu";
import Orders from "./Orders/Orders";
import Login from "./Login/Login";
import { Content, MainContainer } from "./styles";
import { useState } from "react";

const RestaurantApp = () => {

  const [openCart, setOpenCart] = useState(false);

  const location = useLocation();

  return (
    
      <MainContainer>
        <Login/>
        <Navigation openCart={openCart} setOpenCart={setOpenCart}/>
        <Content>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Menu openCart={openCart}/>} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Content>
      </MainContainer>
    
  );
};

export default RestaurantApp;
