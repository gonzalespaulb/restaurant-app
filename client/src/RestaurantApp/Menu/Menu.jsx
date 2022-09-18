import { Card, CardContainer, MainContainer, Sidebar } from "./styles";
import { useState } from "react";

const Menu = () => {

    const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <MainContainer openSidebar={openSidebar}>
      <CardContainer>
        <Card onClick={() => setOpenSidebar(!openSidebar)}/>
        <Card onClick={() => setOpenSidebar(!openSidebar)}/>
        <Card onClick={() => setOpenSidebar(!openSidebar)}/>
        <Card onClick={() => setOpenSidebar(!openSidebar)}/>
        <Card onClick={() => setOpenSidebar(!openSidebar)}/>
        <Card onClick={() => setOpenSidebar(!openSidebar)}/>
        <Card onClick={() => setOpenSidebar(!openSidebar)}/>
        <Card onClick={() => setOpenSidebar(!openSidebar)}/>
        <Card onClick={() => setOpenSidebar(!openSidebar)}/>
        <Card onClick={() => setOpenSidebar(!openSidebar)}/>
      </CardContainer>
      <Sidebar/>
    </MainContainer>
  );
};

export default Menu;
