import { useNavigate } from "react-router-dom";
import Discount from "../../Utilities/Discount";
import { SliceTitle } from "../../Utilities/SliceTitle";

function FlashSaleProduct({ title, price, images, id }) {
  const navigate = useNavigate("");
  return (
    <div
      className="pt-4 flex flex-col w-40 min-w-[10rem] text-center rounded shadow pb-4 cursor-pointer"
      onClick={() => navigate(`/Product-Info/${id}`)}
    >
      <div className="h-40 w-40 flex items-center overflow-hidden">
        <img
          src={images?.[0]}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="font-semibold text-neutralDark text-sm mt-2 truncate w-full px-2 text-left">
        <SliceTitle title={title} />
      </p>
      <p className="text-left text-primary font-semibold p-2">${price}</p>
      <div className="flex p-2">
        <span className="text-neutralGray flex text-[10px] gap-2">
          <Discount discount={id} newPrice={price} />
          <p className="text-tertiary">{id}% Off</p>
        </span>
      </div>
    </div>
  );
}

export default FlashSaleProduct;
