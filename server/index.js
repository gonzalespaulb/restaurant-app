const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const FoodModel = require("./models/Food");

app.use(express.json());
app.use(cors());

const DB_PASS = `${process.env.DB_PASS}`;
const DB_NAME = `${process.env.DB_NAME}`;

mongoose.connect(`mongodb+srv://paulgonzales:${DB_PASS}@restaurantapp.yy8bkbx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
});

app.listen(3001, () => {
    console.log(`Server running on port 3001.`);
})

app.get('/newFood', async (req, res) => {

    const hello = new FoodModel({
        foodName: "Hickory Burger", 
        price: 7.99,
        description: "Doused with our super secret BBQ sauce.", 
    })

    try {
        await hello.save();
        res.send(hello);  
    } catch (err) {
        console.log(err); 
    }
})

app.get('/', async (req, res) => {

    FoodModel.find({} , (err, result) => {
        if(err) {
            res.send(err);
        }
        res.send(result);
    })
})