const { Sequelize } = require(`sequelize`);

const sequelize = new Sequelize(
  "postgres://default:z1xUmcrD4eCE@ep-white-morning-a1lpr3bp.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
);

module.exports = sequelize;
