function Discount({ discount, newPrice }) {
  const originalPrice = Number(newPrice) / (1 - discount / 100);
  return (
    <p className="">
      <strike>${originalPrice.toFixed(2)}</strike>
    </p>
  );
}

export default Discount;
