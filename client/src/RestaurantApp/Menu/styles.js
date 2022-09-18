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
`;

export const Card = styled.div`
  background: #fefae0;
  cursor: pointer;
  border-radius: 10px;
  transition: box-shadow 0.7s ease;

  :hover {
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }
`;
