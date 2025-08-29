import { Link } from "react-router-dom";

function FlashSaleHeader() {
  return (
    <div className="flex justify-between px-3 pt-4">
      <h1 className="text-neutralDark font-semibold">Flash Sale</h1>
      <h1 className="text-primary">
        <Link to="/Flash-Sale">See More</Link>
      </h1>
    </div>
  );
}

export default FlashSaleHeader;
