import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
export function useModalContext() {
  return useContext(ModalContext);
}
//<div
//     className="flex justify-center p-2 bg-primary text-white mt-8 rounded cursor-pointer"
//     onClick={nextStep}
//   >
//     Go to Payment
//   </div>
