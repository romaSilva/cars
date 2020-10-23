import React, { Fragment, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Table from "./components/Table";
import Modal from "./components/Modal";
import UpdateModal from "./components/UpdateModal";

import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cars, setCars] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});

  const handleFormSubmit = async (carData) => {
    const { plate, chassis, renavam, model, brand, year } = carData;

    if (plate && chassis && renavam && model && brand && year) {
      await axios.post("http://localhost:5000/cars", carData);

      setIsModalOpen(false);
    }
  };

  const handleUpdateFormSubmit = async (carData) => {
    const { id, plate, chassis, renavam, model, brand, year } = carData;

    if (id && plate && chassis && renavam && model && brand && year) {
      await axios.put(`http://localhost:5000/cars/${id}`, carData);

      setIsUpdateModalOpen(false);
    }
  };

  const handleSelectedCar = async (id) => {
    const myCar = await axios.get(`http://localhost:5000/cars/${id}`);
    setSelectedCar(myCar.data);
  };

  const handleDelete = async (id) => {
    axios.delete(`http://localhost:5000/cars/${id}`);
  };

  return (
    <Fragment>
      <Header setIsModalOpen={setIsModalOpen} />
      <Table
        cars={cars}
        setCars={setCars}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
        handleSelectedCar={handleSelectedCar}
        isUpdateModalOpen={isUpdateModalOpen}
        isModalOpen={isModalOpen}
      />
      <Modal
        handleFormSubmit={handleFormSubmit}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <UpdateModal
        handleUpdateFormSubmit={handleUpdateFormSubmit}
        selectedCar={selectedCar}
        isUpdateModalOpen={isUpdateModalOpen}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
        handleDelete={handleDelete}
      />
    </Fragment>
  );
}

export default App;
