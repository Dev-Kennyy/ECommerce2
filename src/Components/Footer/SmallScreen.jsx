import { BiCart, BiHome, BiSearch, BiUserCircle } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Link } from "react-router-dom";

function SmallScreen() {
  return (
    <div className="flex justify-between xs:hidden gap-2 bg-white border-t-2 border-neutralGray fixed w-full px-7 py-3 bottom-0">
      <div className="flex justify-center items-center flex-col text-[9px] tracking-wider text-neutralGray">
        <Link to="/">
          <BiHome className="text-2xl" />
          Home
        </Link>
      </div>
      <div className="flex justify-center items-center flex-col text-[9px] tracking-wider text-neutralGray">
        <BiSearch className="text-2xl" />
        Explore
      </div>
      <div className="flex justify-center items-center flex-col text-[9px] tracking-wider text-neutralGray">
        <Link to="Cart">
          <BiCart className="text-2xl" />
          Cart
        </Link>
      </div>
      <div className="flex justify-center items-center flex-col text-[9px] tracking-wider text-neutralGray">
        <MdOutlineLocalOffer className="text-2xl" />
        Offer
      </div>
      <div className="flex justify-center items-center flex-col text-[9px] tracking-wider text-neutralGray">
        <BiUserCircle className="text-2xl" />
        Account
      </div>
    </div>
  );
}

export default SmallScreen;
