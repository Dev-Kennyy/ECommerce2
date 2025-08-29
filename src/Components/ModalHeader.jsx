import { FaArrowLeft } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useModalContext } from "../Contexts/ModalContext";

function ModalHeader() {
  const { isOpen, setIsOpen } = useModalContext();
  return (
    <>
      <div className="flex justify-between text-primary">
        <FaArrowLeft />
        <MdCancel onClick={() => setIsOpen(false)} />
      </div>
      <h1 className="text-xl text-center">Make Payment</h1>
    </>
  );
}

export default ModalHeader;
