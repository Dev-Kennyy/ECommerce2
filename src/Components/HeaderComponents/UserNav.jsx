import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function UserNav() {
  return (
    <>
      <ul className="flex items-center gap-3 text-[11px]">
        <li className="cursor-pointer tracking-wider flex items-center gap-2">
          <CiUser /> <p>My Profile</p>
        </li>
        <li className="cursor-pointer tracking-wider">
          <p>
            <Link to="Cart" className="flex items-center gap-2">
              <CiShoppingCart />
              Cart
            </Link>
          </p>
        </li>
        <li className="cursor-pointer tracking-wider">
          <p>Items</p>
        </li>
        <li className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-30 border-gray border rounded-4xl p-1 pr-8" // Add padding on the right for the icon
          />
          <CiSearch className="absolute right-2" />
        </li>
      </ul>
    </>
  );
}

export default UserNav;
