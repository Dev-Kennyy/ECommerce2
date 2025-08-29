import { useQuery } from "@tanstack/react-query";
import fetchThis from "../../Services/ProductsAPI";
import MegaSaleProduct from "./MegaSaleProduct";

function Products() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Products"],
    queryFn: fetchThis,
  });
  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h2>An Error Occured</h2>;
  return (
    <div className="flex gap-6 overflow-x-auto whitespace-nowrap px-3">
      {data.slice(3, 19).map((info) => (
        <MegaSaleProduct
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
