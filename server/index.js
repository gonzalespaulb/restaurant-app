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

app.get("/newFood", async (req, res) => {
  try {
    const food = new FoodModel({
      name: "Spamusubi",
      price: 1.00,
      description: "Fresh out of the islands, this food is for everyone.",
    });

    await food.save();
    res.send(food);
  } catch (err) {
    console.log(err);
  }
});

app.get("/newOrder", async (req, res) => {
  try {
    const foods = [
      {
        item: {
          _id: '63290c58a3551e8d019c3ec9'
        },
        quantity: 2,
      },
    ];

    const order = new OrderModel({
      customerInfo: {
        name: "Paul Gonzales",
        phoneNumber: "555-555-5555",
      },
      order: foods,
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
