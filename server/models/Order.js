const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    food: {
        
    },
    quantity: {
        type: Number, 
    }, 
    
});


const Order = mongoose.model("order", OrderSchema);
module.exports = Order;