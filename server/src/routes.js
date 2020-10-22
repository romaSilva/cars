const express = require("express");
const CarsController = require("./controllers/CarsController");

const routes = express.Router();

routes.post(`/cars`, CarsController.store);
routes.get(`/cars`, CarsController.index);
routes.put(`/cars/:id`, CarsController.update);
routes.delete(`/cars/:id`, CarsController.delete);
routes.get(`/cars/:id`, CarsController.one);

module.exports = routes;
