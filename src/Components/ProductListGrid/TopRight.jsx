import { useQuery } from "@tanstack/react-query";
import Adidas from "../Adidas";
import fetchThis from "../../Services/ProductsAPI";
import Loading from "../Loading";
import { UseHeaderContext } from "../../Contexts/HeaderContext";
import SearchProducts from "../../Services/FindProducts";

function TopRight() {
  const { findProducts, setFindProducts } = UseHeaderContext();
  const { data, isLoading, error } = useQuery({
    queryKey: ["hotDeals"],
    queryFn: () => (findProducts ? SearchProducts(findProducts) : fetchThis()),
  });

  if (isLoading) return <Loading />;
  if (error) return <Loading />;
  return (
    <div className="flex flex-col justify-center gap-3">
      <Adidas />
      <div className="bg-hotDeals p-3 flex justify-between">
        <div className="flex text-sm">Total Products: {data.length}</div>
        <div className="flex gap-3">
          <input
            type="text"
            className="shadow rounded shadow-gray outline-primary p-1 text-[10px]"
            value={findProducts || ""}
            onChange={(e) => setFindProducts(e.target.value)}
          />
          <button
            className="bg-primary rounded-sm px-3 py-1 text-white"
            // onClick={}
          >
            Find
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRight;
