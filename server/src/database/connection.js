const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");

const Car = require("../models/Car");

const connection = new Sequelize(dbConfig);

Car.init(connection);

const testConnection = async () => {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

// connection.close();

module.exports = connection;
