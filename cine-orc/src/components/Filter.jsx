import React, { useState } from "react";
import "./Filter.css";

function FiltrarFilmes() {
  const [activeFilter, setActiveFilter] = useState("filtro1"); // Define o botao "Sem filtro" como padrão/ativo

  // ao botao ser clicado, ele se torna o botao ativo
  const handleClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <div className="filtrar-filmes">
      <button
        className={`${activeFilter === "filtro1" ? "active" : ""}`}
        onClick={() => handleClick("filtro1")}
      >
        Sem filtro
      </button>
      <button
        className={`${activeFilter === "filtro2" ? "active" : ""}`}
        onClick={() => handleClick("filtro2")}
      >
        Por Ordem Alfabética
      </button>
      <button
        className={`${activeFilter === "filtro3" ? "active" : ""}`}
        onClick={() => handleClick("filtro3")}
      >
        Por Ordem de Lançamento
      </button>
    </div>
  );
}

export default FiltrarFilmes;
