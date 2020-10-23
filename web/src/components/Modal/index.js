import React, { useState } from "react";
import Modal from "react-modal";

import "./style.css";

Modal.setAppElement("#root");

const AddModal = ({ isModalOpen, setIsModalOpen, handleFormSubmit }) => {
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
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false);
      }}
    >
      <header>
        <h3> Preencha os campos:</h3>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit({ plate, chassis, renavam, model, brand, year });
        }}
      >
        <fieldset>
          <div className="field">
            <label htmlFor="">Placa:</label>
            <input
              type="text"
              name="plate"
              id="plate"
              value={plate}
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="">Chassi:</label>
            <input
              type="text"
              name="chassis"
              id="chassis"
              value={chassis}
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
              value={renavam}
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="">Modelo:</label>
            <input
              type="text"
              name="model"
              id="model"
              value={model}
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
              value={brand}
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="">Ano:</label>
            <input
              type="text"
              name="year"
              id="year"
              value={year}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>

        <fieldset className="button-field">
          <button type="submit">Cadastrar</button>
        </fieldset>
      </form>
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

export default AddModal;
