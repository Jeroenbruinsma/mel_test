const Sequelize = require("sequelize");
const db = require("../db");

const OrderProducts = db.define(
  "order_product",
  {quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }},
  {
    timestamps: false
  }
);

module.exports = OrderProducts;
