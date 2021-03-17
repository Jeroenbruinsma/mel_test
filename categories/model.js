const Sequelize = require("sequelize");
const db = require("../db");

const Category = db.define(
  "category",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "categories",
  }
);

module.exports = Category;
