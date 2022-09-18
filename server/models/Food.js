const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const FoodSchema = new Schema({
    foodName: {
        type: String,
        required: true, 
    }, 
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String, 
    }, 
});


// food will be added as a collection in the database

const Food = mongoose.model("food", FoodSchema);
module.exports = Food;