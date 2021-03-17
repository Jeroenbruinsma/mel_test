const Sequelize = require("sequelize")
const db = require("../db")

const AdminUser = db.define(
  "user",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    tablename: "admin user"
  }
)

module.exports = AdminUser