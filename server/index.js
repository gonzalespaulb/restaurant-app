const express = require('express');
const app = express();
const mongoose = required('mongoose');

app.use(express.json());

mongoose.connect(`mongodb+srv://paulgonzales:${process.env.DB_PASS}@restaurantapp.yy8bkbx.mongodb.net/test`);

app.listen(3001, () => {
    console.log(`Server running on port 3001.`);
})

