import { AddNewContainer, MainContainer, NewFoodForm, OrderNumber, CloseBtn } from "./styles";
import { useState } from "react";
import { Card } from "./styles";

const Orders = () => {

const [createNew, setCreateNew] = useState(false);

  return (
    <MainContainer>
      <Card>
        <OrderNumber>#1</OrderNumber>
      </Card>
      <Card>
        <OrderNumber>#2</OrderNumber>
      </Card>
      <Card>
        <OrderNumber>#3</OrderNumber>
      </Card>
      <Card>
        <OrderNumber>#4</OrderNumber>
      </Card>
      <Card>
        <OrderNumber>#5</OrderNumber>
      </Card>
      <Card>
        <OrderNumber>#6</OrderNumber>
      </Card>
      <Card>
        <OrderNumber>#7</OrderNumber>
      </Card>   
    <NewFoodForm createNew={createNew}>
        <CloseBtn onClick={() => setCreateNew(false)}></CloseBtn>
    </NewFoodForm>
      <AddNewContainer onClick={() => setCreateNew(true)}>
        <h3>Add New Food</h3>
      </AddNewContainer>
    </MainContainer>
  );
};
export default Orders;
