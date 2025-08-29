import MegaSaleHeader from "./MegaSale/MegaSaleHeader";
import Products from "./MegaSale/Products";

function MegaSale() {
  return (
    <div className="pt-9 sm:hidden">
      <MegaSaleHeader />
      <Products />
    </div>
  );
}

export default MegaSale;
