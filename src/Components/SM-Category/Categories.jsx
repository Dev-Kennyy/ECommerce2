import Category from "./ProductCategory";
import { RiShirtLine } from "react-icons/ri";
import { GiAmpleDress } from "react-icons/gi";
import { CiMedicalCase } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";

function Categories() {
  return (
    <div className="flex sm:hidden justify-center gap-7 overflow-x-scroll pl-10">
      <Category icon={<RiShirtLine />} p="Men Shirt" />
      <Category icon={<GiAmpleDress />} p="Dress" />
      <Category icon={<CiMedicalCase />} p="Equipment" />
      <Category icon={<FaBagShopping />} p="Women Bags" />
      <Category icon={<RiShirtLine />} p="Men Shirt" />
    </div>
  );
}

export default Categories;
