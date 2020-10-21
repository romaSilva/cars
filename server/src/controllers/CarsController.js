const Car = require("../models/Car");

module.exports = {
  async store(req, res) {
    try {
      const { plate, chassis, renavam, model, brand, year } = req.body;

      const car = await Car.create({
        plate,
        chassis,
        renavam,
        model,
        brand,
        year,
      });

      return res.json(car);
    } catch (error) {
      console.error(error);

      return res.status(500).send("Server Error");
    }
  },

  async index(req, res) {
    try {
      const cars = await Car.findAll();

      return res.status(200).json(cars);
    } catch (error) {
      console.error(error);

      return res.status(500).send("Server Error");
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { plate, chassis, renavam, model, brand, year } = req.body;

      await Car.update(
        { plate, chassis, renavam, model, brand, year },
        { where: { id } }
      );

      return res.status(201).send("Car updated");
    } catch (error) {
      console.error(error);

      return res.status(500).send("Server Error");
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      const car = await Car.findByPk(id);

      if (!car) return res.status(400).json({ error: "Car not found" });

      await Car.destroy({
        where: {
          id,
        },
      });

      return res.send("Car deleted");
    } catch (error) {
      console.error(error);

      return res.status(500).send("Server Error");
    }
  },
};
