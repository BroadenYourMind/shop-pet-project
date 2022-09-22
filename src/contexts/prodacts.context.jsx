import { createContext, useState } from "react";

import PRODACTS from "../shop-data.json";

export const ProdactsContext = createContext({
  products: [],
});

export const ProdactsProvider = ({ children }) => {
  const [prodacts, useProdacts] = useState(PRODACTS);
  const value = { prodacts };

  return (
    <ProdactsContext.Provider value={value}>{children}</ProdactsContext.Provider>
  );
};
