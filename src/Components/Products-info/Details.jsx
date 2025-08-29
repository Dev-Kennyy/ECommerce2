import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading";
import { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { StarRating } from "../../Utilities/Ratings";
import Discount from "../../Utilities/Discount";
import ClickedHeader from "../ClickedProduct/ClickedHeader";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate("");

  const cart = useSelector((state) => state.cart); // Get cart from Redux
  const isInCart = cart.some((item) => item.id === Number(id)); // check if this product is already in cart

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      if (!res.ok) throw new Error("Failed to fetch product");
      return res.json();
    },
  });

  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <>
      <div className="hidden sm:flex justify-center gap-4 items-center flex-wrap sm:flex-nowrap">
        <div className="gap-4 flex flex-col items-center w-full">
          <img src={product.images[0]} alt={product.title} width={200} />
          <div className="flex gap-3">
            {product.images.map((href) => (
              <img key={href} src={href} alt={product.title} width="60" />
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-semibold">{product.title}</h1>
          <span className="flex gap-4 text-sm text-nowrap pt-3 flex-wrap">
            <StarRating />
            <p className="text-neutralGray">0 reviews</p>
            <p className="text-primary">Submit a review</p>
          </span>
          <hr className="text-neutralGray my-3" />

          <div className="flex gap-4 items-center">
            <h2 className="text-primary font-semibold">${product.price}</h2>
            <h2 className="text-neutralGray text-sm">
              <Discount discount={24} newPrice={product.price} />
            </h2>
            <h2 className="text-tertiary font-semibold text-[12px]">24% Off</h2>
          </div>

          <div className="pt-3.5 flex-col flex gap-4 text-sm text-tryColor">
            <div className="flex justify-between">
              <p>Availability:</p>
              <p>In Stock</p>
            </div>
            <div className="flex justify-between">
              <p>Categories:</p>
              <p>Accessories</p>
            </div>
            <div className="flex justify-between">
              <p>Free Shipping:</p>
            </div>
          </div>

          <hr className="text-neutralGray mt-5" />

          <div className="flex items-center justify-between pt-4">
            <p>Select Color:</p>
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <div className="text-sm">
            Select Size:
            <select className="ml-2 border border-neutralGray rounded-md p-1 w-[70px]">
              <option value="">XS</option>
              <option value="">SM</option>
              <option value="">MD</option>
              <option value="">LG</option>
            </select>
          </div>

          <div className="mt-3.5 flex items-center gap-4">
            <div className="flex gap-3 items-center">
              <div
                className="px-2 text-primary bg-hotDeals shadow-lg border-neutralGray border cursor-pointer rounded"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </div>
              <div>{quantity}</div>
              <div
                className="px-2 text-primary bg-hotDeals shadow-lg cursor-pointer rounded border border-neutralGray"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </div>
            </div>

            {isInCart ? (
              <button
                className="bg-green-500 p-2 rounded text-white px-3 text-sm text-nowrap"
                disabled
              >
                In Cart
              </button>
            ) : (
              <button
                onClick={handleAddToCart}
                className="bg-secondary p-2 border-primary rounded text-primary px-3 text-sm text-nowrap"
              >
                Add to Cart
              </button>
            )}

            <button className="bg-secondary p-2 border-primary rounded text-primary px-3 text-sm">
              <BiHeart />
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <span
          className="flex gap-2 items-center mt-[-29px] text-neutralDark font-semibold"
          onClick={() => navigate("/")}
        >
          <ClickedHeader />
          Back
        </span>
        <br />
        <img src={product.images?.[0]} alt="" className="w-screen h-auto" />
        <br />
        <h1 className="text-3xl font-semibold text-neutralDark">
          {product.title}
        </h1>
        <div>
          <StarRating />
          <p className="text-3xl text-primary font-semibold pt-2">
            ${product.price}
          </p>
          <p className="text-neutralDark font-semibold">Select size</p>
          <div className="flex gap-3">
            <div className="w-3 h-3 p-5 rounded-full border-1 border-neutralGray flex items-center justify-center cursor-pointer hover:border-primary">
              6
            </div>
            <div className="w-3 h-3 p-5 rounded-full border-1 border-neutralGray flex items-center justify-center cursor-pointer hover:border-primary">
              6.5
            </div>
            <div className="w-3 h-3 p-5 rounded-full border-1 border-neutralGray flex items-center justify-center cursor-pointer hover:border-primary">
              7
            </div>
            <div className="w-3 h-3 p-5 rounded-full border-1 border-neutralGray flex items-center justify-center cursor-pointer hover:border-primary">
              7.5
            </div>
            <div className="w-3 h-3 p-5 rounded-full border-1 border-neutralGray flex items-center justify-center cursor-pointer hover:border-primary">
              8
            </div>
          </div>
          <br />
          <p className="text-neutralDark font-semibold">Select color</p>
          <div className="flex gap-3">
            <div className="w-3 h-3 p-5 rounded-full bg-yellow-500 flex items-center justify-center cursor-pointer hover:border-primary"></div>
            <div className="w-3 h-3 p-5 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:border-primary"></div>
            <div className="w-3 h-3 p-5 rounded-full bg-tertiary flex items-center justify-center cursor-pointer hover:border-primary"></div>
            <div className="w-3 h-3 p-5 rounded-full bg-green-950 flex items-center justify-center cursor-pointer hover:border-primary"></div>
            <div className="w-3 h-3 p-5 rounded-full bg-blue-950 flex items-center justify-center cursor-pointer hover:border-primary"></div>
          </div>
        </div>
        {/*  */}
        <div className="mt-3.5 flex items-center gap-4">
          <div className="flex gap-3 items-center">
            <div
              className="px-2 text-primary bg-hotDeals shadow-lg border-neutralGray border cursor-pointer rounded"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </div>
            <div>{quantity}</div>
            <div
              className="px-2 text-primary bg-hotDeals shadow-lg cursor-pointer rounded border border-neutralGray"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </div>
          </div>

          {isInCart ? (
            <button
              className="bg-green-500 p-2 rounded text-white px-3 text-sm text-nowrap"
              disabled
            >
              In Cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-secondary p-2 border-primary rounded text-primary px-3 text-sm text-nowrap"
            >
              Add to Cart
            </button>
          )}

          <button className="bg-secondary p-2 border-primary rounded text-primary px-3 text-sm">
            <BiHeart />
          </button>
        </div>
        <br />
        <p className="text-neutralDark font-semibold">Description</p>
        <span className="text-neutralGray text-[10px]">
          {product.description}
        </span>
      </div>
    </>
  );
}

export default Details;
