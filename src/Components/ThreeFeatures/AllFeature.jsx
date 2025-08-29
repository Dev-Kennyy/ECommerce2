import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { BiSolidHelpCircle } from "react-icons/bi";

import Feature from "./Feature";
function AllFeature() {
  return (
    <div className="flex gap-6 justify-center px-9 pt-14 items-center flex-wrap">
      <Feature
        icon={<FaTruckFast />}
        h1="FREE SHIPPING"
        p="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Feature
        icon={<MdOutlineCurrencyExchange />}
        h1="Convert"
        p="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <Feature
        icon={<BiSolidHelpCircle />}
        h1="Help"
        p="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
    </div>
  );
}

export default AllFeature;
