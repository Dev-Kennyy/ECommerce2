import { useState } from "react";
import { useModalContext } from "../Contexts/ModalContext";
import ModalHeader from "./ModalHeader";
import ModalForm1 from "./ModalForm1";
import ModalForm2 from "./ModalForm2";
import ModalForm3 from "./ModalForm3";

function Modal() {
  const { isOpen, setIsOpen } = useModalContext();
  const [step, setStep] = useState(1); // 👈 track current step

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-[4px]">
      <div className="p-7 bg-white text-primary w-max rounded-lg shadow-lg">
        <ModalHeader />

        {/* Render step dynamically */}
        {step === 1 && <ModalForm1 nextStep={() => setStep(2)} />}
        {step === 2 && (
          <ModalForm2 prevStep={() => setStep(1)} nextStep={() => setStep(3)} />
        )}
        {step === 3 && <ModalForm3 />}
      </div>
    </div>
  );
}

export default Modal;
