const Sequelize = require("sequelize");
const db = require("../db");
const Category = require("../categories/model");
const Order = require("../orders/model");
const OrderProducts = require("../orderProducts/model");
const ProductImage = require("../productImages/model");

const Product = db.define(
  "product",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    size: {
      type: Sequelize.STRING,
      allownNull: false,
    },
    optional: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "products",
  }
);

Product.belongsTo(Category);

Product.hasMany(ProductImage);
ProductImage.belongsTo(Product);

Category.hasMany(Product);

Product.belongsToMany(Order, { through: OrderProducts });
Order.belongsToMany(Product, { through: OrderProducts });

module.exports = Product;
