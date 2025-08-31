import { UseHeaderContext } from "../../Contexts/HeaderContext";
import { Link } from "react-router-dom";

function RightNav() {
  const { isClicked, setIsClicked } = UseHeaderContext();

  return (
    <div className="relative">
      <ul className="flex gap-3 text-[10px] cursor-pointer tracking-widest">
        <li
          className=" px-3 py-2 text-black rounded flex flex-col justify-right items-end"
          onClick={() => setIsClicked(!isClicked)}
        >
          <p>
            <Link to="/">Home</Link>
          </p>
        </li>
        <li className="px-3 py-2 hover:bg-gray-100 rounded">
          <Link to="All-Products">Product</Link>
        </li>
        {/* <li className="px-3 py-2 hover:bg-gray-100 rounded">SNEAKERS</li> */}
        {/* <li className="px-3 py-2 hover:bg-gray-100 rounded">BELT</li> */}
        <li className="px-3 py-2 hover:bg-gray-100 rounded">
          <Link to="Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default RightNav;
