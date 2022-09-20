import { AddNewContainer, MainContainer, NewFoodForm, OrderNumber, CloseBtn, FormItem, FormLabel, FormInput, InputLine, SubmitBtn, SubmitText } from "./styles";
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
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormInput></FormInput>
          <InputLine/>
        </FormItem>

        <FormItem>
          <FormLabel>Price</FormLabel>
          <FormInput></FormInput>
          <InputLine/>
        </FormItem>

        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormInput></FormInput>
          <InputLine/>
        </FormItem>

        <SubmitBtn>
          <SubmitText>SUBMIT</SubmitText>
        </SubmitBtn>
    </NewFoodForm>
      <AddNewContainer onClick={() => setCreateNew(true)}>
        <h3>Add New Food</h3>
      </AddNewContainer>
    </MainContainer>
  );
};
export default Orders;
