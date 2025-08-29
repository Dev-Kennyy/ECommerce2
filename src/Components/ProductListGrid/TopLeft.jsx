function TopLeft() {
  return (
    <div className="bg-hotDeals p-3 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[12rem]">
      <h2 className="text-xs sm:text-sm font-semibold">Hot Deals</h2>
      <ul className="mt-3 flex flex-col gap-2">
        {[
          "Nike",
          "Gabanns",
          "Dolce",
          "Vans",
          "All Stars",
          "Adidas",
          "Gucci",
          "Louis Vuitton",
        ].map((brand, index) => (
          <li key={index} className="flex justify-between text-xs sm:text-sm">
            <p>{brand}</p>
            <p>2</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopLeft;
