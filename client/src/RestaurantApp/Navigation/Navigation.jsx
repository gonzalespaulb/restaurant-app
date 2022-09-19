import { MainContainer, PageLinks } from "./styles"
import { useNavigate } from "react-router-dom";

const Navigation = () => {

    let navigate = useNavigate();

    return <MainContainer>
        <PageLinks onClick={() => navigate("/")}>Menu</PageLinks>
        <PageLinks  onClick={() => navigate("/orders")}>Orders</PageLinks>
    </MainContainer>
}

export default Navigation; 