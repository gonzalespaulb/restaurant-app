import Navigation from "./Navigation/Navigation";
import { Content, MainContainer } from "./styles";

const RestaurantApp = () => {
  return (
    <MainContainer>
      <Navigation />

      {/* Router here */}
      <Content/>
    </MainContainer>
  );
};

export default RestaurantApp;
