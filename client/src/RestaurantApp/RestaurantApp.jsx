import Navigation from "./Navigation/Navigation";
import Menu from "./Menu/Menu";
import { Content, MainContainer } from "./styles";

const RestaurantApp = () => {
  return (
    <MainContainer>
      <Navigation />

      {/* Router here */}
      <Content>
        <Menu/>
      </Content>
    </MainContainer>
  );
};

export default RestaurantApp;