import { Card, CardContainer, Description, MainContainer, Price, Sidebar, Title } from "./styles";
import { useState, useEffect } from "react";
import Axios from "axios";

const Menu = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [allFoods, setAllFoods] = useState([]);

  const fetchFoods = () => {
    Axios.get("http://localhost:3001/foods").then((res) => {
      setAllFoods(res);
    });
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const menu = allFoods.data;


  const renderMenu = () => {
    return menu?.map((food) => {
      return <Card onClick={() => setOpenSidebar(!openSidebar)}>
          <Title>{food.name}</Title>
          <Price>{food.price}</Price>
          <Description>{food.description}</Description>
        </Card>;
    });
  };

  return (
    <MainContainer openSidebar={openSidebar}>
      <CardContainer>
        {renderMenu()}
      </CardContainer>
      <Sidebar />
    </MainContainer>
  );
};

export default Menu;
