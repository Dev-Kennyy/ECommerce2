import Discount from "../../Utilities/Discount.jsx";
function Sneakers1({
  productName,
  productImage,
  productPrice,
  productDiscount,
}) {
  return (
    <div className="w-52 relative rounded-md shadow-2xl cursor-pointer">
      <div>
        <img src={productImage} alt="" className="" />
        <h1 className="text-neutralDark absolute top-2 font-semibold text-[12px] flex items-center gap-4 px-3">
          <p>{productName}</p>
          <p className="text-primary text-lg">${productPrice}</p>
        </h1>
        <div className="text-neutralGray text-[10px] absolute flex gap-2 left-0 right-0 bottom-0 justify-center">
          <Discount newPrice={+productPrice} discount={productDiscount} />
          <span className="text-tertiary font-semibold">24% Off</span>
        </div>
      </div>
    </div>
  );
}

export default Sneakers1;
