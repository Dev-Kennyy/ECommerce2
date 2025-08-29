import { useQuery } from "@tanstack/react-query";
import FlashSaleProduct from "./FlashSaleProduct";
import fetchThis from "../../Services/ProductsAPI";
import Loading from "../Loading";

function Products() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Products"],
    queryFn: fetchThis,
  });
  if (isLoading) return <Loading />;
  if (error) return <h2>An Error Occured</h2>;
  return (
    <div className="flex gap-6 overflow-x-auto whitespace-nowrap px-3">
      {data.slice(0, 8).map((info) => (
        <FlashSaleProduct
          key={info.id}
          title={info.title}
          price={info.price}
          images={info.images}
          id={info.id}
        />
      ))}
    </div>
  );
}

export default Products;
