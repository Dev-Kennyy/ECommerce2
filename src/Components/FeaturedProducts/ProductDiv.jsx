function ProductDiv({ src, p, money, cancel }) {
  return (
    <div className="flex items-center">
      <img src={src} alt="" width="90px" />
      <div className="flex flex-col gap-2">
        <p className="text-[10px] font-semibold">{p}</p>
        <p>⭐⭐⭐⭐⭐</p>
        <p className="text-tertiary">
          {money} <span className="text-neutralGray">{cancel}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductDiv;
