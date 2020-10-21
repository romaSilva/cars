const { Model, DataTypes } = require("sequelize");

class Car extends Model {
  static init(sequelize) {
    super.init(
      {
        plate: DataTypes.STRING,
        chassis: DataTypes.STRING,
        renavam: DataTypes.STRING,
        model: DataTypes.STRING,
        brand: DataTypes.STRING,
        year: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Car;
