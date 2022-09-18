const mongoose = require("mongoose");
const  Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema; 


const OrderSchema = new Schema({
  customerInfo: {
    name: String,
    phoneNumber: String,
  },
  order: [
    {
      food: {
        type: ObjectId, 
        ref: "food"
      },
      quantity: {
        type: Number,
      },
    },
  ],
  status: String,
});

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;