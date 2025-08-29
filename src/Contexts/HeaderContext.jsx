import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();
export function HeaderContextProvider({ children }) {
  const [isClicked, setIsClicked] = useState(false);
  const [findProducts, setFindProducts] = useState();
  return (
    <HeaderContext.Provider
      value={{ isClicked, setIsClicked, findProducts, setFindProducts }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
export function UseHeaderContext() {
  return useContext(HeaderContext);
}
