// import { UseHeaderContext } from "../Contexts/HeaderContext";

export default async function SearchProducts(findProducts) {
  //   const { findProducts } = UseHeaderContext();
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/?title=${findProducts}`
  );
  const data = await res.json();
  console.log(data);
  return data;
}
