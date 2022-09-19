import "./App.css";
import RestaurantApp from "./RestaurantApp/RestaurantApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RestaurantApp />
    </BrowserRouter>
  );
}

export default App;
