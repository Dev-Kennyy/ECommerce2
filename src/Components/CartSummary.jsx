// ✅ CartSummary.jsx
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Redux/cartSlice";
import { useModalContext } from "../Contexts/ModalContext";
import Modal from "./Modal";

function CartSummary() {
  const { isOpen, setIsOpen } = useModalContext();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cart.length > 0 ? 1500 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsOpen(true); // ✅ open modal
  };

  return (
    <div className="flex justify-center sm:justify-end p-6">
      <div className="bg-neutral-100 p-6 rounded-lg shadow-md w-80 text-sm ">
        <h2 className="text-lg font-semibold text-neutral-700 mb-4">
          Cart Summary
        </h2>

        <div className="flex justify-between py-2 border-b border-neutral-300">
          <span className="text-neutral-600">Subtotal</span>
          <span className="font-medium text-neutral-800">
            ${subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between py-2">
          <span className="text-neutral-600">Shipping Fee</span>
          <span className="font-medium text-neutral-800">
            ${shipping.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between py-3 border-t border-neutral-400 mt-3">
          <span className="font-semibold text-neutral-800">Total</span>
          <span className="font-bold text-neutral-900">
            ${total.toLocaleString()}
          </span>
        </div>

        <button
          className="w-full bg-primary text-white py-2 px-4 rounded-lg mt-4 hover:bg-neutral-800 transition"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>

      {/* ✅ Render modal conditionally */}
      {isOpen && <Modal />}
    </div>
  );
}

export default CartSummary;
