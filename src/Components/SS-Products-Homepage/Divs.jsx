import { useQuery } from "@tanstack/react-query";
import Div from "./Div";
import fetchThis from "../../Services/ProductsAPI";

function Divs() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["Products"],
    queryFn: fetchThis, // ✅ FIXED
  });

  console.log(data);

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h2>An Error Occurred</h2>;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-3 py-8">
      {data.slice(10, 14).map((info) => (
        <Div
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

export default Divs;
