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
  const food = new FoodModel({
    foodName: "Hickory Burger",
    price: 7.99,
    description: "Doused with our super secret BBQ sauce.",
  });

  try {
    await food.save();
    res.send(food);
  } catch (err) {
    console.log(err);
  }
});

app.get("/newOrder", async (req, res) => {
  const order = new OrderModel({
    customerInfo: {
      name: "Paul Gonzales",
      phoneNumber: "555-555-5555",
    },
    order: [
      {
        foodName: "Chicken Sandwich",
        price: 5.99,
        description: "Chicken so good you'll grow wings.",
        quantity: 2,
      },
      {
        foodName: "Hickory Burger",
        price: 7.99,
        description: "Doused with our super secret BBQ sauce.",
        quantity: 5,
      },
    ],
    status: "Received",
  });

  try {
    await order.save();
    res.send(order);
  } catch (err) {
    console.log(err);
  }
});

app.get("/foods", async (req, res) => {
  FoodModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.get("/orders", async (req, res) => {
  OrderModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});
