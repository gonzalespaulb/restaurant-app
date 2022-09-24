const OrderModel = require("../models/Order.js");

const createNewOrder = async (req, res) => {
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
}

const fetchOrders = async (req, res) => {

    try {
      const orders = await OrderModel.find({}).populate("order.item");
  
      res.send(orders);
    } catch (err) {
      console.log(err);
    }
}

  module.exports = {createNewOrder, fetchOrders};