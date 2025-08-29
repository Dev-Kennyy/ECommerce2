import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div className="sm:flex hidden justify-center gap-2 items-center bg-headerNav shadow text-sm p-3">
      <p className="text-primary cursor-pointer">
        <Link to="/">HOME /</Link>
      </p>
      <p className="text-primary cursor-pointer">
        <Link to="/All-Products">ALL PRODUCTS /</Link>
      </p>
      <p className="text-neutralGray">PRODUCTS DETAILS</p>
    </div>
  );
}

export default TopNav;
