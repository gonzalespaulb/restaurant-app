const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const FoodModel = require("./models/Food");
const OrderModel = require("./models/Order");

app.use(express.json());
app.use(cors());

const DB_PASS = `${process.env.DB_PASS}`;
const DB_NAME = `${process.env.DB_NAME}`;

mongoose.connect(
  `mongodb+srv://paulgonzales:${DB_PASS}@restaurantapp.yy8bkbx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);  

app.listen(3001, () => {
  console.log(`Server running on port 3001.`);
});

app.post("/newFood", async (req, res) => {

  const {name, price, description} = req.body;

  try {
    const food = new FoodModel({
      name,
      price,
      description,
    });

    await food.save();
    res.send(food);
  } catch (err) {
    console.log(err);
  }
});

app.post("/newOrder", async (req, res) => {
  try {

    const orders  = req.body;

    const order = new OrderModel({
      customerInfo: {
        name: "Paul Gonzales",
        phoneNumber: "555-555-5555",
      },
      order: orders,
      status: "Received",
    });

    await order.save();
    res.send(order);
  } catch (err) {
    console.log(err);
  }
});

app.get("/foods", async (req, res) => {
  try {
    const foods = await FoodModel.find({});
    res.send(foods);
  } catch (err) {
    console.log(err);
  }
});

app.get("/orders", async (req, res) => {

  try {
    const orders = await OrderModel.find({}).populate("order.item");

    res.send(orders);
  } catch (err) {
    console.log(err);
  }
});
