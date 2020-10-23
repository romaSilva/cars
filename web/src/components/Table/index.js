import React, { useEffect } from "react";
import axios from "axios";

import "./style.css";

const Table = ({
  cars,
  setCars,
  setIsUpdateModalOpen,
  handleSelectedCar,
  isUpdateModalOpen,
  isModalOpen,
}) => {
  useEffect(() => {
    axios.get("http://localhost:5000/cars").then((res) => {
      setCars(res.data);
    }); // eslint-disable-next-line
  }, [isUpdateModalOpen, isModalOpen]);

  return (
    <div className="table-container">
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>plate</th>
              <th>chassis</th>
              <th>renavam</th>
              <th>model</th>
              <th>brand</th>
              <th>year</th>
            </tr>
          </thead>
          <tbody>
            {cars &&
              cars.map((car) => (
                <tr
                  onClick={() => {
                    setIsUpdateModalOpen(true);
                    handleSelectedCar(car.id);
                  }}
                  key={car.id}
                >
                  <td>{car.id}</td>
                  <td>{car.plate}</td>
                  <td>{car.chassis}</td>
                  <td>{car.renavam}</td>
                  <td>{car.model}</td>
                  <td>{car.brand}</td>
                  <td>{car.year}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
