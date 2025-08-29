import BagProduct from "./BagProduct";
import Sneakers1 from "./Sneakers1";
import Sneakers2 from "./Sneakers2";

function SectionProducts() {
  return (
    <div className="hidden sm:flex items-center justify-center gap-5 px-3 absolute left-0 right-0 bottom-[-100px]">
      <BagProduct
        productName="FS - QUILTED MAXI CROSS BAG"
        productImage="image Product.png"
        productPrice="299"
        productDiscount="24"
      />
      <Sneakers1
        productName="FS - QUILTED MAXI CROSS BAG"
        productImage="image Product (2).png"
        productPrice="299"
        productDiscount="24"
      />
      <Sneakers2
        productName="FS - QUILTED MAXI CROSS BAG"
        productImage="image Product (3).png"
        productPrice="299"
        productDiscount="24"
      />
    </div>
  );
}

export default SectionProducts;
