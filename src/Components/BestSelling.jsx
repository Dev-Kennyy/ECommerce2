import BestSellingHeader from "./BestSeller/BestSellingHeader";
import BestSellingProducts from "./BestSeller/BestSellingProducts";
import LoadMore from "./BestSeller/LoadMore";
import SelectCateory from "./BestSeller/SelectCateory";

function BestSelling() {
  return (
    <div className="mt-32">
      <BestSellingHeader />
      <SelectCateory />
      <BestSellingProducts />
      <LoadMore />
    </div>
  );
}

export default BestSelling;
