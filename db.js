// dotenv.config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.postman_password);

module.exports = sequelize;