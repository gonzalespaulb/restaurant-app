import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Menu from "./Menu/Menu";
import Orders from "./Orders/Orders";
import { Content, MainContainer } from "./styles";

const RestaurantApp = () => {
  const location = useLocation();

  return (
    
      <MainContainer>
        <Navigation />
        <Content>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Menu />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Content>
      </MainContainer>
    
  );
};

export default RestaurantApp;
