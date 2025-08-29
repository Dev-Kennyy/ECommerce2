import Discount from "../../Utilities/Discount.jsx";
function BagProduct({
  productName,
  productImage,
  productPrice,
  productDiscount,
}) {
  return (
    <div className="w-52 relative rounded-md shadow-lg cursor-pointer">
      <div>
        <img src={productImage} alt="" className="" />
        <h1 className="text-neutralDark absolute top-2 font-semibold text-[12px] pl-3 px-6">
          {productName}
        </h1>
        <div className="text-neutralGray text-[10px] absolute bottom-5 left-6 flex gap-2">
          <Discount newPrice={+productPrice} discount={productDiscount} />
          <span className="text-tertiary font-semibold">24% Off</span>
        </div>
      </div>
      <h1 className="absolute bottom-0 right-4 text-primary">
        ${productPrice}
      </h1>
    </div>
  );
}

export default BagProduct;
