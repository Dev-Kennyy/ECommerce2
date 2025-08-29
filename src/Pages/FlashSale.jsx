import { Link } from "react-router-dom";
import Products from "../Components/MegaSale/Products";
import Section1 from "../Components/Section1";
import { FaLessThan } from "react-icons/fa";
import SSProducts from "../Components/FlashSale/SSProducts";

function FlashSale() {
  return (
    <div>
      <div style={{ marginTop: "-30px" }} className="flex gap-2 p-2">
        <p>
          <Link to="/">←</Link>
        </p>
        <p className="text-neutralDark font-semibold">Super Flash Sale</p>
      </div>
      <Section1 />
      <SSProducts />
    </div>
  );
}

export default FlashSale;
