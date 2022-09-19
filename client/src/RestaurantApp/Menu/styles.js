import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr ${(props) => (props.openSidebar ? "500px" : "0px")};
  transition: grid-template-columns 0.7s ease;
  grid-gap: 10px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 10px;
`;

export const Sidebar = styled.div`
  background: #fefae0;
  border-radius: 10px;
  height: calc(100vh - 130px);
  position: sticky;
  top: 110px;
  border: 2px dashed #000;
`;

export const Card = styled.div`
  background: #fefae0;
  cursor: pointer;
  border-radius: 10px;
  transition: border 0.2s ease;
  border: 2px dashed #000;

  :hover {
    border: 4px dashed #000;
  }
`;
