const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

app.post('/newOrder', require('./routes/orderRoutes.js'));
app.get('/orders', require('./routes/orderRoutes.js'));

app.post('/newFood', require('./routes/foodRoutes.js'));
app.get('/foods', require('./routes/foodRoutes.js'));

app.post('/newUser', require('./routes/userRoutes.js'));
app.post('/login', require('./routes/userRoutes.js'));