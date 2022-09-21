import { MainContainer, PageLinks } from "./styles"
import { useNavigate } from "react-router-dom";

const Navigation = ({openCart, setOpenCart}) => {

    let navigate = useNavigate();

    return <MainContainer>
        <PageLinks onClick={() => navigate("/")}>Menu</PageLinks>
        <PageLinks  onClick={() => navigate("/orders")}>Orders</PageLinks>
        <PageLinks onClick={() => setOpenCart(!openCart)}>Cart</PageLinks>
    </MainContainer>
}

export default Navigation; 