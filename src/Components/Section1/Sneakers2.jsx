import Discount from "../../Utilities/Discount.jsx";
function Sneakers2({
  productName,
  productImage,
  productPrice,
  productDiscount,
}) {
  return (
    <div className="w-52 relative rounded-md shadow-2xl cursor-pointer">
      <div>
        <img src={productImage} alt="" className="" />
        <h1 className="text-neutralDark absolute top-2 font-semibold text-[12px] flex flex-col items-center gap-4 px-3">
          <div>
            {productName}
            <div className="text-neutralGray justify-center flex absolute text-[9px]">
              <Discount newPrice={+productPrice} discount={productDiscount} />
              <span className="text-tertiary font-semibold">24% Off</span>
            </div>
          </div>
        </h1>
        {/* <div className="text-neutralGray text-[10px] absolute flex gap-2 left-0 right-0 bottom-0 justify-center">
          <Discount newPrice={+productPrice} discount={productDiscount} />
          <span className="text-tertiary font-semibold">24% Off</span>
        </div> */}
        <p className="text-primary text-lg absolute bottom-0 right-2 font-semibold">
          ${productPrice}
        </p>
      </div>
    </div>
  );
}

export default Sneakers2;
