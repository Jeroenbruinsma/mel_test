const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define(
  "order",
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allownNull: false
    },
    street: {
      type: Sequelize.STRING,
      allownNull: false
    },
    housenr: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    postcode: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    opmerkingen: {
      type: Sequelize.TEXT
    }
  },
  {
    timestamps: true,
    tableName: "orders"
  }
);

module.exports = Order;
