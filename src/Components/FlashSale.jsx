import FlashSaleHeader from "./FlashSale/FlashSaleHeader";
import Products from "./FlashSale/Products";

function FlashSale() {
  return (
    <div className="sm:hidden pt-9">
      <FlashSaleHeader />
      <Products />
    </div>
  );
}

export default FlashSale;
