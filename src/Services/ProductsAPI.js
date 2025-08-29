export default async function fetchThis() {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
  const data = await res.json();
  return data;
}
