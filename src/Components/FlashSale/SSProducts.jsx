import { useQuery } from "@tanstack/react-query";
import fetchThis from "../../Services/ProductsAPI";
import FlashSaleProduct from "./FlashSaleProduct";
import Loading from "../Loading";

function SSProducts() {
  const { data, isLoading } = useQuery({
    queryKey: ["SSProducts"],
    queryFn: fetchThis,
  });
  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="flex flex-wrap gap-1 p-2 justify-center">
        {data.slice(8, 12).map((info) => (
          <FlashSaleProduct
            title={info.title}
            price={info.price}
            images={info.images}
            id={info.id}
            key={info.id}
          />
        ))}
      </div>
    </div>
  );
}

export default SSProducts;
