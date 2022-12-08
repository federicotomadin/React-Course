import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { BotonCambiarData } from "./BotonCambiarData";

export const Pagina1 = () => {
  const { data } = useContext(DataContext);

  return (
    <>
      <div>
        <h1>Pagin 1</h1>
        <pre>{JSON.stringify(data)}</pre>
      </div>

      <BotonCambiarData />
    </>
  );
};
