import React, { useState } from "react";
import Modal from "react-modal";

import "./style.css";

Modal.setAppElement("#root");

const UpdateModal = ({
  isUpdateModalOpen,
  setIsUpdateModalOpen,
  selectedCar,
  handleUpdateFormSubmit,
  handleDelete,
}) => {
  const [plate, setPlate] = useState("");
  const [chassis, setChassis] = useState("");
  const [renavam, setRenavam] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "plate") {
      setPlate(value);
    } else if (id === "chassis") {
      setChassis(value);
    } else if (id === "renavam") {
      setRenavam(value);
    } else if (id === "model") {
      setModel(value);
    } else if (id === "brand") {
      setBrand(value);
    } else if (id === "year") {
      setYear(value);
    }
  };

  return (
    <Modal
      style={modalStyle}
      isOpen={isUpdateModalOpen}
      onRequestClose={() => {
        setIsUpdateModalOpen(false);
      }}
    >
      <header>
        <h3> Preencha os campos:</h3>
      </header>
      {selectedCar.id && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPlate("");
            setChassis("");
            setRenavam("");
            setModel("");
            setBrand("");
            setYear("");
            const myCar = {
              id: selectedCar.id,
              plate: plate || selectedCar.plate,
              chassis: chassis || selectedCar.chassis,
              renavam: renavam || selectedCar.renavam,
              model: model || selectedCar.model,
              brand: brand || selectedCar.brand,
              year: year || selectedCar.year,
            };
            handleUpdateFormSubmit(myCar);
          }}
        >
          <fieldset>
            <div className="field">
              <label htmlFor="">Placa:</label>
              <input
                type="text"
                name="plate"
                id="plate"
                value={plate || selectedCar.plate}
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="">Chassi:</label>
              <input
                type="text"
                name="chassis"
                id="chassis"
                value={chassis || selectedCar.chassis}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="field">
              <label htmlFor="">Renavam:</label>
              <input
                type="text"
                name="renavam"
                id="renavam"
                value={renavam || selectedCar.renavam}
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="">Modelo:</label>
              <input
                type="text"
                name="model"
                id="model"
                value={model || selectedCar.model}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="field">
              <label htmlFor="">Marca:</label>
              <input
                type="text"
                name="brand"
                id="brand"
                value={brand || selectedCar.brand}
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="">Ano:</label>
              <input
                type="text"
                name="year"
                id="year"
                value={year || selectedCar.year}
                onChange={handleInputChange}
              />
            </div>
          </fieldset>

          <fieldset className="button-field">
            <button type="submit">Cadastrar</button>
            <button
              className="delete"
              onClick={() => handleDelete(selectedCar.id)}
            >
              Deletar
            </button>
          </fieldset>
        </form>
      )}
    </Modal>
  );
};

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "550px",
    width: "100%",
  },
};

export default UpdateModal;
