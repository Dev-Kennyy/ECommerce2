import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../Contexts/ModalContext";

function ModalForm3() {
  const { setIsOpen } = useModalContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-3 pt-6 w-72">
      {/* Stepper */}
      <div className="flex justify-center gap-2 text-[9px]">
        <div className="text-white bg-primary px-3 py-2 rounded-full">1</div>
        <div className="bg-primary text-white px-3 py-2 rounded-full">2</div>
        <div className="bg-primary text-white px-3 py-2 rounded-full">3</div>
      </div>

      {/* Checkmark in the middle */}
      <div className="flex items-center justify-center w-16 h-16 text-white bg-primary rounded-full">
        <FaCheck className="text-sm" />
      </div>
      <div className="text-center text-neutralDark text-sm font-semibold">
        SUCCESS
      </div>
      <div
        className="text-white bg-primary p-2 px-4 rounded cursor-pointer"
        onClick={() => {
          dispatch(clearCart());
          navigate("/");
          setIsOpen(false);
        }}
      >
        Complete
      </div>
    </div>
  );
}

export default ModalForm3;
