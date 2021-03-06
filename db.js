const Sequelize = require("sequelize");

const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseURL, {
  logging: false
});

db.sync({ force: true })
  .then(() => console.log("database connected"))
  .catch(console.error);

module.exports = db;
