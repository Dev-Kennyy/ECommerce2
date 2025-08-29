import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
function SmallScreenHeader() {
  return (
    <div className="p-4 flex items-center justify-between bg-white z-90 w-full">
      <div className="relative w-full mr-5">
        <input
          type="text"
          className="border border-gray-200 rounded p-1 pl-7 text-[10px] w-full py-3"
          placeholder=" Search Product..."
        />
        <CiSearch className="absolute top-1/2 left-2 -translate-y-1/2 text-primary text-sm" />
      </div>
      <div className="flex gap-5">
        <CiHeart />
        <IoIosNotifications />
      </div>
    </div>
  );
}

export default SmallScreenHeader;
