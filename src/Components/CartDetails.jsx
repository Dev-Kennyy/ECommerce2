import { useNavigate } from "react-router-dom";
import CartSummary from "./CartSummary";
import CartTable from "./CartTable";

function CartDetails() {
  const navigate = useNavigate("");
  return (
    <div>
      <div className="bg-hotDeals text-center p-2 text-primary text-[10px]">
        <span onClick={() => navigate("/")}>HOME</span> /{" "}
        <span className="text-neutralGray">Cart</span>
      </div>
      <br />

      <CartTable />
      <CartSummary />
    </div>
  );
}

export default CartDetails;
