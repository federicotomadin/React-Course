import React, { createContext, useState } from "react";

const dataFix = {
  nombre: "Federio",
  edad: 36,
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(dataFix);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
