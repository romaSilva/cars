import React from "react";

import "./style.css";

const Header = ({ setIsModalOpen }) => {
  return (
    <div className="header">
      <h1>cars</h1>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Adicionar veículo
      </button>
    </div>
  );
};

export default Header;
