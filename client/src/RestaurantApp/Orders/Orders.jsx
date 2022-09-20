import {
  AddNewContainer,
  MainContainer,
  NewFoodForm,
  OrderNumber,
  CloseBtn,
  FormItem,
  FormLabel,
  FormInput,
  InputLine,
  SubmitBtn,
  SubmitText,
} from "./styles";
import { useState } from "react";
import Axios from "axios";
import { Card } from "./styles";

const Orders = () => {
  const [createNew, setCreateNew] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const clearFields = () => {
    setName("");
    setPrice("");
    setDescription("");
  };

  const submitAction = () => {
    Axios.post("http://localhost:3001/newFood", {
      name,
      price,
      description,
    })
      .then((res) => {
        console.log(res);
      })
      .then((err) => console.log(err));

    clearFields();
  };

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
          <FormInput
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormInput>
          <InputLine />
        </FormItem>

        <FormItem>
          <FormLabel>Price</FormLabel>
          <FormInput
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></FormInput>
          <InputLine />
        </FormItem>

        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormInput
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></FormInput>
          <InputLine />
        </FormItem>

        <SubmitBtn onClick={submitAction}>
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
