const express = require(`express`);
const sequelize = require("./src/config/sequelizeConnection");
const app = express();
require(`dotenv`).config();
app.use(express.json())
app.use(express.urlencoded({extended: true}))


sequelize
    .authenticate()
    .then(() => {console.log(`db connected`)})
    .catch((err) => {console.log(`Sequelize:  ${err}`)})

// server run
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`${port} is run 🐎`);
});
