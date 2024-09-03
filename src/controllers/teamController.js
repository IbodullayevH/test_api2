const teamModel = require("../models/teamModel");

const getTeam = async (req, res) => {
    try {
      let dataUsers = await teamModel.findAll();
  
      return res.status(200).send({
        success: true,
        message: `All team data`,
        data: dataUsers,
      });
    } catch (error) {
      return res.status(error.status || 400).send({
        success: false,
        message: `get team error: ${error.message}`,
      });
    }
  };

  module.exports = getTeam