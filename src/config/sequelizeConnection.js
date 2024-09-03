require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  logging: false, // Disable logging if you prefer
});

module.exports = sequelize;
