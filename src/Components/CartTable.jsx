import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../Redux/cartSlice";

function CartTable() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <p className="text-center text-neutral-500 p-4">Your cart is empty.</p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-neutral-200 rounded-lg shadow-sm">
        <thead className="bg-neutral-100 text-neutral-700">
          <tr>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-center">Price</th>
            <th className="p-3 text-center">Quantity</th>
            <th className="p-3 text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr
              key={item.id}
              className="border-t border-neutral-200 hover:bg-neutral-50"
            >
              <td className="p-3">
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md border border-neutral-300"
                />
              </td>
              <td className="p-3">{item.title}</td>
              <td className="p-3 text-center text-neutral-700 font-medium">
                ${item.price.toLocaleString()}
              </td>
              <td className="p-3">
                <div className="flex justify-center items-center gap-3">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="px-2 py-1 bg-neutral-200 text-neutral-700 rounded hover:bg-neutral-300"
                  >
                    -
                  </button>
                  <span className="text-neutral-700">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="px-2 py-1 bg-neutral-200 text-neutral-700 rounded hover:bg-neutral-300"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-3 text-center">
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
