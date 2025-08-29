import ProductDiv from "./ProductDiv";

function Products() {
  return (
    <div className="flex justify-center items-center gap-6 flex-wrap">
      <ProductDiv
        p="Blue Swade Nike Sneakers"
        src="Vector (2).png"
        money="$449"
        cancel="$89"
      />
      <ProductDiv
        p="Blue Swade Nike Sneakers"
        src="Vector (2).png"
        money="$449"
        cancel="$89"
      />
      <ProductDiv
        p="Blue Swade Nike Sneakers"
        src="Vector (2).png"
        money="$449"
        cancel="$89"
      />
    </div>
  );
}

export default Products;
