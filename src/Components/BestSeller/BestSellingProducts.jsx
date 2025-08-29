import { useQuery } from "@tanstack/react-query";
import fetchThis from "../../Services/ProductsAPI";
import Product from "./Product";
import Loading from "../Loading";

function BestSellingProducts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchThis,
  });

  if (isLoading) return <Loading />;
  if (error) return "Error Fetching Product";

  return (
    <div className="flex justify-center gap-4 px-4 pt-3 flex-wrap">
      {data.slice(0, 8).map((info) => (
        <Product
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

export default BestSellingProducts;
