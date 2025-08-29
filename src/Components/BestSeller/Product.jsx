// import { StarRating } from "../../Utilities/Ratings";
import { useNavigate } from "react-router-dom";
import Discount from "../../Utilities/Discount";
import { StarRating } from "../../Utilities/Ratings";
import { SliceTitle } from "../../Utilities/SliceTitle";

function Product({ title, price, images, id }) {
  const fakeRating = Math.random() * 5;
  const navigate = useNavigate("/");
  return (
    <div
      className="shadow-neutralGray shadow-sm w-60 cursor-pointer"
      onClick={() => navigate(`/Product-Info/${id}`)}
    >
      <img src={images?.[0]} alt="" className="w-full" />
      <div className="flex flex-col text-center">
        <p className="text-neutralDark text-[12px] font-semibold">
          <SliceTitle title={title} />
        </p>
        <span className="flex justify-center">
          <StarRating fakeRating={fakeRating} />
        </span>
        <div className="flex justify-center items-center text-[10px] gap-3">
          <p className="text-primary font-bold">${price}</p>
          <span className="text-neutralGray font-semibold">
            <Discount newPrice={+price} discount={+id} />
          </span>
          <p className="text-tertiary font-semibold">{id}% Off</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
