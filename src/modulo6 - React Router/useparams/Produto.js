import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Produto = () => {
  const params = useParams(); // Parâmetros da rota
  const location = useLocation();   //informações da rota atual
  return (
    <div>
      <h1>Produto: {params.id}</h1>
    </div>
  );
};

export default Produto;
