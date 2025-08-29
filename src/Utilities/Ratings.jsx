import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const number = Math.random() * 5;

export function StarRating() {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < Math.round(number);
  });

  return (
    <div className="flex text-lg text-yellow-400">
      {stars.map((isSolid, index) =>
        isSolid ? <FaStar key={index} /> : <CiStar key={index} />
      )}
    </div>
  );
}
