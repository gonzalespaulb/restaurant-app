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
  ItemsContainer,
  Item,
} from "./styles";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Card } from "./styles";

const Orders = () => {
  const [createNew, setCreateNew] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = () => {
    Axios.get("http://localhost:3001/orders").then((res) => {
      setAllOrders(res);
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

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

  const orders = allOrders.data;

  const renderOrders = () => {
    return orders?.map((order, i) => {
      const renderItems = () => {
        return order.order.map((item) => {
          return (
            <Item>
              <span>{item.item.name}</span>
              <span>x{item.quantity}</span>
            </Item>
          );
        });
      };

      return (
        <Card key={i}>
          <OrderNumber>#{i}</OrderNumber>
          <ItemsContainer>{renderItems()}</ItemsContainer>
        </Card>
      );
    });
  };

  return (
    <MainContainer>
      {renderOrders()}
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
