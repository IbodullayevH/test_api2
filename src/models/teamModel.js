const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelizeConnection");


const teamModel = sequelize.define("teams", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        required: true,
      },
})

module.exports = teamModel