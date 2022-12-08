import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Pagina2 = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <h1>Pagin 2</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};
