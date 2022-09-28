const FoodModel = require("../models/Food.js");

const createNewFood = async (req, res) => {
  const { name, price, description } = req.body;

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
};

const fetchFoods = async (req, res) => {
    try {
      const foods = await FoodModel.find({});
      res.send(foods);
    } catch (err) {
      console.log(err);
    }
  }

module.exports = { createNewFood, fetchFoods };
