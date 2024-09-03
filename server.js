const express = require(`express`);
const sequelize = require("./src/config/sequelizeConnection");
const router = require("./src/routes/router");
const app = express();
require(`dotenv`).config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize
  .authenticate()
  .then(() => {
    console.log(`db connected`);
  })
  .catch((err) => {
    console.log(`Sequelize:  ${err}`);
  });

sequelize.sync({ force: false });

app.use(router);

// server run
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`${port} is run 🐎`);
});
