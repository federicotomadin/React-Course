import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

const data = {
  nombre: "Pedro",
  edad: 20,
};

export const BotonCambiarData = () => {
  const { setData } = useContext(DataContext);

  return (
    <div>
      <button onClick={() => setData(data)}>Cambiar Data</button>
    </div>
  );
};
