import { useNavigate } from "react-router-dom";
import Discount from "../Utilities/Discount";
import { StarRating } from "../Utilities/Ratings";
import { SliceTitle } from "../Utilities/SliceTitle";

function HotProducts({ title, images, price, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-42 shadow rounded relative cursor-pointer"
      onClick={() => navigate(`/Product-Info/${id}`)}
    >
      <img src={images?.[0]} alt="" />
      <div className="flex flex-col items-center justify-center rounded-md">
        <p className="text-neutralDark font-semibold">
          <SliceTitle title={title} />
        </p>
        <StarRating />
        <div className="flex gap-2 items-center">
          <span className="text-primary font-semibold text-sm">${price}</span>
          <span className="text-[12px] text-neutralGray">
            <Discount discount="24" newPrice={price} />
          </span>
          <span className="text-tertiary font-semibold text-[12px]">24%</span>
        </div>
      </div>
      <span className="text-white bg-tertiary text-[9px] p-2 absolute top-0 right-0">
        HOT
      </span>
    </div>
  );
}

export default HotProducts;
