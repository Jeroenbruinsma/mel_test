const Sequelize = require("sequelize");
const db = require("../db");

const ProductImage = db.define(
  "image",
  {
    url: {
      type: Sequelize.STRING,
      allowNull: false
    },
    thumbnail: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: "productImages"
  }
);

module.exports = ProductImage;
