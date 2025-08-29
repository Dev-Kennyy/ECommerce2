import { useNavigate } from "react-router-dom";
import { StarRating } from "../../Utilities/Ratings";
import { SliceTitle } from "../../Utilities/SliceTitle";

function Div({ title, price, images, id }) {
  const navigate = useNavigate("");
  return (
    <div
      className="flex flex-col rounded shadow-2xl cursor-pointer"
      onClick={() => navigate(`/Product-Info/${id}`)}
    >
      <img src={images?.[0]} alt="" />
      <div className="p-3 text-left">
        <p className="text-neutralDark font-semibold w-32">
          <SliceTitle title={title} />
        </p>
        <StarRating />
        <p className="text-primary">${price}</p>
      </div>
    </div>
  );
}

export default Div;
