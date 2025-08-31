import { useQuery } from "@tanstack/react-query";
import fetchThis from "../../Services/ProductsAPI";
import HotProducts from "../HotProducts";
import searchProducts from "../../Services/FindProducts";
import { UseHeaderContext } from "../../Contexts/HeaderContext";

function ProductContainer() {
  const { findProducts } = UseHeaderContext();
  const { data, isLoading } = useQuery({
    queryKey: ["products", findProducts],
    queryFn: () => (findProducts ? searchProducts(findProducts) : fetchThis()),
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">Loading Products, Please wait....</p>
      </div>
    );

  // Handle no results or invalid data
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">No products found.</p>
      </div>
    );
  }

  const products = Array.isArray(data) ? data : [data];

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {products.map((info) => (
        <HotProducts
          title={info.title}
          images={info.images}
          price={info.price}
          key={info.id}
          id={info.id}
        />
      ))}
    </div>
  );
}

export default ProductContainer;
